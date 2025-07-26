import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../context/AuthContext';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Courses', to: '/courses' },
  { name: 'Tutorials', to: '/tutorials' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#020817] backdrop-blur-lg border-b border-[#020817] w-full">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 py-3 sm:py-4 w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 min-w-[48px]">
          <img src={require('../../logo.svg').default} alt="LumaTech Academy Logo" className="h-14 w-auto max-w-[300px] object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center gap-4 sm:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `text-base font-medium transition duration-200 px-1 sm:px-2 ${
                  isActive 
                    ? 'text-white border-b-2 border-white/70' 
                    : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-white/30'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-2 sm:gap-4">
          <Link 
            to="/login" 
            className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            LMS Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-gray-300 transition ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#141328] border-t border-white/10 px-2 py-2 w-full">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `py-2 text-base font-medium transition-all duration-300 px-2 ${
                    isActive 
                      ? 'text-white pl-2 border-l-2 border-white' 
                      : 'text-gray-300 hover:text-white hover:pl-2 hover:border-l-2 hover:border-white/30'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/login"
              className="py-2 text-base font-medium text-white bg-blue-500 rounded-lg text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              LMS Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
