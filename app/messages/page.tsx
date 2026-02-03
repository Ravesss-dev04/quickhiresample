'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Header } from '@/app/components/LayoutModules';
import { 
  Search, MoreVertical, Phone, Video, Paperclip, Send, 
  CheckCircle, Mic, Image, Smile, PhoneOff, VideoOff,
  User, Shield
} from 'lucide-react';

// Mock Data
const INITIAL_CONVERSATIONS = [
    { 
        id: 1, 
        name: "Tech Solutions HR", 
        role: "Recruiter",
        messages: [
            { id: 1, sender: 'them', text: "Hello! We reviewed your profile.", time: "10:00 AM" },
            { id: 2, sender: 'them', text: "When are you available for a call?", time: "10:30 AM" }
        ],
        unread: 2, 
        online: true, 
        avatar: "TS", 
        color: "bg-blue-600",
        verified: true 
    },
    { 
        id: 2, 
        name: "Juan Driver", 
        role: "OddJob Worker",
        messages: [
             { id: 1, sender: 'me', text: "Where are you now?", time: "Yesterday" },
             { id: 2, sender: 'them', text: "I'm on my way with the package. Near SM Makati.", time: "Yesterday" }
        ],
        unread: 0, 
        online: true, 
        avatar: "JD", 
        color: "bg-orange-500",
        verified: true
    },
    { 
        id: 3, 
        name: "HealthFirst Recruit", 
        role: "Company",
        messages: [
            { id: 1, sender: 'them', text: "We received your application. Thanks!", time: "Mon" }
        ],
        unread: 0, 
        online: false, 
        avatar: "HF", 
        color: "bg-red-500",
        verified: false
    },
];

