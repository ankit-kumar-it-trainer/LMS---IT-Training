import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../context/AuthContext';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Courses', to: '/courses' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#020817] backdrop-blur-lg border-b border-[#020817]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="https://firebasestorage.googleapis.com/v0/b/cricket-pandith-34702.appspot.com/o/logo.png?alt=media&token=6434420b-c70c-449e-b459-160f4c268b1b" alt="Logo" className="h-10 w-10" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white">Ankit Kumar - IT Trainer</span>
            <span className="text-xs text-gray-300">Learn to code like a pro</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `text-base font-medium transition duration-200 ${
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
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link 
                to={user.role === 'admin' ? '/admin-dashboard' : '/student-dashboard'}
                className="px-6 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="px-6 py-2 text-sm font-medium bg-white hover:bg-gray-100 text-[#1B1834] rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                to="/login" 
                className="px-6 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300"
              >
                Login
              </Link>
              <Link 
                to="/register"
                className="px-6 py-2 text-sm font-medium bg-white hover:bg-gray-100 text-[#1B1834] rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-gray-300 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#141328] border-t border-white/10 px-4 py-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `py-2 text-base font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-white pl-4 border-l-2 border-white' 
                      : 'text-gray-300 hover:text-white hover:pl-4 hover:border-l-2 hover:border-white/30'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            {user ? (
              <>
                <Link
                  to={user.role === 'admin' ? '/admin-dashboard' : '/student-dashboard'}
                  className="py-2 text-base font-medium text-gray-300 hover:text-white transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="py-2 text-base font-medium text-white hover:text-gray-300 transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="py-2 text-base font-medium text-gray-300 hover:text-white transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="py-2 text-base font-medium text-white hover:text-gray-300 transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
