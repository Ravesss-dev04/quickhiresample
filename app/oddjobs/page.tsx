'use client';

import React from 'react';
import { Header, Footer } from '@/app/components/LayoutModules';
import { Search, MapPin, Zap, Clock, Star, Heart, Share2 } from 'lucide-react';

const ODD_JOBS = [
    { id: 1, title: "Plumbing Fix - Kitchen Sink", price: "₱500", distance: "0.5km", time: "ASAP", rating: 4.8, reviews: 12, category: "Plumbing" },
    { id: 2, title: "Dog Walking (2 Dogs)", price: "₱300", distance: "1.2km", time: "Today, 4PM", rating: 5.0, reviews: 5, category: "Pet Care" },
    { id: 3, title: "Assemble IKEA Furniture", price: "₱800", distance: "2.0km", time: "Tomorrow", rating: 4.5, reviews: 20, category: "Assembly" },
    { id: 4, title: "Grocery Run", price: "₱250 + Tip", distance: "0.2km", time: "Now", rating: 4.9, reviews: 8, category: "Errands" },
    { id: 5, title: "House Cleaning (Studio)", price: "₱1,200", distance: "3.5km", time: "Sat, 9AM", rating: 4.7, reviews: 34, category: "Cleaning" },
    { id: 6, title: "Moving Helper", price: "₱1,000", distance: "5.0km", time: "Sun, 8AM", rating: 5.0, reviews: 2, category: "Moving" },
];

export default function OddJobsPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Header />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Quick Gigs & OddJobs</h1>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">Find help nearby or earn extra cash with quick tasks. Verified locals, instant payments.</p>
                    
                    <div className="max-w-3xl mx-auto bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2">
                         <div className="flex-grow flex items-center bg-gray-50 rounded-xl px-4 py-3">
                             <Search className="text-gray-400 w-5 h-5 mr-3" />
                             <input type="text" placeholder="What do you need help with?" className="bg-transparent w-full outline-none text-slate-800 placeholder-gray-500 font-medium" />
                         </div>
                         <div className="flex-grow md:max-w-xs flex items-center bg-gray-50 rounded-xl px-4 py-3">
                             <MapPin className="text-gray-400 w-5 h-5 mr-3" />
                             <input type="text" placeholder="Current Location" className="bg-transparent w-full outline-none text-slate-800 placeholder-gray-500 font-medium" defaultValue="Current Location" />
                         </div>
                         <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3 rounded-xl transition shadow-lg">
                             Find Gigs
                         </button>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" /> Gigs Near You
                    </h2>
                    <a href="/map" className="text-purple-600 font-bold hover:underline">View Map</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ODD_JOBS.map((job) => (
                        <div key={job.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition group relative">
                            <span className="absolute top-4 right-4 bg-purple-50 text-purple-600 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                                {job.category}
                            </span>
                            
                            <h3 className="font-bold text-lg text-slate-900 mb-2 pr-8">{job.title}</h3>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.distance}</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.time}</span>
                            </div>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                <div>
                                    <span className="block text-2xl font-black text-slate-900">{job.price}</span>
                                    <div className="flex items-center gap-1 text-xs font-bold text-yellow-500">
                                        <Star className="w-3 h-3 fill-current" /> {job.rating} <span className="text-gray-400 font-normal">({job.reviews})</span>
                                    </div>
                                </div>
                                <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold hover:bg-purple-600 transition shadow-lg shadow-purple-200">
                                    Accept
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
