import React from 'react';
import { 
    Star, MessageCircle, Phone, Video, DollarSign, Wallet, FileText, Check, TrendingUp 
} from 'lucide-react';

export const PerformanceSection = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">📊 Transparent Performance Metrics</h2>
                    <p className="text-gray-600 mt-2">Track performance in real-time. Incidents, feedback, and ratings are all transparent.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-4xl mx-auto">
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">Maria Santos</h3>
                                <p className="text-gray-500">Web Developer • 3 Years Experience</p>
                            </div>
                            <div className="text-right">
                                <div className="text-4xl font-bold text-slate-900 flex items-center justify-end">
                                    4.7 <Star className="w-6 h-6 text-yellow-400 ml-2 fill-current" />
                                </div>
                                <p className="text-sm text-gray-500">Overall Rating</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                            <div className="bg-gray-50 p-4 rounded-lg text-center">
                                <div className="font-bold text-blue-600 text-xl">98%</div>
                                <div className="text-xs text-gray-500">Response</div>
                            </div>
                             <div className="bg-gray-50 p-4 rounded-lg text-center">
                                <div className="font-bold text-green-600 text-xl">96%</div>
                                <div className="text-xs text-gray-500">Punctuality</div>
                            </div>
                             <div className="bg-gray-50 p-4 rounded-lg text-center">
                                <div className="font-bold text-purple-600 text-xl">94%</div>
                                <div className="text-xs text-gray-500">Quality</div>
                            </div>
                             <div className="bg-gray-50 p-4 rounded-lg text-center">
                                <div className="font-bold text-orange-600 text-xl">92%</div>
                                <div className="text-xs text-gray-500">Skills</div>
                            </div>
                             <div className="bg-slate-900 p-4 rounded-lg text-center text-white">
                                <div className="font-bold text-xl">95%</div>
                                <div className="text-xs text-gray-400">Success Rate</div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                             <h4 className="font-bold text-slate-900 mb-4">Recent Feedback</h4>
                             <div className="space-y-4">
                                 <div className="bg-white p-4 rounded-lg shadow-sm">
                                     <p className="text-gray-700 italic">"Excellent code quality, delivered 2 days early. Highly recommended!"</p>
                                     <div className="text-xs text-gray-500 mt-2 font-bold">- Tech Solutions Inc</div>
                                 </div>
                                  <div className="bg-white p-4 rounded-lg shadow-sm">
                                     <p className="text-gray-700 italic">"Very professional and great communication throughout the project."</p>
                                     <div className="text-xs text-gray-500 mt-2 font-bold">- Startup Hub</div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const ChatSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                         <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                            <MessageCircle className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">💬 Instant Connect. Like Viber, but for Work.</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            No more emailing and waiting for days. Chat directly with employers, schedule interviews instantly, or hop on a video call.
                        </p>
                         <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full"><MessageCircle className="w-4 h-4 text-green-600" /></div>
                                <span className="font-medium text-slate-700">Encrypted Chat</span>
                            </li>
                             <li className="flex items-center gap-3">
                                <div className="bg-purple-100 p-2 rounded-full"><Video className="w-4 h-4 text-purple-600" /></div>
                                <span className="font-medium text-slate-700">HD Video & Voice Calls</span>
                            </li>
                             <li className="flex items-center gap-3">
                                <div className="bg-orange-100 p-2 rounded-full"><FileText className="w-4 h-4 text-orange-600" /></div>
                                <span className="font-medium text-slate-700">Instant File Sharing</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-2 hover:rotate-0 transition duration-500">
                        {/* Chat UI Header */}
                        <div className="bg-blue-600 p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold border-2 border-white">TS</div>
                                <div>
                                    <div className="font-bold text-sm">Tech Solutions Inc <span className="text-[10px] align-top bg-green-400 text-green-900 px-1 rounded ml-1">Verified</span></div>
                                    <div className="text-xs text-blue-200 flex items-center gap-1"><div className="w-2 h-2 bg-green-400 rounded-full"></div> Online</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Phone className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100" />
                                <Video className="w-5 h-5 cursor-pointer opacity-80 hover:opacity-100" />
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="bg-slate-50 p-6 h-80 overflow-y-auto space-y-4">
                            <div className="flex justify-end">
                                <div className="bg-blue-100 text-slate-800 p-3 rounded-lg rounded-tr-none max-w-xs shadow-sm">
                                    <p className="text-sm">Hello, I'm interested in the Web Dev position.</p>
                                    <div className="text-[10px] text-gray-500 text-right mt-1">2:30 PM</div>
                                </div>
                            </div>
                             <div className="flex justify-start">
                                <div className="bg-white text-slate-800 p-3 rounded-lg rounded-tl-none max-w-xs shadow-sm border border-gray-100">
                                    <p className="text-sm">Hi! Thanks for your interest. Can you share your portfolio?</p>
                                    <div className="text-[10px] text-gray-400 text-right mt-1">2:31 PM</div>
                                </div>
                            </div>
                             <div className="flex justify-end">
                                <div className="bg-blue-100 text-slate-800 p-3 rounded-lg rounded-tr-none max-w-xs shadow-sm">
                                    <p className="text-sm">Sure! Here is a link: github.com/maria-dev</p>
                                    <div className="text-[10px] text-gray-500 text-right mt-1">2:32 PM</div>
                                </div>
                            </div>
                             <div className="flex justify-start">
                                <div className="bg-white text-slate-800 p-3 rounded-lg rounded-tl-none max-w-xs shadow-sm border border-gray-100">
                                    <p className="text-sm">Great! Would you be available for a quick call?</p>
                                    <div className="mt-3 flex gap-2">
                                        <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700">Accept Call</button>
                                        <button className="border border-gray-300 text-gray-600 text-xs px-3 py-1 rounded hover:bg-gray-50">Schedule</button>
                                    </div>
                                    <div className="text-[10px] text-gray-500 text-right mt-1">2:33 PM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const MonetizationSection = () => {
    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold">💰 Fair & Transparent Pricing</h2>
                    <p className="text-gray-400 mt-2">No hidden fees. We only grow when you grow.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {/* Card 1 */}
                     <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition">
                         <div className="text-blue-400 font-bold mb-4 uppercase tracking-wide text-sm">Job Seekers</div>
                         <h3 className="text-4xl font-bold mb-6">Free<span className="text-lg text-gray-500 font-normal"> / forever</span></h3>
                         <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Earn Credits</li>
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Build Reputation Score</li>
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Instant Cash Out</li>
                         </ul>
                         <button className="w-full bg-white text-slate-900 font-bold py-3 rounded-lg hover:bg-gray-100">Sign Up Free</button>
                     </div>

                      {/* Card 2 */}
                      <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl border border-blue-500 shadow-2xl transform scale-105">
                         <div className="text-yellow-300 font-bold mb-4 uppercase tracking-wide text-sm">OddJobs Platform</div>
                         <h3 className="text-4xl font-bold mb-2">4-5%<span className="text-lg text-blue-200 font-normal"> fee</span></h3>
                         <p className="text-blue-200 text-sm mb-6">Lowest platform fee in the market.</p>
                         <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-white" /> Low Service Fee</li>
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-white" /> Instant Payout via E-Wallet</li>
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-white" /> No Hidden Charges</li>
                         </ul>
                         <button className="w-full bg-yellow-400 text-blue-900 font-bold py-3 rounded-lg hover:bg-yellow-300">Start Gigs</button>
                     </div>

                      {/* Card 3 */}
                      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition">
                         <div className="text-purple-400 font-bold mb-4 uppercase tracking-wide text-sm">Employers</div>
                         <h3 className="text-4xl font-bold mb-6">Flexible</h3>
                         <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Post 1st Job Free</li>
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Credit Packs Available</li>
                            <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500" /> Premium Analytics</li>
                         </ul>
                         <button className="w-full bg-slate-700 text-white font-bold py-3 rounded-lg border border-slate-600 hover:bg-slate-600">View Pricing</button>
                     </div>
                </div>

                {/* Credit Score Visual */}
                <div className="mt-16 bg-slate-800 rounded-xl p-8 border border-slate-600 max-w-2xl mx-auto">
                    <h3 className="text-center font-bold text-xl mb-6">Credit Score System</h3>
                    <div className="bg-slate-900 rounded-lg p-6">
                        <div className="flex justify-between items-end mb-2">
                             <div className="text-sm text-gray-400">Maria's Trust Score</div>
                             <div className="text-3xl font-bold text-green-400">780<span className="text-sm text-gray-500">/850</span></div>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-4 mb-4">
                            <div className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                             <span>Getting Started</span>
                             <span>Verifed</span>
                             <span>Professional</span>
                             <span className="text-white font-bold">Excellent</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const JobPostingSection = () => {
    return (
        <section className="py-20 bg-white">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="flex flex-col md:flex-row items-center gap-12">
                     <div className="md:w-1/2">
                         <h2 className="text-3xl font-bold text-slate-900 mb-6">🚀 Hire Faster with Smart Job Posting</h2>
                         <p className="text-gray-600 mb-8">
                             Our guided workflow helps you create the perfect job post in minutes. AI suggests keywords and salaries to maximize visibility.
                         </p>
                         <div className="space-y-6">
                             <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">1</div>
                                 <div>
                                     <h4 className="font-bold">Job Details</h4>
                                     <p className="text-sm text-gray-500">Role, Description, and Key Responsibilities</p>
                                 </div>
                             </div>
                              <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">2</div>
                                 <div>
                                     <h4 className="font-bold">AI Optimization</h4>
                                     <p className="text-sm text-gray-500">We analyze market trends to suggest better keywords.</p>
                                 </div>
                             </div>
                              <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">3</div>
                                 <div>
                                     <h4 className="font-bold">Live Preview</h4>
                                     <p className="text-sm text-gray-500">See exactly how your job looks on the Live Map.</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                     
                     <div className="md:w-1/2 bg-gray-50 p-8 rounded-2xl border border-gray-200">
                         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                             <div className="flex justify-between items-start mb-4">
                                 <div>
                                     <h3 className="font-bold text-lg">Senior Web Developer</h3>
                                     <p className="text-sm text-gray-500">Tech Corp • Makati (Remote)</p>
                                 </div>
                                 <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">New</span>
                             </div>
                             
                             <div className="bg-green-50 border border-green-100 p-3 rounded-lg mb-4">
                                 <div className="flex items-center gap-2 mb-1">
                                     <TrendingUp className="w-4 h-4 text-green-600" />
                                     <span className="text-xs font-bold text-green-700">AI Optimization Results</span>
                                 </div>
                                 <div className="text-xs text-green-800">
                                     Estimated Views: <strong>210/week</strong> (+320%)
                                 </div>
                             </div>

                             <div className="space-y-2 mb-4">
                                 <div className="h-2 bg-gray-100 rounded w-full"></div>
                                 <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                                 <div className="h-2 bg-gray-100 rounded w-4/6"></div>
                             </div>
                             
                             <button className="w-full bg-blue-600 text-white font-bold py-2 rounded">Post Job Now</button>
                         </div>
                     </div>
                 </div>
             </div>
        </section>
    )
}
