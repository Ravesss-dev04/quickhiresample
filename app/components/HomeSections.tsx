'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, MapPin, Shield, Bot, Building2, Zap, 
  Briefcase, Clock, Star, DollarSign, Map as MapIcon,
  CheckCircle, ArrowRight, Truck, Users, Activity
} from 'lucide-react';
import { LiveMap } from './LiveMap'; // Import standard map if needed, or build preview

export const HeroHomeSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden py-24 lg:py-32">
       {/* Background Image/Overlay would go here - Simulated with gradient and shapes */}
       <div className="absolute inset-0 opacity-20">
            {/* Pattern or Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center blend-multiply"></div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                Find <span className="text-blue-400">Full-Time Careers</span> & <br/> 
                <span className="text-orange-400">Quick Gig Work</span> in One Place
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mb-10 font-light">
                The Philippines' only platform with <span className="font-semibold text-white">verified profiles</span> and <span className="font-semibold text-white">real-time job mapping</span>.
            </p>

            {/* Search Interface */}
            <div className="bg-white p-2 rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row gap-2">
                <div className="flex-grow relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Job title, company, or keywords" 
                        className="w-full text-slate-900 pl-11 pr-4 py-4 rounded-xl border border-transparent focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white transition outline-none"
                    />
                </div>
                
                <div className="relative md:w-1/3">
                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <select className="w-full appearance-none text-slate-900 pl-11 pr-10 py-4 rounded-xl border border-transparent focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white transition outline-none cursor-pointer">
                        <option>Metro Manila</option>
                        <option>Cebu City</option>
                        <option>Davao City</option>
                        <option>Remote (PH)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                         <MapIcon className="h-4 w-4 text-gray-400" />
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="flex-grow md:flex-none px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition transform hover:scale-105">
                        Search Jobs
                    </button>
                    <button className="flex-grow md:flex-none p-4 rounded-xl border-2 border-slate-200 text-slate-500 hover:border-blue-500 hover:text-blue-600 bg-white transition" title="View on Map">
                        <MapIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
                 <button className="bg-blue-600/20 backdrop-blur-md border border-blue-400/30 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600/40 transition flex items-center gap-2">
                    Looking for Work?
                 </button>
                 <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full font-medium hover:bg-white/20 transition flex items-center gap-2">
                    Need Workers?
                 </button>
            </div>

            {/* Popular Tags */}
            <div className="mt-8 text-sm text-blue-200 flex flex-wrap justify-center gap-2">
                <span className="opacity-75">Popular:</span>
                {['Web Developer', 'Customer Service', 'Delivery Rider', 'Virtual Assistant', 'Sales'].map(tag => (
                    <span key={tag} className="bg-white/5 px-3 py-1 rounded-full border border-white/10 hover:bg-white/20 cursor-pointer transition">
                        {tag}
                    </span>
                ))}
            </div>
       </div>
    </section>
  );
};

export const ValuePropSection = () => {
    return (
        <section className="py-20 bg-white border-b border-gray-100">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                     <div className="flex flex-col items-start p-6 rounded-2xl bg-blue-50/50 border border-blue-100 hover:shadow-lg transition group">
                         <div className="bg-blue-100 p-4 rounded-xl mb-6 group-hover:bg-blue-600 transition duration-300">
                             <Shield className="w-8 h-8 text-blue-600 group-hover:text-white" />
                         </div>
                         <h3 className="text-xl font-bold text-slate-900 mb-3">Verified & Safe</h3>
                         <ul className="space-y-2 text-gray-600">
                             <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> 100% ID Verified Profiles</li>
                             <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Secure Payment Protection</li>
                             <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Scam-free Guarantee</li>
                         </ul>
                     </div>

                     <div className="flex flex-col items-start p-6 rounded-2xl bg-orange-50/50 border border-orange-100 hover:shadow-lg transition group">
                         <div className="bg-orange-100 p-4 rounded-xl mb-6 group-hover:bg-orange-600 transition duration-300">
                             <MapPin className="w-8 h-8 text-orange-600 group-hover:text-white" />
                         </div>
                         <h3 className="text-xl font-bold text-slate-900 mb-3">Live Job Map</h3>
                         <ul className="space-y-2 text-gray-600">
                             <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Real-time Gigs Nearby</li>
                             <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Commute Distance Calculator</li>
                             <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Location-based Alerts</li>
                         </ul>
                     </div>

                     <div className="flex flex-col items-start p-6 rounded-2xl bg-purple-50/50 border border-purple-100 hover:shadow-lg transition group">
                         <div className="bg-purple-100 p-4 rounded-xl mb-6 group-hover:bg-purple-600 transition duration-300">
                             <Bot className="w-8 h-8 text-purple-600 group-hover:text-white" />
                         </div>
                         <h3 className="text-xl font-bold text-slate-900 mb-3">AI Smart Matching</h3>
                         <ul className="space-y-2 text-gray-600">
                             <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Instant Resume Analysis</li>
                             <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Skill-Fit Scoring</li>
                             <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500"/> Automated Shortlisting</li>
                         </ul>
                     </div>
                 </div>
             </div>
        </section>
    )
}

