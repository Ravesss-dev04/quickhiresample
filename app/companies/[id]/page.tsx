import React from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/app/components/LayoutModules';
import { 
    MapPin, CheckCircle, Star, Globe, Users, MessageCircle, 
    Share2, Flag, Briefcase, Map as MapIcon, Clock, Heart 
} from 'lucide-react';

// Mock Data (In a real app, this would come from an API/DB based on params.id)
const getCompanyData = (id: string) => {
    // Default to Tech company
    let data = {
        name: "Tech Solutions Inc.",
        type: "Tech",
        industry: "Information Technology",
        logo: "TS",
        color: "bg-blue-600",
        rating: 4.8,
        reviews: 124,
        verified: true,
        location: "BGC, Corporate Center, Taguig",
        website: "www.techsolutions.ph",
        size: "500-1000 employees",
        founded: "2015",
        about: "Tech Solutions Inc. is a premier software development firm dedicated to building verified, high-performance applications. We value transparency and innovation.",
        jobs: [
            { title: "Senior React Developer", type: "Full-time", salary: "₱80k - ₱120k", location: "Remote / BGC" },
            { title: "UI/UX Designer", type: "Full-time", salary: "₱50k - ₱80k", location: "BGC" },
            { title: "DevOps Engineer", type: "Contract", salary: "₱90k - ₱140k", location: "Remote" }
        ],
        images: ["/office1.jpg", "/office2.jpg"]
    };

    // Clinic Example
    if (id === '2') {
        data = {
            name: "HealthFirst Clinic",
            type: "Healthcare",
            industry: "Healthcare & Diagnostics",
            logo: "HC",
            color: "bg-red-500",
            rating: 4.9,
            reviews: 89,
            verified: true,
            location: "Quezon Ave, Quezon City",
            website: "www.healthfirst.ph",
            size: "50-200 employees",
            founded: "2010",
            about: "HealthFirst Clinic is a verified multi-specialty center providing top-notch outpatient care. We are committed to patient safety and employee well-being.",
            jobs: [
                { title: "Registered Nurse (ER)", type: "Full-time", salary: "₱30k - ₱45k", location: "Quezon City" },
                { title: "Medical Technologist", type: "Full-time", salary: "₱25k - ₱35k", location: "Quezon City" },
                { title: "Pediatrician", type: "Consultant", salary: "Commission Based", location: "Quezon City" },
                { title: "Clinic Receptionist", type: "Full-time", salary: "₱18k - ₱22k", location: "Quezon City" }
            ],
            images: ["/clinic1.jpg", "/clinic2.jpg"]
        };
    }
    
    return data;
};

