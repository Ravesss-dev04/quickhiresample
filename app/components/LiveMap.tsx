'use client';

import React, { useState, useEffect } from 'react';
import { 
  MapPin, Truck, TrendingUp, 
  Briefcase, Clock, Search, Filter,
  Navigation
} from 'lucide-react';

type MarkerType = 'company' | 'seeker' | 'oddjob';

interface Marker {
    id: number;
    type: MarkerType;
    top: string;
    left: string;
    title: string;
    subtitle: string;
    description?: string;
    location: string;
}

const INITIAL_MARKERS: Marker[] = [
    { id: 1, type: 'company', top: '30%', left: '30%', title: 'Technology Solutions Inc.', subtitle: 'Hiring: Senior Dev (₱120k)', location: 'Makati' },
    { id: 2, type: 'seeker', top: '60%', left: '60%', title: 'Maria S.', subtitle: 'Verified Applicant', description: 'Web Developer', location: 'BGC' },
    { id: 3, type: 'oddjob', top: '75%', left: '25%', title: 'Moving Assist', subtitle: '₱500', description: 'Available Now', location: 'Pasay' },
    { id: 4, type: 'company', top: '20%', left: '70%', title: 'Creative Studio', subtitle: 'Hiring: Designer', location: 'Quezon City' },
    { id: 5, type: 'oddjob', top: '40%', left: '80%', title: 'Plumbing Fix', subtitle: '₱1,200', location: 'Mandaluyong' },
    { id: 6, type: 'seeker', top: '80%', left: '40%', title: 'John D.', subtitle: 'Verified Applicant', description: 'Driver', location: 'Paranaque' },
];

