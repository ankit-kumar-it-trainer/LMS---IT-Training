import React from 'react';
import { Link } from 'react-router-dom';

const StartJourneySection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#1B1834] to-[#141328]">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1834]/80 to-[#141328]/90 z-0" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6">
          Start Your Coding Journey
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Learn coding step-by-step with India's most loved programming mentor.
        </p>
        <Link
          to="/register"
          className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-[#1B1834] font-bold text-lg rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
        >
          Start Now
        </Link>
      </div>
    </section>
  );
};

export default StartJourneySection;
