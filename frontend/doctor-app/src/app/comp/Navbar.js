'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-[#1a73e8] font-extrabold text-xl tracking-wide">practo</span>
          </div>

          {/* Main nav links (desktop) */}
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <Link href="#" className="hover:text-blue-600 border-b-2 border-blue-600">Find Doctors</Link>
            <Link href="#" className="hover:text-blue-600">Video Consult</Link>
            <Link href="#" className="hover:text-blue-600">Surgeries</Link>
            <Link href="#" className="hover:text-blue-600">For Corporates</Link>
            <Link href="#" className="hover:text-blue-600">For Providers</Link>
            <Link href="#" className="hover:text-blue-600">Security & help</Link>
          </div>

          {/* Login/Signup Button */}
          <div className="hidden md:flex">
            <button className="px-4 py-1 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-100">
              Login / Signup
            </button>
          </div>

          
        </div>
      </div>

     
    </nav>
  );
}
