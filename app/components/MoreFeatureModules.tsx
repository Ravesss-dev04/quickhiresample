import React from 'react';
import { 
    Cpu, PieChart, Lock, Star, ChevronLeft, ChevronRight, Check, Shield
} from 'lucide-react';

export const AIHRSection = () => {
    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                     <div className="lg:w-1/2 order-2 lg:order-1">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 relative">
                            {/* Chat Interface */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">AI</div>
                                    <div className="bg-blue-50 p-3 rounded-lg rounded-tl-none">
                                        <p className="text-sm text-slate-800">I found 23 perfect matches for your Web Developer role.</p>
                                    </div>
                                </div>
                                
                                <div className="pl-11 space-y-3">
                                    <div className="bg-white border border-green-100 p-3 rounded-lg shadow-sm hover:border-green-300 transition cursor-pointer">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h5 className="font-bold text-sm">Maria S.</h5>
                                                <p className="text-xs text-green-600 font-bold">95% Match</p>
                                            </div>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">3yr Exp</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2">"Strong portfolio, 4.8 rating, available immediately"</p>
                                        <div className="flex gap-2 mt-2">
                                            <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">View Profile</button>
                                            <button className="text-xs text-blue-600 border border-blue-200 px-3 py-1 rounded hover:bg-blue-50">Schedule</button>
                                        </div>
                                    </div>

                                     <div className="bg-white border border-gray-100 p-3 rounded-lg shadow-sm hover:border-gray-200 transition cursor-pointer opacity-70">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h5 className="font-bold text-sm">Juan D.</h5>
                                                <p className="text-xs text-blue-600 font-bold">92% Match</p>
                                            </div>
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">5yr Exp</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">AI</div>
                                    <div className="bg-blue-50 p-3 rounded-lg rounded-tl-none">
                                        <p className="text-sm text-slate-800">Would you like me to draft interview questions based on Maria's weak points in React?</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600">20+</div>
                                    <div className="text-xs text-gray-500 w-24">Hours saved per hire</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2">
                         <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                            <Cpu className="w-6 h-6 text-purple-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">🤖 Meet Your AI HR Assistant</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Stop sifting through hundreds of resumes. Let our AI analyze, match, and even conduct initial screenings for you.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 mt-0.5" />
                                <span className="text-gray-700"><strong>Smart Matching:</strong> Matches based on skills, personality, and culture fit.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 mt-0.5" />
                                <span className="text-gray-700"><strong>Automated Screening:</strong> AI conducts initial chat interviews 24/7.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 mt-0.5" />
                                <span className="text-gray-700"><strong>Predictive Analytics:</strong> Predicts candidate success rate with 87% accuracy.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const DashboardSection = () => {
    return (
        <section className="py-20 bg-white">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">📈 Data-Driven Hiring</h2>
                    <p className="text-gray-600 mt-4">Powerful analytics for employers to optimize their hiring funnel.</p>
                </div>

                <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-slate-700 pb-8">
                        <div>
                            <div className="text-gray-400 text-sm mb-1">Total Applications</div>
                            <div className="text-3xl font-bold">147</div>
                            <div className="text-green-400 text-xs flex items-center mt-1">↑ 12% vs last week</div>
                        </div>
                         <div>
                            <div className="text-gray-400 text-sm mb-1">Interview Rate</div>
                            <div className="text-3xl font-bold">42%</div>
                            <div className="text-blue-400 text-xs flex items-center mt-1">Healthy</div>
                        </div>
                         <div>
                            <div className="text-gray-400 text-sm mb-1">Time-to-Hire</div>
                            <div className="text-3xl font-bold">8 days</div>
                            <div className="text-green-400 text-xs flex items-center mt-1">↓ 3 days faster</div>
                        </div>
                         <div>
                            <div className="text-gray-400 text-sm mb-1">Cost Per Hire</div>
                            <div className="text-3xl font-bold">₱2,100</div>
                            <div className="text-gray-500 text-xs flex items-center mt-1">Industry avg: ₱4,500</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Mock Chart Area */}
                        <div>
                            <h4 className="font-bold mb-4 flex items-center gap-2"><PieChart className="w-4 h-4" /> Application Funnel</h4>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Views</span>
                                        <span className="text-gray-400">1,240</span>
                                    </div>
                                    <div className="w-full bg-slate-700 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                                    </div>
                                </div>
                                 <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Applied</span>
                                        <span className="text-gray-400">147 (11.8%)</span>
                                    </div>
                                    <div className="w-full bg-slate-700 rounded-full h-2">
                                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: '12%' }}></div>
                                    </div>
                                </div>
                                 <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Interviewed</span>
                                        <span className="text-gray-400">62 (5%)</span>
                                    </div>
                                    <div className="w-full bg-slate-700 rounded-full h-2">
                                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                                    </div>
                                </div>
                                 <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Hired</span>
                                        <span className="text-gray-400">12 (1%)</span>
                                    </div>
                                    <div className="w-full bg-slate-700 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '1%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Insights */}
                        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                             <h4 className="font-bold mb-4 text-yellow-400 flex items-center gap-2">⚠️ AI Insights</h4>
                             <p className="text-sm text-gray-300 mb-4">
                                 "Your 'Senior Backend' job description is getting 40% fewer views than industry average. Consider adding 'Remote' options or specifying salary range."
                             </p>
                             <div className="flex gap-3">
                                 <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-2 rounded">Apply Suggestion</button>
                                 <button className="text-gray-400 hover:text-white text-xs px-3 py-2">Dismiss</button>
                             </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>
    )
}