export const DualPlatformSection = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold text-slate-900">One Platform, Two Ways to Work</h2>
                     <p className="text-gray-600 mt-2">Whether you want a stable career or quick cash, we have you covered.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* QuickHire Side */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-blue-100 hover:border-blue-500 transition relative group">
                         <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Career</div>
                         <div className="p-10 flex flex-col items-center text-center h-full">
                             <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                 <Building2 className="w-10 h-10 text-blue-600" />
                             </div>
                             <h3 className="text-3xl font-extrabold text-slate-900 mb-2">QuickHire</h3>
                             <p className="text-blue-600 font-medium mb-6">Build Your Professional Career</p>
                             
                             <div className="space-y-3 mb-8 text-left w-full max-w-xs">
                                 <div className="flex items-center gap-3">
                                     <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                     <span className="text-gray-600">Full-time & Part-time Contracts</span>
                                 </div>
                                 <div className="flex items-center gap-3">
                                     <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                     <span className="text-gray-600">Verified Companies & Benefits</span>
                                 </div>
                                 <div className="flex items-center gap-3">
                                     <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                     <span className="text-gray-600">Long-term Career Growth</span>
                                 </div>
                             </div>
                             
                             <button className="mt-auto w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                                 Browse Full-Time Jobs
                             </button>
                         </div>
                    </div>

                    {/* OddJobs Side */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-orange-100 hover:border-orange-500 transition relative group">
                         <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Gig Economy</div>
                         <div className="p-10 flex flex-col items-center text-center h-full">
                             <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition">
                                 <Zap className="w-10 h-10 text-orange-600" />
                             </div>
                             <h3 className="text-3xl font-extrabold text-slate-900 mb-2">OddJobs</h3>
                             <p className="text-orange-600 font-medium mb-6">Earn Quick Cash Instantly</p>
                             
                             <div className="space-y-3 mb-8 text-left w-full max-w-xs">
                                 <div className="flex items-center gap-3">
                                     <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                     <span className="text-gray-600">Same-day Tasks & Errands</span>
                                 </div>
                                 <div className="flex items-center gap-3">
                                     <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                     <span className="text-gray-600">Instant Daily Payouts</span>
                                 </div>
                                 <div className="flex items-center gap-3">
                                     <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                     <span className="text-gray-600">Flexible Schedule</span>
                                 </div>
                             </div>
                             
                             <button className="mt-auto w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-200">
                                 Browse Quick Gigs
                             </button>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const FeaturedJobsCarousel = () => {
    const jobs = [
        { id: 1, type: 'quickhire', title: 'Senior Web Developer', company: 'TechSolutions Inc.', location: 'Makati', salary: '₱40k - ₱55k', posted: '2d ago' },
        { id: 2, type: 'oddjob', title: 'Food Delivery Rider', company: 'Quick Grab', location: 'Pasig City', salary: '₱350 - ₱450/trip', posted: 'Start Now' },
        { id: 3, type: 'quickhire', title: 'Customer Service Rep', company: 'BPO Global', location: 'Taguig', salary: '₱25k - ₱30k', posted: '1d ago' },
        { id: 4, type: 'oddjob', title: 'Office Cleaning', company: 'Private Office', location: 'Quezon City', salary: '₱800/day', posted: 'Today' },
        { id: 5, type: 'quickhire', title: 'Graphic Designer', company: 'Creative Studio', location: 'Remote', salary: '₱35k - ₱50k', posted: '3d ago' },
        { id: 6, type: 'oddjob', title: 'Moving Assistant', company: 'Lipat Bahay', location: 'Mandaluyong', salary: '₱1,500/job', posted: 'Tomorrow' },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">Popular Jobs Right Now</h2>
                        <p className="text-gray-600 mt-1">Trending opportunities in your area</p>
                    </div>
                    <Link href="/find-jobs" className="text-blue-600 font-bold flex items-center gap-1 hover:underline">
                        See All Jobs <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map(job => (
                        <div key={job.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition duration-300 group cursor-pointer bg-white">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white shadow-sm ${job.type === 'quickhire' ? 'bg-blue-600' : 'bg-orange-500'}`}>
                                        {job.company.substring(0,1)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 leading-tight">{job.title}</div>
                                        <div className="text-xs text-gray-500 mt-0.5">{job.company}</div>
                                    </div>
                                </div>
                                <div className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${
                                    job.type === 'quickhire' ? 'bg-blue-50 text-blue-700' : 'bg-orange-50 text-orange-700'
                                }`}>
                                    {job.type === 'quickhire' ? 'Full-Time' : 'OddJob'}
                                </div>
                            </div>
                            
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center text-sm text-gray-600">
                                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                    {job.location}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                                    {job.salary}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                    {job.posted}
                                </div>
                            </div>

                            <button className="w-full text-center py-2 rounded-lg border border-gray-200 font-bold text-sm text-gray-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition">
                                Quick Apply
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export const TrustStatsSection = () => {
    return (
        <section className="bg-slate-900 py-16 text-white border-y border-slate-800">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
                    <div className="p-4">
                        <div className="text-4xl lg:text-5xl font-extrabold text-blue-400 mb-2">10k+</div>
                        <div className="text-sm text-gray-400 font-medium uppercase tracking-widest">Verified Users</div>
                    </div>
                    <div className="p-4">
                        <div className="text-4xl lg:text-5xl font-extrabold text-blue-400 mb-2">2k+</div>
                        <div className="text-sm text-gray-400 font-medium uppercase tracking-widest">Companies Hiring</div>
                    </div>
                    <div className="p-4">
                        <div className="text-4xl lg:text-5xl font-extrabold text-green-400 mb-2">₱50M+</div>
                        <div className="text-sm text-gray-400 font-medium uppercase tracking-widest">Paid Out</div>
                    </div>
                    <div className="p-4">
                        <div className="text-4xl lg:text-5xl font-extrabold text-yellow-400 mb-2">4.8</div>
                         <div className="text-sm text-gray-400 font-medium uppercase tracking-widest flex items-center justify-center gap-1">
                             App Rating <div className="flex"><Star className="w-3 h-3 fill-yellow-400" /><Star className="w-3 h-3 fill-yellow-400" /><Star className="w-3 h-3 fill-yellow-400" /><Star className="w-3 h-3 fill-yellow-400" /><Star className="w-3 h-3 fill-yellow-400" /></div>
                         </div>
                    </div>
                </div>
             </div>
        </section>
    );
};

export const SimplifiedSignupSection = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
            {/* Shapes */}
            <div className="absolute top-0 right-0 p-12 opacity-10">
                <Shield className="w-64 h-64 text-white" />
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get started in 2 minutes</h2>
                 <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                     Join thousands of Filipinos building their careers and finding quick gigs.
                 </p>

                 <div className="bg-white rounded-2xl shadow-2xl max-w-2xl mx-auto p-8">
                     <div className="flex flex-col md:flex-row gap-4 mb-6">
                         <input type="text" placeholder="Enter your mobile number or email" className="flex-grow md:flex-1 p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-slate-800" />
                         <button className="bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition">
                             Join Now
                         </button>
                     </div>
                     
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <button className="flex-1 py-3 px-4 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition flex items-center justify-center gap-2">
                             <Users className="w-4 h-4" /> I want to work
                         </button>
                         <button className="flex-1 py-3 px-4 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition flex items-center justify-center gap-2">
                             <Briefcase className="w-4 h-4" /> I want to hire
                         </button>
                     </div>

                     <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-3 text-sm text-gray-500">
                         <div className="flex -space-x-2">
                             <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white"></div>
                             <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white"></div>
                             <div className="w-8 h-8 rounded-full bg-orange-100 border-2 border-white"></div>
                         </div>
                         <p>
                             <span className="font-bold text-slate-800">Maria</span> just earned <span className="font-bold text-green-600">₱15,000</span> this week delivering with OddJobs.
                         </p>
                     </div>
                 </div>
            </div>
        </section>
    );
};