export default function MessagesPage() {
    const [conversations, setConversations] = useState(INITIAL_CONVERSATIONS);
    const [activeChatId, setActiveChatId] = useState(1);
    const [inputText, setInputText] = useState("");
    const [isCallModalOpen, setIsCallModalOpen] = useState(false);
    const [callType, setCallType] = useState<'audio' | 'video'>('audio');
    const [callDuration, setCallDuration] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const activeChat = conversations.find(c => c.id === activeChatId) || conversations[0];

    // Scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [activeChat.messages]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isCallModalOpen) {
            interval = setInterval(() => {
                setCallDuration(prev => prev + 1);
            }, 1000);
        } else {
            setCallDuration(0);
        }
        return () => clearInterval(interval);
    }, [isCallModalOpen]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const newMessage = {
            id: Date.now(),
            sender: 'me',
            text: inputText,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        const updatedConversations = conversations.map(c => {
            if (c.id === activeChatId) {
                return { ...c, messages: [...c.messages, newMessage] };
            }
            return c;
        });

        setConversations(updatedConversations);
        setInputText("");

        // Simulate reply
        setTimeout(() => {
            const replyMessage = {
                id: Date.now() + 1,
                sender: 'them',
                text: "Thanks for the message! I'll get back to you shortly.",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
             const replyConversations = updatedConversations.map(c => {
                if (c.id === activeChatId) {
                    return { ...c, messages: [...c.messages, newMessage, replyMessage] };
                }
                return c;
            });
            setConversations(replyConversations);
        }, 2000);
    };

    const startCall = (type: 'audio' | 'video') => {
        setCallType(type);
        setIsCallModalOpen(true);
    };

    const formatDuration = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="h-screen flex flex-col bg-white overflow-hidden font-sans">
            <Header />
            
            <div className="flex-grow flex overflow-hidden">
                {/* Conversations Sidebar */}
                <div className="w-80 md:w-96 border-r border-gray-200 bg-white flex flex-col">
                    <div className="p-4 border-b border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-slate-800">Messages</h2>
                            <button className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-200 transition">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="relative">
                            <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                            <input type="text" placeholder="Search chats..." className="w-full bg-slate-50 pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 transition" />
                        </div>
                    </div>
                    
                    <div className="flex-grow overflow-y-auto custom-scrollbar">
                        {conversations.map(conv => (
                            <div 
                                key={conv.id} 
                                onClick={() => setActiveChatId(conv.id)}
                                className={`p-4 flex gap-3 hover:bg-gray-50 cursor-pointer transition border-b border-gray-50 ${conv.id === activeChatId ? 'bg-blue-50/60 border-l-4 border-l-blue-600' : 'border-l-4 border-l-transparent'}`}
                            >
                                <div className="relative">
                                    <div className={`w-12 h-12 rounded-full ${conv.color} flex items-center justify-center text-white font-bold text-lg shadow-sm ring-2 ring-white`}>
                                        {conv.avatar}
                                    </div>
                                    {conv.online && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>}
                                </div>
                                <div className="flex-grow min-w-0">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-slate-900 text-sm truncate flex items-center gap-1">
                                            {conv.name}
                                            {conv.verified && <Shield className="w-3 h-3 text-blue-500 fill-blue-500" />}
                                        </h4>
                                        <span className={`text-xs ${conv.unread > 0 ? 'text-blue-600 font-bold' : 'text-gray-400'}`}>{conv.messages[conv.messages.length - 1].time}</span>
                                    </div>
                                    <p className={`text-sm truncate ${conv.unread > 0 ? 'text-slate-800 font-semibold' : 'text-gray-500'}`}>
                                        {conv.messages[conv.messages.length - 1].sender === 'me' ? 'You: ' : ''}{conv.messages[conv.messages.length - 1].text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Chat Area */}
                <div className="flex-grow flex flex-col bg-[#F8F9FA]">
                    {/* Chat Header */}
                    <div className="h-16 bg-white border-b border-gray-200 flex justify-between items-center px-6 shadow-sm z-10">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full ${activeChat.color} flex items-center justify-center text-white font-bold shadow-sm`}>
                                {activeChat.avatar}
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                    {activeChat.name}
                                    {activeChat.verified && <CheckCircle className="w-4 h-4 text-blue-500" />}
                                </h3>
                                <div className="flex items-center gap-1.5">
                                    {activeChat.online ? (
                                        <>
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                            <span className="text-xs text-green-600 font-medium">Active now</span>
                                        </>
                                    ) : (
                                        <span className="text-xs text-gray-400">Offline</span>
                                    )}
                                    <span className="text-gray-300">•</span>
                                    <span className="text-xs text-gray-500">{activeChat.role}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => startCall('audio')} className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition relative group">
                                <Phone className="w-5 h-5" />
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition">Call</span>
                            </button>
                            <button onClick={() => startCall('video')} className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition relative group">
                                <Video className="w-5 h-5" />
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition">Video</span>
                            </button>
                            <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-grow overflow-y-auto p-6 space-y-6">
                        <div className="text-center text-xs text-gray-400 my-4 flex items-center justify-center after:h-px after:w-24 after:bg-gray-200 before:h-px before:w-24 before:bg-gray-200 gap-2">
                            Today
                        </div>
                        
                        {activeChat.messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`flex flex-col max-w-[70%] ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                                    <div className={`px-4 py-3 rounded-2xl shadow-sm text-sm ${
                                        msg.sender === 'me' 
                                        ? 'bg-blue-600 text-white rounded-br-none' 
                                        : 'bg-white text-slate-800 rounded-bl-none border border-gray-100'
                                    }`}>
                                        {msg.text}
                                    </div>
                                    <div className="flex items-center gap-1 mt-1 text-[10px] text-gray-400">
                                        {msg.time}
                                        {msg.sender === 'me' && <CheckCircle className="w-3 h-3 text-blue-500" />}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Chat Input */}
                    <div className="bg-white p-4 border-t border-gray-200">
                        <form onSubmit={handleSendMessage} className="flex gap-3 items-end">
                            <div className="flex gap-2 mb-2">
                                <button type="button" className="text-gray-400 hover:text-blue-600 transition"><Paperclip className="w-5 h-5" /></button>
                                <button type="button" className="text-gray-400 hover:text-blue-600 transition"><Image className="w-5 h-5" /></button>
                            </div>
                            <div className="flex-grow relative">
                                <input 
                                    type="text" 
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="Type a message..." 
                                    className="w-full bg-gray-100 text-slate-800 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                                />
                                <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600">
                                    <Smile className="w-5 h-5" />
                                </button>
                            </div>
                            <button 
                                type="submit" 
                                className={`p-3 rounded-xl transition shadow-lg ${inputText.trim() ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                                disabled={!inputText.trim()}
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
                
                 {/* Right Sidebar - Profile Summary (Fiverr Style) keeping it functional but adapting to selected user */}
                 <div className="w-72 bg-white border-l border-gray-200 hidden xl:block p-6">
                     <div className="text-center mb-6">
                         <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-3 shadow-lg border-4 border-white ${activeChat.color}`}>
                             {activeChat.avatar}
                         </div>
                         <h3 className="font-bold text-slate-800">{activeChat.name}</h3>
                         <p className="text-gray-500 text-sm">{activeChat.role}</p>
                         {activeChat.verified && (
                             <div className="flex justify-center items-center gap-1 mt-2">
                                 <CheckCircle className="w-4 h-4 text-green-500" /> <span className="text-xs font-bold text-green-600">Verified Badge</span>
                             </div>
                         )}
                     </div>
                     
                     <div className="space-y-4">
                         <div className="bg-blue-50 p-4 rounded-lg">
                             <h4 className="font-bold text-xs text-gray-500 uppercase mb-2">Quick Stats</h4>
                             <div className="flex justify-between items-center text-sm mb-1">
                                 <span className="text-gray-600">Rating</span>
                                 <div className="flex text-yellow-500"><Shield className="w-4 h-4 fill-current" /> 4.9</div>
                             </div>
                             <div className="flex justify-between items-center text-sm">
                                 <span className="text-gray-600">Jobs</span>
                                 <span className="font-bold text-slate-900">142</span>
                             </div>
                         </div>
                         
                         <div>
                             <h4 className="font-bold text-xs text-gray-500 uppercase mb-2">Safety Tip</h4>
                             <p className="text-xs text-gray-500 leading-relaxed">
                                 Never transfer money outside of QuickHire. Report suspicious behavior immediately.
                             </p>
                         </div>
                     </div>
                 </div>
            </div>

            {/* CALL MODAL (Functionable Simulation) */}
            {isCallModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-md animate-in fade-in duration-300">
                    <div className="bg-slate-800 rounded-3xl w-full max-w-md p-8 flex flex-col items-center shadow-2xl border border-slate-700 relative overflow-hidden">
                        {/* Background Pulse Animation */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full animate-ping duration-[3000ms]"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/30 rounded-full animate-ping duration-[2000ms] delay-300"></div>
                        </div>

                        <div className="z-10 flex flex-col items-center">
                            <div className={`w-32 h-32 rounded-full ${activeChat.color} flex items-center justify-center text-white font-bold text-4xl shadow-2xl mb-6 ring-4 ring-blue-500/50`}>
                                {activeChat.avatar}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{activeChat.name}</h3>
                            <p className="text-blue-300 mb-8 animate-pulse text-sm font-medium tracking-wide">
                                {callDuration > 0 ? formatDuration(callDuration) : "Connecting..."}
                            </p>

                            <div className="flex gap-8 items-center">
                                <button className="p-4 bg-slate-700 rounded-full text-white hover:bg-slate-600 transition backdrop-blur-sm">
                                    <Mic className="w-6 h-6" />
                                </button>
                                <button 
                                    onClick={() => setIsCallModalOpen(false)}
                                    className="p-6 bg-red-600 rounded-full text-white hover:bg-red-700 transition shadow-lg shadow-red-600/50 transform hover:scale-110"
                                >
                                    <PhoneOff className="w-8 h-8 fill-current" />
                                </button>
                                {callType === 'video' ? (
                                    <button className="p-4 bg-slate-700 rounded-full text-white hover:bg-slate-600 transition backdrop-blur-sm">
                                        <VideoOff className="w-6 h-6" />
                                    </button>
                                ) : (
                                    <button className="p-4 bg-slate-700 rounded-full text-white hover:bg-slate-600 transition backdrop-blur-sm">
                                        <MoreVertical className="w-6 h-6" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
