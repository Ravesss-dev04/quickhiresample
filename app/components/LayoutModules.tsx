'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Menu, X, Facebook, Instagram, Linkedin, Twitter, Youtube, User, Mail, Lock, ChevronDown, Monitor, Zap, Clock, FileText } from 'lucide-react';

export const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMessageClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsLoginModalOpen(true);
  };

  return (
    <>
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="bg-blue-600 text-white py-1 px-4 text-xs text-center">
        The Philippines' Most Trusted Hiring Ecosystem 🇵🇭
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">QUICK</span>
              <span className="text-2xl font-bold text-slate-800">HIRE</span>
              <span className="text-xs ml-1 bg-blue-100 text-blue-800 px-1 py-0.5 rounded">PH</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition text-sm">Home</Link>
            
            {/* Find Jobs Dropdown */}
            <div className="relative group">
                <button className="flex items-center gap-1 text-gray-600 group-hover:text-blue-600 font-medium transition text-sm focus:outline-none py-6">
                    Find Jobs <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                     <Link href="/find-jobs?type=remote" className="flex items-center gap-4 p-3 hover:bg-blue-50 rounded-xl transition group/item">
                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center group-hover/item:bg-blue-600 group-hover/item:text-white transition">
                            <Monitor className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-bold text-slate-800 text-sm">Remote Jobs</div>
                            <div className="text-xs text-gray-500">Work from anywhere</div>
                        </div>
                     </Link>
                     <Link href="/find-jobs?type=onsite" className="flex items-center gap-4 p-3 hover:bg-blue-50 rounded-xl transition group/item">
                        <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center group-hover/item:bg-orange-600 group-hover/item:text-white transition">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-bold text-slate-800 text-sm">On-site Jobs</div>
                            <div className="text-xs text-gray-500">Office & Field work</div>
                        </div>
                     </Link>
                     <Link href="/oddjobs" className="flex items-center gap-4 p-3 hover:bg-blue-50 rounded-xl transition group/item">
                        <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center group-hover/item:bg-purple-600 group-hover/item:text-white transition">
                            <Zap className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-bold text-slate-800 text-sm">Gigs & OddJobs</div>
                            <div className="text-xs text-gray-500">Quick tasks & side hustles</div>
                        </div>
                     </Link>
                     <Link href="/find-jobs?type=part-time" className="flex items-center gap-4 p-3 hover:bg-blue-50 rounded-xl transition group/item">
                        <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center group-hover/item:bg-green-600 group-hover/item:text-white transition">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-bold text-slate-800 text-sm">Part-time</div>
                            <div className="text-xs text-gray-500">Flexible hours</div>
                        </div>
                     </Link>
                     <Link href="/find-jobs?type=contract" className="flex items-center gap-4 p-3 hover:bg-blue-50 rounded-xl transition group/item">
                        <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center group-hover/item:bg-yellow-600 group-hover/item:text-white transition">
                            <FileText className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-bold text-slate-800 text-sm">Contract</div>
                            <div className="text-xs text-gray-500">Project-based work</div>
                        </div>
                     </Link>
                </div>
            </div>

            <Link href="/oddjobs" className="text-gray-600 hover:text-blue-600 font-medium transition text-sm">OddJobs</Link>
            <Link href="/companies" className="text-gray-600 hover:text-blue-600 font-medium transition text-sm">Companies</Link>
            <Link href="/messages" className="text-gray-600 hover:text-blue-600 font-medium transition text-sm">Messages</Link>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => setIsLoginModalOpen(true)} className="text-blue-600 font-bold hover:text-blue-700 text-sm">Sign In</button>
            <button onClick={() => setIsLoginModalOpen(true)} className="bg-orange-500 text-white px-5 py-2 rounded-full font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-200 text-sm">
              Post a Job
            </button>
          </div>

           {/* Mobile menu button */}
           <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-500 hover:text-gray-900 focus:outline-none">
               {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-3">
              <Link href="/" className="block text-gray-700 font-medium">Home</Link>
              <Link href="/find-jobs" className="block text-gray-700 font-medium">Find Jobs</Link>
              <Link href="/oddjobs" className="block text-gray-700 font-medium">OddJobs</Link>
              <Link href="/companies" className="block text-gray-700 font-medium">Companies</Link>
              <Link href="/messages" className="block text-gray-700 font-medium">Messages</Link>
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                  <button onClick={() => setIsLoginModalOpen(true)} className="w-full text-center py-2 text-blue-600 font-bold">Sign In</button>
                  <button onClick={() => setIsLoginModalOpen(true)} className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold">Post a Job</button>
              </div>
          </div>
      )}
    </header>

    {/* Fake Gmail/Login Popup */}
    {isLoginModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-slate-900">Sign in to QuickHire</h3>
                        <button onClick={() => setIsLoginModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 hover:bg-gray-50 text-slate-700 font-medium py-3 rounded-xl transition">
                            <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                            Continue with Google
                        </button>
                        <button className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#1864D9] text-white font-medium py-3 rounded-xl transition">
                            <Facebook className="w-5 h-5" fill="currentColor" />
                            Continue with Facebook
                        </button>
                    </div>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                        </div>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                            <input type="email" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="juandelacruz@gmail.com" />
                        </div>
                         <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Password</label>
                            <input type="password" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="••••••••" />
                        </div>
                        <button type="button" className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition">
                            Sign In
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account? <a href="#" className="text-blue-600 font-bold hover:underline">Sign up</a>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 border-t border-gray-100 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
                    <Lock className="w-3 h-3" /> Secure Login with QuickHirePH
                </div>
            </div>
        </div>
    )}
    </>
  );
};

export const Footer = () => {
    return (
      <footer className="bg-slate-900 text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-500">QUICK</span>
                <span className="text-2xl font-bold text-white">HIRE</span>
                <span className="text-xs ml-1 bg-blue-900 text-blue-200 px-1 py-0.5 rounded">PH</span>
              </div>
              <p className="text-gray-400 text-sm">
                The Philippines' most trusted hiring ecosystem. Connecting talent with opportunity through verifiable trust and real-time technology.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">QuickHire</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-white">Companies</a></li>
                <li><a href="#" className="hover:text-white">Salaries</a></li>
                <li><a href="#" className="hover:text-white">Success Stories</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">OddJobs</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Find Gigs</a></li>
                <li><a href="#" className="hover:text-white">Post a Gig</a></li>
                <li><a href="#" className="hover:text-white">Live Map</a></li>
                <li><a href="#" className="hover:text-white">Partner Drivers</a></li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 QuickHirePH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
