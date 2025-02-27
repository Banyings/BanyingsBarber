"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg" role="navigation">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Image 
              src="/ourTeam.png" 
              alt="BanyingsBarber Logo" 
              width={50} 
              height={50} 
              className="rounded-full"
            />
            <span className="text-2xl font-bold tracking-wide">BanyingsBarber</span>
          </div>

          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-gray-800 rounded-md"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
            <Link href="/fonts/components/services" className="hover:text-amber-500 transition-colors">Services</Link>
            <Link href="/fonts/components/ourTeam" className="hover:text-amber-500 transition-colors">Our Team</Link>
            <Link href="/fonts/components/contactMe" className="hover:text-amber-500 transition-colors">Contact-Us</Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}
        >
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="block py-2 px-4 hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/components/services" 
              className="block py-2 px-4 hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/components/ourTeam" 
              className="block py-2 px-4 hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link 
              href="/components/contactMe" 
              className="block py-2 px-4 hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact-Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;