'use client';

import React, { useState } from 'react';
import { Header } from '@/app/components/LayoutModules';
import { MapPin, Navigation, User, Briefcase, Search, Filter, List, Globe } from 'lucide-react';

const MOCK_JOBS_NEARBY = [
    { id: 1, title: "Plumbing Fix", lat: 14.5547, lng: 121.0244, type: "gig", price: "₱500", distance: "0.2km" },
    { id: 2, title: "Urgent: Dog Walker", lat: 14.5510, lng: 121.0250, type: "gig", price: "₱200", distance: "0.5km" },
    { id: 3, title: "Office Receptionist", lat: 14.5580, lng: 121.0200, type: "full-time", price: "₱25k/mo", distance: "1.2km" },
];

export default function MapPage() {
    const [filter, setFilter] = useState('all');
    const [selectedJob, setSelectedJob] = useState<number | null>(null);

    return (
        <div className="h-screen flex flex-col bg-white">
            <Header />
            
            <div className="flex-grow relative overflow-hidden">
                {/* Map Simulation Layer */}
                <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                    {/* Placeholder for an actual map API (Google Maps / Leaflet) */}
                    <div className="w-full h-full relative overflow-hidden bg-[#e5e7eb] opacity-80" 
                         style={{ 
                             backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Manila_Metro_Rail_Transit_System_Line_3_Map.svg/1200px-Manila_Metro_Rail_Transit_System_Line_3_Map.svg.png")', // Generic placeholder map image
                             backgroundSize: 'cover',
                             backgroundPosition: 'center'
                         }}>
                         
                         {/* Simulated Pins */}
                         {MOCK_JOBS_NEARBY.map((job) => (
                             <div 
                                key={job.id}
                                onClick={() => setSelectedJob(job.id)}
                                className={`absolute cursor-pointer transform hover:scale-110 transition duration-300 drop-shadow-xl group
                                    ${job.id === 1 ? 'top-1/2 left-1/2' : ''}
                                    ${job.id === 2 ? 'top-1/3 left-1/3' : ''}
                                    ${job.id === 3 ? 'bottom-1/3 right-1/4' : ''}
                                `}
                             >
                                 <div className={`
                                     w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white
                                     ${selectedJob === job.id ? 'bg-blue-600 scale-125 z-20' : 'bg-slate-700 hover:bg-blue-500'}
                                 `}>
                                     {job.type === 'gig' ? <Navigation className="w-5 h-5 fill-current" /> : <Briefcase className="w-5 h-5" />}
                                 </div>
                                 <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-3 rounded-full whitespace-nowrap pointer-events-none transition">
                                     {job.title} • {job.price}
                                 </div>
                             </div>
                         ))}

                         {/* User Location Pulse */}
                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span className="relative flex h-6 w-6">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-6 w-6 bg-blue-500 border-2 border-white"></span>
                            </span>
                         </div>
                    </div>
                </div>

                {/* Floating UI Controls */}
                <div className="absolute top-4 left-4 z-10 w-80 space-y-3">
                    {/* Search Bar */}
                    <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-100 flex gap-2">
                        <div className="bg-gray-100 p-2 rounded-lg flex items-center justify-center text-gray-400">
                           <Search className="w-5 h-5" />
                        </div>
                        <input type="text" placeholder="Search area..." className="w-full bg-transparent text-sm focus:outline-none text-slate-700" />
                    </div>

                    {/* Filter Pills */}
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {['All', 'Gigs', 'Full-time', 'Remote'].map((f) => (
                            <button 
                                key={f} 
                                onClick={() => setFilter(f.toLowerCase())}
                                className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-md transition whitespace-nowrap ${filter === f.toLowerCase() ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 hover:bg-gray-50'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bottom Sheet for Job Details (Mobile/Desktop Hybrid) */}
                {selectedJob && (
                    <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 animate-in slide-in-from-bottom-5">
                         <div className="flex justify-between items-start mb-4">
                             <div>
                                 <h3 className="font-bold text-xl text-slate-900">{MOCK_JOBS_NEARBY.find(j => j.id === selectedJob)?.title}</h3>
                                 <p className="text-sm text-gray-500 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" /> {MOCK_JOBS_NEARBY.find(j => j.id === selectedJob)?.distance} away
                                 </p>
                             </div>
                             <button onClick={() => setSelectedJob(null)} className="text-gray-400 hover:text-slate-900 font-bold p-2">✕</button>
                         </div>
                         
                         <div className="flex gap-4 mb-6">
                            <div className="flex-1 bg-green-50 p-3 rounded-xl text-center">
                                <span className="block text-xs text-green-600 font-bold uppercase">Pay</span>
                                <span className="text-lg font-black text-slate-800">{MOCK_JOBS_NEARBY.find(j => j.id === selectedJob)?.price}</span>
                            </div>
                            <div className="flex-1 bg-blue-50 p-3 rounded-xl text-center">
                                <span className="block text-xs text-blue-600 font-bold uppercase">Type</span>
                                <span className="text-lg font-black text-slate-800 capitalize">{MOCK_JOBS_NEARBY.find(j => j.id === selectedJob)?.type}</span>
                            </div>
                         </div>

                         <div className="space-y-3">
                             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-2">
                                 <Navigation className="w-4 h-4" /> Navigate
                             </button>
                             <button className="w-full bg-white border-2 border-slate-200 hover:border-slate-800 text-slate-800 font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2">
                                 View Details
                             </button>
                         </div>
                    </div>
                )}
            </div>
        </div>
    );
}