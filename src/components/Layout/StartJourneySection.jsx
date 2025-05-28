import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const StartJourneySection = () => {
  return (
    <section className="py-20 bg-[#020817]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-gray-200 text-lg mb-3">So what are you waiting for?</p>
        <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text p-5 bg-gradient-to-r from-blue-500 to-pink-400">
          Start Your Coding Journey Today
        </h2>
        
        <Link
          to="/courses"
          className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full text-black font-semibold text-lg hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
          style={{
            boxShadow: '0 0 20px rgba(251, 251, 251, 0.58)',
          }}
        >
          Explore Courses 
          <HiArrowRight className="transition-transform group-hover:translate-x-1" />
          <div className="absolute inset-0 rounded-full bg-white/20 blur-lg -z-10"></div>
        </Link>
      </div>
    </section>
  );
};

export default StartJourneySection;