export const TrustSafetySection = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                     <span className="text-green-600 font-bold tracking-wider text-sm uppercase">Safety First</span>
                    <h2 className="text-3xl font-bold text-slate-900 mt-2">🔒 Secure Hiring, Guaranteed</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                            <Lock className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Secure Payments</h3>
                        <p className="text-gray-600">Escrow system for OddJobs. Funds are held safely until the job is done.</p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                         <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                            <Shield className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Dispute Resolution</h3>
                        <p className="text-gray-600">24/7 support and mediation team to handle any issues fairly.</p>
                    </div>
                     <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                         <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                            <Star className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Incident Reporting</h3>
                        <p className="text-gray-600">Real-time reporting and emergency contact sharing for physical gigs.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">🌟 Success Stories</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl relative">
                        <div className="flex items-center gap-4 mb-4">
                             <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                             <div>
                                 <h4 className="font-bold">Maria C.</h4>
                                 <p className="text-xs text-gray-500">Web Developer</p>
                             </div>
                        </div>
                        <p className="text-gray-600 italic">"Found my dream job in 2 weeks. The verification system gave me instant credibility with employers."</p>
                        <div className="flex text-yellow-400 mt-4">★★★★★</div>
                    </div>

                     <div className="bg-gray-50 p-6 rounded-xl relative">
                        <div className="flex items-center gap-4 mb-4">
                             <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                             <div>
                                 <h4 className="font-bold">TechStart Ph</h4>
                                 <p className="text-xs text-gray-500">Startup Company</p>
                             </div>
                        </div>
                        <p className="text-gray-600 italic">"Hired 5 devs in 2 weeks with the AI assistant. Saved us 40+ hours of screening time."</p>
                        <div className="flex text-yellow-400 mt-4">★★★★★</div>
                    </div>

                     <div className="bg-gray-50 p-6 rounded-xl relative">
                        <div className="flex items-center gap-4 mb-4">
                             <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                             <div>
                                 <h4 className="font-bold">Juan D.</h4>
                                 <p className="text-xs text-gray-500">Delivery Partner</p>
                             </div>
                        </div>
                        <p className="text-gray-600 italic">"I earn ₱25k/week with consistent gigs. The E-Wallet makes cashing out instant."</p>
                        <div className="flex text-yellow-400 mt-4">★★★★★</div>
                    </div>
                </div>
             </div>
        </section>
    )
}
