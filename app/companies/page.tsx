import React from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/app/components/LayoutModules';
import { Search, MapPin, CheckCircle, Star, Building, Users } from 'lucide-react';

const mockCompanies = [
  {
    id: 1,
    name: "Tech Solutions Inc.",
    industry: "Information Technology",
    rating: 4.8,
    reviews: 124,
    jobs: 12,
    verified: true,
    location: "BGC, Taguig",
    logo: "TS",
    color: "bg-blue-600",
    description: "Leading software development company in the Philippines."
  },
  {
    id: 2,
    name: "HealthFirst Clinic",
    industry: "Healthcare",
    rating: 4.9,
    reviews: 89,
    jobs: 5,
    verified: true,
    location: "Quezon City",
    logo: "HC",
    color: "bg-red-500",
    description: "Premium outpatient care and diagnostic center."
  },
  {
    id: 3,
    name: "Global BPO Services",
    industry: "Customer Service",
    rating: 4.5,
    reviews: 2150,
    jobs: 45,
    verified: true,
    location: "Makati City",
    logo: "GB",
    color: "bg-orange-500",
    description: "Connecting global businesses with Filipino talent."
  },
  {
    id: 4,
    name: "BuildRight Construction",
    industry: "Construction",
    rating: 4.2,
    reviews: 56,
    jobs: 8,
    verified: true,
    location: "Pasig City",
    logo: "BR",
    color: "bg-yellow-600",
    description: "Building the future of infrastructure."
  },
   {
    id: 5,
    name: "FreshFoods Logistics",
    industry: "Logistics",
    rating: 4.6,
    reviews: 32,
    jobs: 15,
    verified: true,
    location: "Parañaque",
    logo: "FL",
    color: "bg-green-600",
    description: "Fast and fresh delivery solutions."
  }
];

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      
      {/* Search Header */}
      <div className="bg-slate-50 border-b border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-6">Discover Verified Companies</h1>
              
              <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-4">
                  <div className="flex-grow flex items-center bg-gray-50 px-4 rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition">
                      <Search className="w-5 h-5 text-gray-400 mr-3" />
                      <input 
                        type="text" 
                        placeholder="Company name or keyword" 
                        className="w-full bg-transparent py-3 focus:outline-none text-slate-900 placeholder-gray-500"
                      />
                  </div>
                  <div className="flex-grow flex items-center bg-gray-50 px-4 rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition">
                      <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                      <input 
                        type="text" 
                        placeholder="Location" 
                        className="w-full bg-transparent py-3 focus:outline-none text-slate-900 placeholder-gray-500"
                        defaultValue="Metro Manila"
                      />
                  </div>
                  <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition shadow-md">
                      Find Companies
                  </button>
              </div>
          </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8 flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-800">Top Hiring Companies</h2>
              <div className="flex gap-2">
                  <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-500">
                      <option>Sort by: Recommended</option>
                      <option>Sort by: Rating (High to Low)</option>
                      <option>Sort by: Open Jobs</option>
                  </select>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCompanies.map((company) => (
                  <Link href={`/companies/${company.id}`} key={company.id} className="group block">
                      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:border-blue-200 transition duration-300 h-full flex flex-col">
                          <div className="flex items-start justify-between mb-4">
                              <div className={`w-16 h-16 ${company.color} rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-md`}>
                                  {company.logo}
                              </div>
                              {company.verified && (
                                  <div className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                      <CheckCircle className="w-3 h-3" /> Verified
                                  </div>
                              )}
                          </div>
                          
                          <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition">{company.name}</h3>
                          <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                              <Building className="w-3 h-3" /> {company.industry} • <MapPin className="w-3 h-3 ml-1" /> {company.location}
                          </p>
                          
                          <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                              {company.description}
                          </p>

                          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                               <div className="flex items-center gap-1">
                                   <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                   <span className="font-bold text-slate-900">{company.rating}</span>
                                   <span className="text-xs text-gray-400">({company.reviews} reviews)</span>
                               </div>
                               <span className="text-blue-600 text-sm font-semibold group-hover:underline">
                                   {company.jobs} Open Jobs
                               </span>
                          </div>
                      </div>
                  </Link>
              ))}
          </div>
      </main>

      <Footer />
    </div>
  );
}