export default async function CompanyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const company = getCompanyData(id);

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Header />

            {/* Banner */}
            <div className={`h-64 w-full ${id === '2' ? 'bg-red-900' : 'bg-slate-900'} relative overflow-hidden`}>
                 <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
                 <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-20">
                {/* Header Card */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8 flex flex-col md:flex-row gap-6 items-start">
                    <div className={`w-32 h-32 ${company.color} rounded-xl flex items-center justify-center text-white text-4xl font-bold shadow-lg border-4 border-white`}>
                        {company.logo}
                    </div>
                    
                    <div className="flex-grow pt-2">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                                    {company.name} 
                                    {company.verified && <CheckCircle className="w-6 h-6 text-green-500 fill-green-50" />}
                                </h1>
                                <p className="text-gray-500 flex items-center gap-2 mt-1">
                                    <Globe className="w-4 h-4" /> {company.website} • <Users className="w-4 h-4" /> {company.size}
                                </p>
                                <div className="flex items-center gap-2 mt-3">
                                    <div className="flex items-center text-yellow-400">
                                        <Star className="w-5 h-5 fill-current" />
                                        <span className="text-slate-900 font-bold ml-1 text-lg">{company.rating}</span>
                                    </div>
                                    <span className="text-gray-400 text-sm">| {company.reviews} Verified Reviews</span>
                                    {/* Performance Tracker Module Badge */}
                                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded border border-blue-100 font-semibold ml-2">
                                        Top Rated Employer
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-sm transition">
                                    <MessageCircle className="w-4 h-4" /> Chat with HR
                                </button>
                                <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-lg font-bold flex items-center gap-2 shadow-sm transition">
                                    <Share2 className="w-4 h-4" /> Share
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About Section */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-gray-100 pb-4">About {company.name}</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {company.about}
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <div className="text-xs text-gray-500 uppercase tracking-wide">Industry</div>
                                    <div className="font-semibold text-slate-900">{company.industry}</div>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <div className="text-xs text-gray-500 uppercase tracking-wide">Founded</div>
                                    <div className="font-semibold text-slate-900">{company.founded}</div>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <div className="text-xs text-gray-500 uppercase tracking-wide">Location</div>
                                    <div className="font-semibold text-slate-900">{company.location}</div>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <div className="text-xs text-gray-500 uppercase tracking-wide">Verification Level</div>
                                    <div className="font-semibold text-green-600 flex items-center gap-1">Level 3 (Highest) <CheckCircle className="w-3 h-3" /></div>
                                </div>
                            </div>
                        </div>

                        {/* Jobs Section (Module 7) */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                             <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                                <h2 className="text-xl font-bold text-slate-900">Open Positions ({company.jobs.length})</h2>
                                <Link href="/find-jobs" className="text-blue-600 font-semibold text-sm hover:underline">View All</Link>
                             </div>

                             <div className="space-y-4">
                                {company.jobs.map((job, idx) => (
                                    <div key={idx} className="border border-gray-100 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition cursor-pointer group">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition">{job.title}</h3>
                                                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {job.type}</span>
                                                    <span className="flex items-center gap-1 font-semibold text-green-600"><Briefcase className="w-3 h-3" /> {job.salary}</span>
                                                </div>
                                            </div>
                                            <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded text-sm font-bold hover:bg-blue-600 hover:text-white transition">Apply</button>
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </div>

                        {/* Reviews Section (Module 3) */}
                         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                             <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-gray-100 pb-4">Performance Reviews</h2>
                             
                             <div className="flex items-center gap-8 mb-8">
                                 <div className="text-center">
                                     <div className="text-5xl font-bold text-slate-900">{company.rating}</div>
                                     <div className="flex text-yellow-400 justify-center my-2">★★★★★</div>
                                     <div className="text-sm text-gray-500">{company.reviews} reviews</div>
                                 </div>
                                 
                                 <div className="flex-grow space-y-2">
                                     <div className="flex items-center gap-2 text-sm">
                                         <span className="w-24">Work-Life</span>
                                         <div className="h-2 flex-grow bg-gray-100 rounded-full"><div className="h-full bg-blue-500 rounded-full w-[90%]"></div></div>
                                         <span className="font-bold">4.8</span>
                                     </div>
                                      <div className="flex items-center gap-2 text-sm">
                                         <span className="w-24">Management</span>
                                         <div className="h-2 flex-grow bg-gray-100 rounded-full"><div className="h-full bg-blue-500 rounded-full w-[85%]"></div></div>
                                         <span className="font-bold">4.5</span>
                                     </div>
                                      <div className="flex items-center gap-2 text-sm">
                                         <span className="w-24">Culture</span>
                                         <div className="h-2 flex-grow bg-gray-100 rounded-full"><div className="h-full bg-blue-500 rounded-full w-[95%]"></div></div>
                                         <span className="font-bold">4.9</span>
                                     </div>
                                 </div>
                             </div>
                             
                             {/* Review Card */}
                             <div className="border-t border-gray-100 pt-6">
                                 <div className="flex items-start gap-4">
                                     <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">A</div>
                                     <div>
                                         <h4 className="font-bold text-sm">Anonymous Employee</h4>
                                         <div className="flex text-yellow-400 text-xs mb-2">★★★★★</div>
                                         <p className="text-gray-600 italic">"Great environment. {company.type === 'Healthcare' ? 'The medical equipment is state-of-the-art and patient load is managed well.' : 'The tech stack is modern and management listens to developers.'}"</p>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="space-y-6">
                        {/* Live Map Module (Module 4) */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                                <h3 className="font-bold text-slate-900 flex items-center gap-2"><MapIcon className="w-4 h-4 text-blue-600" /> Location</h3>
                            </div>
                            <div className="h-64 bg-slate-200 relative group cursor-pointer">
                                {/* Simulated Map */}
                                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/121.0409,14.6447,14,0/400x300?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjazl5a...')] bg-cover bg-center opacity-70"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <MapPin className={`w-12 h-12 ${company.type === 'Healthcare' ? 'text-red-600' : 'text-blue-600'} drop-shadow-lg animate-bounce`} fill="currentColor" />
                                </div>
                                <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded shadow text-xs font-bold">
                                    {company.location}
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 text-xs text-gray-500 text-center">
                                Detailed Directions available in App
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-slate-900 mb-4">Contact HR</h3>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm">HR</div>
                                <div>
                                    <div className="font-bold text-sm">Human Resources</div>
                                    <div className="text-green-500 text-xs flex items-center gap-1">● Online</div>
                                </div>
                            </div>
                            <button className="w-full bg-slate-900 text-white font-bold py-2 rounded hover:bg-slate-800 transition">Message Now</button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
