'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Header, Footer } from '@/app/components/LayoutModules';
import { Search, MapPin, Filter, DollarSign, Briefcase, Clock, Building, Monitor, Zap } from 'lucide-react';

const MOCK_JOBS = [
    { id: 1, title: "Senior React Developer", company: "Tech Solutions Inc.", type: "Full-time", salary: "₱80k - ₱120k", location: "Remote", posted: "2h ago", tags: ["React", "Node.js", "TypeScript"], isRemote: true },
    { id: 2, title: "Registered Nurse (ER)", company: "HealthFirst Clinic", type: "Full-time", salary: "₱30k - ₱45k", location: "Quezon City", posted: "5h ago", tags: ["Healthcare", "Emergency", "License"], isRemote: false },
    { id: 3, title: "Social Media Manager", company: "Global BPO Services", type: "Contract", salary: "₱25k - ₱35k", location: "Makati City", posted: "1d ago", tags: ["Marketing", "Social Media", "English"], isRemote: false },
    { id: 4, title: "Civil Engineer", company: "BuildRight Construction", type: "On-site", salary: "₱40k - ₱60k", location: "Pasig City", posted: "2d ago", tags: ["Engineering", "AutoCAD", "Site"], isRemote: false },
    { id: 5, title: "HR Assistant", company: "Tech Solutions Inc.", type: "Full-time", salary: "₱20k - ₱25k", location: "BGC", posted: "3d ago", tags: ["HR", "Recruitment", "Admin"], isRemote: false },
    { id: 6, title: "Virtual Assistant", company: "Overseas Client", type: "Part-time", salary: "₱300/hr", location: "Remote", posted: "30m ago", tags: ["Admin", "English", "Office"], isRemote: true },
    { id: 7, title: "Project Manager", company: "Web Dev Co.", type: "Contract", salary: "₱50k", location: "Remote", posted: "4h ago", tags: ["Agile", "Management"], isRemote: true },
];

function JobListing() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type') || 'all';

    const getFilteredJobs = () => {
        if (type === 'remote') return MOCK_JOBS.filter(j => j.isRemote);
        if (type === 'onsite') return MOCK_JOBS.filter(j => !j.isRemote);
        if (type === 'part-time') return MOCK_JOBS.filter(j => j.type === 'Part-time');
        if (type === 'contract') return MOCK_JOBS.filter(j => j.type === 'Contract');
        return MOCK_JOBS;
    };

    const filteredJobs = getFilteredJobs();
    
    const titleMap: Record<string, string> = {
        'remote': 'Remote Jobs',
        'onsite': 'On-site Jobs',
        'part-time': 'Part-time Jobs',
        'contract': 'Contract Jobs',
        'all': 'All Jobs'
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Header />

            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-slate-900 mb-6">{titleMap[type]}</h1>
                    
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                            <input type="text" placeholder="Job title, keywords, or company" className="w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" />
                        </div>
                        <div className="flex-1 relative">
                            <MapPin className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                            <input type="text" placeholder="Location" className="w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" defaultValue={type === 'remote' ? 'Remote' : ''} />
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition shadow-lg shadow-blue-200">
                            Search Jobs
                        </button>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="hidden lg:block space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-lg">Filters</h3>
                                <button className="text-sm text-blue-600 font-bold hover:underline">Clear</button>
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="font-bold text-sm text-gray-700 mb-2 block">Job Type</label>
                                    <div className="space-y-2">
                                        {['Full-time', 'Part-time', 'Contract', 'Internship'].map(t => (
                                            <label key={t} className="flex items-center gap-2 cursor-pointer">
                                                <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" defaultChecked={type.toLowerCase().includes(t.toLowerCase())} />
                                                <span className="text-sm text-gray-600">{t}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="font-bold text-sm text-gray-700 mb-2 block">Salary Range</label>
                                    <div className="space-y-2">
                                        {['< ₱20k', '₱20k - ₱50k', '₱50k - ₱100k', '> ₱100k'].map(s => (
                                            <label key={s} className="flex items-center gap-2 cursor-pointer">
                                                <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                                                <span className="text-sm text-gray-600">{s}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Job List */}
                    <div className="lg:col-span-3 space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-500 font-medium">{filteredJobs.length} jobs found</span>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500 text-sm">Sort by:</span>
                                <select className="bg-transparent font-bold text-slate-800 outline-none cursor-pointer">
                                    <option>Most Relevant</option>
                                    <option>Newest</option>
                                    <option>Highest Salary</option>
                                </select>
                            </div>
                        </div>

                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job) => (
                                <Link href={`/jobs/${job.id}`} key={job.id} className="block group">
                                    <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-lg transition relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                                                    <Building className="w-6 h-6 text-gray-400" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition">{job.title}</h3>
                                                    <p className="text-sm text-gray-500 font-medium">{job.company}</p>
                                                </div>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${job.isRemote ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'}`}>
                                                {job.isRemote ? 'Remote' : 'On-site'}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap gap-3 mb-4">
                                            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                                                <Briefcase className="w-3.5 h-3.5" /> {job.type}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                                                <DollarSign className="w-3.5 h-3.5" /> {job.salary}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100">
                                                <MapPin className="w-3.5 h-3.5" /> {job.location}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1.5 rounded-lg border border-green-100">
                                                <Clock className="w-3.5 h-3.5" /> {job.posted}
                                            </span>
                                        </div>

                                        <div className="flex gap-2">
                                            {job.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 transition">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">No jobs found</h3>
                                <p className="text-gray-500 text-sm">Try adjusting your filters or search query.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default function FindJobsPage() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <JobListing />
        </Suspense>
    );
}
