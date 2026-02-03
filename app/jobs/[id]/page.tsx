'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { Header, Footer } from '@/app/components/LayoutModules';
import { Building, MapPin, DollarSign, Briefcase, Clock, CheckCircle, Share2, Flag } from 'lucide-react';
import Link from 'next/link';

export default function JobDetailsPage() {
    const params = useParams();
    const id = params.id;

    // Mock Data Lookup (In real app, fetch from API)
    const job = {
        title: "Senior React Developer",
        company: "Tech Solutions Inc.",
        location: "Remote",
        type: "Full-time",
        salary: "₱80k - ₱120k",
        description: "We are seeking a talented React Developer to join our team...",
        posted: "2h ago",
        requirements: [
            "3+ years of React experience",
            "Proficiency in TypeScript",
            "Experience with Next.js is a plus"
        ]
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
            <Header />
            
            <main className="flex-grow max-w-4xl mx-auto px-4 py-8 w-full">
                <Link href="/find-jobs" className="text-gray-500 text-sm font-bold mb-6 block hover:text-blue-600">
                    &larr; Back to Jobs
                </Link>

                <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex gap-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <Building className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900 mb-1">{job.title}</h1>
                                <p className="text-lg text-gray-600 font-medium">{job.company} • <span className="text-blue-600">{job.location}</span></p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                             <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition"><Share2 className="w-5 h-5" /></button>
                             <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition"><Flag className="w-5 h-5" /></button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-gray-100">
                         <div className="bg-gray-50 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold text-gray-700">
                             <Briefcase className="w-4 h-4 text-gray-400" /> {job.type}
                         </div>
                         <div className="bg-green-50 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold text-green-700">
                             <DollarSign className="w-4 h-4 text-green-500" /> {job.salary}
                         </div>
                         <div className="bg-blue-50 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-bold text-blue-700">
                             <Clock className="w-4 h-4 text-blue-500" /> Posted {job.posted}
                         </div>
                    </div>

                    <div className="space-y-6">
                        <section>
                            <h3 className="font-bold text-lg text-slate-900 mb-3">Job Description</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {job.description}
                                <br /><br />
                                As a Senior React Developer, you will be responsible for building and maintaining user-interface components for our web applications. You will work closely with designers and backend developers to create seamless user experiences.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-bold text-lg text-slate-900 mb-3">Requirements</h3>
                            <ul className="space-y-2">
                                {job.requirements.map((req, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600">
                                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-100">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition text-lg">
                            Apply Now
                        </button>
                    </div>
                </div>
            </main>
             <Footer />
        </div>
    );
}