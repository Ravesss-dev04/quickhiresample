import React from 'react';
import { LiveMap } from './LiveMap';
import { 
  Map as MapIcon, MapPin, Shield, Star, MessageSquare, Briefcase, 
  Smartphone, BarChart, Search, CheckCircle, Clock, Video, 
  CreditCard, Zap, Truck, AlertTriangle, Users, TrendingUp 
} from 'lucide-react';

export const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white pt-16 pb-20 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800 opacity-20 transform -skew-x-12"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-600 opacity-10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center bg-blue-800 bg-opacity-50 rounded-full px-4 py-1 text-sm font-medium border border-blue-700">
                           <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                           Live: 12,345 Verified Companies Hiring Now
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                            The Philippines' Most <span className="text-blue-400">Trusted</span> Hiring Ecosystem
                        </h1>
                        <p className="text-xl text-blue-100 max-w-lg">
                            Verified Profiles • Real-Time Hiring • Live Map Tracking.
                            Whether you're looking for a career or a gig, find it securely on QuickHire.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                             <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl flex-1 hover:bg-white/15 transition cursor-pointer">
                                 <div className="bg-blue-500 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                     <Search className="text-white h-6 w-6" />
                                 </div>
                                 <h3 className="font-bold text-lg mb-1">Find Your Dream Job</h3>
                                 <p className="text-sm text-blue-100 mb-4">5-min apply, instant chat, and verified employers.</p>
                                 <button className="w-full bg-white text-blue-900 font-bold py-2 rounded hover:bg-blue-50 transition">Browse Jobs</button>
                             </div>
                             
                             <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 p-6 rounded-xl flex-1 hover:bg-blue-600/30 transition cursor-pointer">
                                 <div className="bg-slate-800 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                     <Briefcase className="text-white h-6 w-6" />
                                 </div>
                                 <h3 className="font-bold text-lg mb-1">Hire Faster with AI</h3>
                                 <p className="text-sm text-blue-100 mb-4">Smart matching and real-time performance analytics.</p>
                                 <button className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition">Post Job Free</button>
                             </div>
                        </div>
                    </div>
                    
                    {/* Hero Graphic / Map Preview */}
                    <div className="relative hidden lg:block h-[500px] w-full bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/121.0509,14.5547,13,0/800x600?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjazl5a...')] bg-cover bg-center opacity-50"></div>
                         {/* Fallback pattern if no image */}
                         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        
                         {/* Floating Cards */}
                        <div className="absolute top-1/4 left-1/4 bg-white text-slate-900 p-3 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 animate-bounce hover:scale-105 transition duration-300">
                             <div className="flex items-center gap-2">
                                 <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">JD</div>
                                 <div>
                                     <div className="text-xs font-bold">John Doe</div>
                                     <div className="text-[10px] text-gray-500">Web Dev • Makati</div>
                                 </div>
                             </div>
                        </div>

                         <div className="absolute bottom-1/3 right-1/3 bg-white text-slate-900 p-3 rounded-lg shadow-lg transform translate-x-1/4 translate-y-1/4 animate-pulse duration-[3000ms]">
                             <div className="flex items-center gap-2">
                                 <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">TC</div>
                                 <div>
                                     <div className="text-xs font-bold">Tech Corp</div>
                                     <div className="text-[10px] text-blue-600">Hiring: UX Designer</div>
                                 </div>
                             </div>
                        </div>

                         {/* Overlay Text */}
                         <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900 to-transparent p-8">
                             <p className="text-center font-semibold text-lg text-blue-300">Live Map: See who's hiring near you instantly.</p>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const LiveMapSection = () => {
    return <LiveMap />;
}