export const LiveMap = () => {
    const [markers, setMarkers] = useState<Marker[]>(INITIAL_MARKERS);
    const [activeFilter, setActiveFilter] = useState<MarkerType | 'all'>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [focusedLocation, setFocusedLocation] = useState<string | null>(null);

    // Filter effect
    useEffect(() => {
        let filtered = INITIAL_MARKERS;
        
        if (activeFilter !== 'all') {
            filtered = filtered.filter(m => m.type === activeFilter);
        }

        if (focusedLocation) {
            filtered = filtered.filter(m => m.location.toLowerCase().includes(focusedLocation.toLowerCase()));
        }

        setMarkers(filtered);
    }, [activeFilter, focusedLocation]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery) return;

        setIsSearching(true);
        // Simulate API search/loading
        setTimeout(() => {
            setIsSearching(false);
            setFocusedLocation(searchQuery);
            // Auto-select "all" to show everything in that area
            setActiveFilter('all');
        }, 800);
    };

    const clearSearch = () => {
        setSearchQuery('');
        setFocusedLocation(null);
    };

    return (
        <section id="map" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-12">
                   <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">🌏 Live Job Map</h2>
                   <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
                        See the job market in real-time. Find verified companies, active job seekers, and instant gigs happening around you.
                   </p>
               </div>

               <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 relative h-[700px] flex flex-col">
                   {/* Combined Search & Filter Bar */}
                   <div className="absolute top-6 left-6 right-6 z-30 flex flex-col md:flex-row gap-4 justify-between pointer-events-none">
                       
                       {/* Interactive Legend / Filter */}
                       <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-lg border border-slate-100 flex gap-2 pointer-events-auto self-start">
                           <button 
                               onClick={() => { setActiveFilter('company'); setFocusedLocation(null); }}
                               className={`px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 transition ${activeFilter === 'company' ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500 ring-offset-1' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
                           >
                               <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                               </span>
                               Companies
                           </button>
                           <button 
                               onClick={() => { setActiveFilter('seeker'); setFocusedLocation(null); }}
                               className={`px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 transition border ${activeFilter === 'seeker' ? 'bg-green-100 text-green-700 border-green-200 ring-2 ring-green-500 ring-offset-1' : 'bg-white text-gray-600 border-gray-100 hover:bg-gray-50'}`}
                           >
                                <div className="w-3 h-3 bg-green-500 rounded-full box-shadow-md"></div> Job Seekers
                           </button>
                           <button 
                               onClick={() => { setActiveFilter('oddjob'); setFocusedLocation(null); }}
                               className={`px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 transition border ${activeFilter === 'oddjob' ? 'bg-orange-100 text-orange-700 border-orange-200 ring-2 ring-orange-500 ring-offset-1' : 'bg-white text-gray-600 border-gray-100 hover:bg-gray-50'}`}
                           >
                                <div className="w-3 h-3 bg-orange-500 rounded-full"></div> OddJobs
                           </button>
                           {activeFilter !== 'all' && (
                               <button onClick={() => setActiveFilter('all')} className="px-3 py-2 text-xs text-gray-500 hover:text-gray-700 font-medium">Reset</button>
                           )}
                       </div>

                       {/* Search Bar */}
                       <div className="pointer-events-auto flex items-center gap-2 w-full md:w-auto">
                            <form onSubmit={handleSearch} className="relative flex-1 md:w-80">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input 
                                    type="text" 
                                    placeholder="Search area (e.g., Makati, BGC)..." 
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white/95 backdrop-blur-sm"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                {focusedLocation && (
                                    <button 
                                        type="button" 
                                        onClick={clearSearch}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
                                    >
                                        ✕
                                    </button>
                                )}
                            </form>
                            <button 
                                type="button"
                                className="bg-white p-3 rounded-xl shadow-lg border border-slate-100 hover:bg-gray-50 text-slate-700 tooltip" 
                                title="Locate Me"
                                onClick={() => { setSearchQuery('Makati'); handleSearch({ preventDefault: () => {} } as React.FormEvent); }}
                            >
                                <Navigation className="w-5 h-5" />
                            </button>
                       </div>
                   </div>

                   {/* Map Area */}
                   <div className="relative w-full h-full bg-[#f0f3f5] overflow-hidden">
                       
                        {/* Loading Overlay */}
                        {isSearching && (
                            <div className="absolute inset-0 z-50 bg-white/50 backdrop-blur-sm flex items-center justify-center">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                                    <p className="font-bold text-slate-700 animate-pulse">Scanning area...</p>
                                </div>
                            </div>
                        )}

                       {/* Grid Pattern */}
                       <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#e2e8f0 2px, transparent 2px), linear-gradient(90deg, #e2e8f0 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
                       
                       {/* Map Shapes */}
                       <div className="absolute top-1/4 left-1/4 w-96 h-64 bg-slate-200/50 rounded-[40px] rotate-12 blur-sm pointer-events-none transition-transform duration-1000 ease-in-out" style={focusedLocation ? { transform: 'scale(1.2) rotate(0deg)' } : {}}></div>
                       <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-slate-200/50 rounded-full blur-sm pointer-events-none transition-transform duration-1000 ease-in-out" style={focusedLocation ? { transform: 'scale(1.1) translate(20px, 20px)' } : {}}></div>


                       {/* No Results State */}
                       {!isSearching && markers.length === 0 && (
                           <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-4">
                               <MapPin className="w-16 h-16 text-gray-300 mb-4" />
                               <p className="text-xl font-bold text-gray-400">No active jobs or seekers found in this area.</p>
                               <button onClick={clearSearch} className="mt-4 text-blue-600 font-bold hover:underline">View all areas</button>
                           </div>
                       )}

                       {/* RENDER MARKERS */}
                       {markers.map((marker) => (
                           <div 
                               key={marker.id}
                               className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition duration-300 cursor-pointer group z-20"
                               style={{ top: marker.top, left: marker.left }}
                           >
                               {/* Tooltip Popup */}
                               <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-xl shadow-2xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100 pointer-events-none min-w-[180px] z-30">
                                   <div className="flex items-start justify-between">
                                        <div className={`text-[10px] uppercase font-bold tracking-wider mb-1 ${
                                            marker.type === 'company' ? 'text-blue-600' : 
                                            marker.type === 'seeker' ? 'text-green-600' : 'text-orange-600'
                                        }`}>
                                            {marker.type === 'oddjob' ? 'OddJob • Gig' : marker.type}
                                        </div>
                                        <div className="text-[10px] text-gray-400">{marker.location}</div>
                                   </div>
                                   <div className="text-sm font-bold text-slate-800 leading-tight">{marker.title}</div>
                                   <div className="text-xs text-slate-500 mt-1">{marker.subtitle}</div>
                                   {marker.description && <div className="text-xs text-slate-400 mt-0.5">{marker.description}</div>}
                                   
                                   <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-b border-r border-gray-100"></div>
                               </div>

                               {/* Marker Icon */}
                               {marker.type === 'company' && (
                                   <div className="relative">
                                       <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-md animate-pulse"></div>
                                       <MapPin className="text-blue-600 w-12 h-12 drop-shadow-2xl filter" fill="currentColor" />
                                       <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-white font-bold text-[10px]">Job</div>
                                   </div>
                               )}
                               {marker.type === 'seeker' && (
                                   <div className="w-10 h-10 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center relative">
                                       <div className="w-full h-full rounded-full border-2 border-green-300 absolute animate-ping opacity-75"></div>
                                       <span className="text-white font-bold text-[10px]">{marker.title.substring(0,2)}</span>
                                   </div>
                               )}
                               {marker.type === 'oddjob' && (
                                    <div className="bg-orange-500 p-2 rounded-lg shadow-lg border-2 border-white relative animate-bounce hover:animate-none">
                                        <Truck className="w-5 h-5 text-white" />
                                   </div>
                               )}
                           </div>
                       ))}
                   </div>


                   {/* Floating Stats Dashboard (Bottom) */}
                   <div className="absolute bottom-6 left-6 right-6">
                       <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-slate-200/60 p-1 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">
                           <div className="flex-1 p-4 flex items-center justify-between hover:bg-white/50 transition rounded-xl">
                               <div className="text-left">
                                   <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Makati</div>
                                   <div className="text-2xl font-black text-slate-800">142</div>
                               </div>
                               <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                                   <TrendingUp className="w-5 h-5" />
                               </div>
                           </div>
                           <div className="flex-1 p-4 flex items-center justify-between hover:bg-white/50 transition rounded-xl">
                               <div className="text-left">
                                   <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">BGC</div>
                                   <div className="text-2xl font-black text-slate-800">98</div>
                               </div>
                               <div className="h-10 w-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
                                   <Briefcase className="w-5 h-5" />
                               </div>
                           </div>
                           <div className="flex-1 p-4 flex items-center justify-between hover:bg-white/50 transition rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg transform scale-105">
                               <div className="text-left">
                                   <div className="text-xs text-blue-100 font-semibold uppercase tracking-wider">New Activity</div>
                                   <div className="text-sm font-medium mt-1">"3 jobs added in Makati"</div>
                                   <div className="text-[10px] text-blue-200 mt-0.5">Just now</div>
                               </div>
                               <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center animate-spin-slow">
                                   <Clock className="w-4 h-4 text-white" />
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        </section>
    );
};
