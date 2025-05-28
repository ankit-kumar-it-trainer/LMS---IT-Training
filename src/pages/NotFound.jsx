import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#020817] flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 relative overflow-hidden">
        {/* Stars Background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Small Planets */}
        <div className="absolute w-8 h-8 bg-gray-700 rounded-full top-1/4 left-1/4 animate-float" />
        <div className="absolute w-6 h-6 bg-gray-800 rounded-full bottom-1/4 right-1/3 animate-float-delayed" />
        
        {/* Content */}
        <div className="text-center relative z-10 px-4">
          <div className="relative inline-block">
            <h1 className="text-8xl md:text-9xl font-bold text-white mb-8">
              4
              <span className="inline-block mx-2">
                <svg className="w-24 h-24 md:w-32 md:h-32 text-[#F08C1B] animate-spin-slow" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  <path fill="currentColor" d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </span>
              4
            </h1>
            <h2 className="text-xl md:text-2xl text-white mb-8">Oops, Page Not Found!</h2>
            <Link
              to="/"
              className="inline-block bg-[#F08C1B] text-white px-8 py-3 rounded-md font-medium hover:bg-[#F08C1B]/90 transition-colors duration-300"
            >
              Go Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