export const VerificationSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                         <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                            <Shield className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">🛡️ Built on Trust. Everyone is Verified.</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            We take safety seriously. QuickHire uses advanced AI screenings to ensure that every applicant, company, and gig worker is legitimate.
                        </p>
                        
                        <div className="space-y-6">
                             <div className="flex items-start gap-4">
                                 <div className="mt-1">
                                     <Users className="w-6 h-6 text-green-500" />
                                 </div>
                                 <div>
                                     <h4 className="font-bold text-slate-900">Applicant Verification</h4>
                                     <p className="text-sm text-gray-500">Facial match, Valid IDs, and Skills Tests.</p>
                                 </div>
                             </div>
                              <div className="flex items-start gap-4">
                                 <div className="mt-1">
                                     <Briefcase className="w-6 h-6 text-blue-600" />
                                 </div>
                                 <div>
                                     <h4 className="font-bold text-slate-900">Company Verification</h4>
                                     <p className="text-sm text-gray-500">SEC/DTI Docs, Business Permits, and Background Checks.</p>
                                 </div>
                             </div>
                             
                             <div className="bg-green-50 p-4 rounded-lg border border-green-100 mt-6">
                                 <div className="flex items-center gap-2 mb-2">
                                     <CheckCircle className="w-5 h-5 text-green-600" />
                                     <span className="font-bold text-green-800">Verification Stats</span>
                                 </div>
                                 <div className="grid grid-cols-3 gap-4 text-center">
                                     <div>
                                         <div className="font-bold text-slate-800">98.7%</div>
                                         <div className="text-xs text-gray-600">Trust Score</div>
                                     </div>
                                      <div>
                                         <div className="font-bold text-slate-800">0</div>
                                         <div className="text-xs text-gray-600">Scam Reports</div>
                                     </div>
                                      <div>
                                         <div className="font-bold text-slate-800">45k+</div>
                                         <div className="text-xs text-gray-600">Verified Users</div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                    
                    <div className="relative">
                        {/* ID Card Graphic */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 shadow-2xl relative z-10">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                <div className="bg-blue-600 h-2"></div>
                                <div className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex gap-4">
                                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-400">👤</div>
                                            <div>
                                                <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                                                    Maria Santos <CheckCircle className="w-4 h-4 text-blue-500" />
                                                </h3>
                                                <p className="text-sm text-gray-500">Web Developer</p>
                                                <div className="flex items-center mt-2 text-xs text-gray-400 gap-2">
                                                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full">ID Verified</span>
                                                    <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Skill Verified</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-green-500">98%</div>
                                            <div className="text-xs text-gray-400">Match</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-xs text-gray-500">Verified since 2023</span>
                                    <span className="text-xs font-mono text-gray-400">ID: #832910</span>
                                </div>
                            </div>
                            
                            {/* Floating "Verified" Badge */}
                             <div className="absolute -right-4 -top-4 bg-white p-3 rounded-full shadow-lg border-2 border-green-500 animate-bounce">
                                 <Shield className="w-8 h-8 text-green-500 fill-green-100" />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const OddJobsSection = () => {
    return (
        <section id="oddjobs" className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                     <span className="text-blue-400 font-bold tracking-wider text-sm">REAL-TIME GIGS</span>
                     <h2 className="text-4xl font-bold mt-2">⚡ OddJobs - Quick Cash, Gigs Now</h2>
                     <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Like Lalamove or Grab, but for any service. Find work in seconds or get things done immediately.</p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {/* Gig Card 1 */}
                     <div className="bg-slate-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-blue-500 transition duration-300">
                         <div className="p-6">
                             <div className="flex justify-between items-start mb-4">
                                 <div className="p-3 bg-orange-500/20 rounded-lg text-orange-400">
                                     <Truck className="w-6 h-6" />
                                 </div>
                                 <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-bold">Immedate</span>
                             </div>
                             <h3 className="text-xl font-bold mb-2">Package Moving help</h3>
                             <p className="text-gray-400 text-sm mb-4">Need help moving boxes to 2nd floor.</p>
                             
                             <div className="flex items-center text-sm text-gray-300 mb-2">
                                 <MapPin className="w-4 h-4 mr-2" /> 2km away - Makati
                             </div>
                             <div className="flex items-center text-sm text-gray-300">
                                 <Clock className="w-4 h-4 mr-2" /> Est. 45 mins
                             </div>
                         </div>
                         <div className="bg-slate-700/50 p-4 flex justify-between items-center">
                             <span className="text-xl font-bold text-white">₱800</span>
                             <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold">Accept Gig</button>
                         </div>
                     </div>

                      {/* Gig Card 2 */}
                      <div className="bg-slate-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-blue-500 transition duration-300">
                         <div className="p-6">
                             <div className="flex justify-between items-start mb-4">
                                 <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                     <Zap className="w-6 h-6" />
                                 </div>
                                 <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full font-bold">Today</span>
                             </div>
                             <h3 className="text-xl font-bold mb-2">Website Hotfix</h3>
                             <p className="text-gray-400 text-sm mb-4">Fix CSS issue on landing page.</p>
                             
                             <div className="flex items-center text-sm text-gray-300 mb-2">
                                 <MapPin className="w-4 h-4 mr-2" /> Remote / BGC
                             </div>
                             <div className="flex items-center text-sm text-gray-300">
                                 <Clock className="w-4 h-4 mr-2" /> 2-3 Hours
                             </div>
                         </div>
                         <div className="bg-slate-700/50 p-4 flex justify-between items-center">
                             <span className="text-xl font-bold text-white">₱1,500</span>
                             <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold">Apply Now</button>
                         </div>
                     </div>

                      {/* Gig Card 3 */}
                      <div className="bg-slate-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-blue-500 transition duration-300">
                         <div className="p-6">
                             <div className="flex justify-between items-start mb-4">
                                 <div className="p-3 bg-yellow-500/20 rounded-lg text-yellow-400">
                                     <AlertTriangle className="w-6 h-6" />
                                 </div>
                                 <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full font-bold">Urgent</span>
                             </div>
                             <h3 className="text-xl font-bold mb-2">Plumbing Repair</h3>
                             <p className="text-gray-400 text-sm mb-4">Leaking pipe in kitchen, QC area.</p>
                             
                             <div className="flex items-center text-sm text-gray-300 mb-2">
                                 <MapPin className="w-4 h-4 mr-2" /> 5km away - QC
                             </div>
                             <div className="flex items-center text-sm text-gray-300">
                                 <Clock className="w-4 h-4 mr-2" /> 1 Hour
                             </div>
                         </div>
                         <div className="bg-slate-700/50 p-4 flex justify-between items-center">
                             <span className="text-xl font-bold text-white">₱1,200</span>
                             <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold">Accept Gig</button>
                         </div>
                     </div>
                 </div>
                 
                 <div className="mt-12 text-center">
                     <p className="text-gray-500 mb-4">Live updates every 30 seconds</p>
                     <button className="border border-white hover:bg-white hover:text-slate-900 text-white font-bold py-3 px-8 rounded-full transition">View All Live Gigs</button>
                 </div>
            </div>
        </section>
    )
}

export const FeaturesGridSection = () => {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Experience the Future of Hiring</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">More than just a job board. A complete ecosystem for your career and business.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {/* Feature 1 */}
                    <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
                        <div className="bg-indigo-100 p-4 rounded-full mb-4">
                            <MessageSquare className="w-8 h-8 text-indigo-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Chat & Call Style</h3>
                        <p className="text-sm text-gray-500">Like Viber/WhatsApp but for work. Video calls, voice notes, and instant files.</p>
                    </div>

                      {/* Feature 2 */}
                      <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
                        <div className="bg-rose-100 p-4 rounded-full mb-4">
                            <BarChart className="w-8 h-8 text-rose-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Performance Tracker</h3>
                        <p className="text-sm text-gray-500">Transparent incident reports, feedback, and ratings for every job.</p>
                    </div>

                      {/* Feature 3 */}
                      <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
                        <div className="bg-cyan-100 p-4 rounded-full mb-4">
                            <CreditCard className="w-8 h-8 text-cyan-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">E-Wallet System</h3>
                        <p className="text-sm text-gray-500">Secure payments with low 4-5% platform fees. Cash out instantly.</p>
                    </div>

                      {/* Feature 4 */}
                      <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
                        <div className="bg-teal-100 p-4 rounded-full mb-4">
                            <TrendingUp className="w-8 h-8 text-teal-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Credit Score</h3>
                        <p className="text-sm text-gray-500">Build your professional reputation score to get better offers and visibility.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const CTASection = () => {
    return (
        <section className="bg-blue-600 py-20 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-6">Ready to Transform How You Work?</h2>
                <p className="text-xl text-blue-100 mb-10">Join 50,000+ Filipinos who trust QuickHirePH today.</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-blue-600 font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1">
                        Sign Up Free
                    </button>
                     <button className="bg-blue-700 text-white border border-blue-500 font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-blue-800 transition transform hover:-translate-y-1">
                        Post a Job
                    </button>
                </div>
            </div>
        </section>
    )
}
