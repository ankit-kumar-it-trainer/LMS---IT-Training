import React from 'react';
import { FaRocket, FaChartLine, FaClipboardList, FaCalendarCheck } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-[#020817]">
      {/* First Card */}
      <div className="max-w-6xl mx-auto rounded-2xl border border-green-500 bg-gradient-to-br from-[#101112] to-[#101112] relative overflow-visible mb-16 sh0adow-xl pt-5 pb-5">
        <div className="absolute -top-6 right-8 bg-[#101112] border-2 border-green-500 rounded-full w-16 h-16 flex items-center justify-center z-10">
          <FaChartLine className="text-green-400 text-3xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
          {/* Left */}
          <div>
            <p className="text-green-400 font-semibold mb-2 text-lg">Who are We</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Empowering Learners,<br />Shaping Futures</h2>
            <p className="text-gray-300 mb-8 mt-5 max-w-md">LumaTech Academy is a learner-first edtech platform building future-ready tech skills. We empower students and professionals with practical, career-focused education.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all">Let's Connect</button>
          </div>
          {/* Right */}
          <div className="flex flex-col gap-10 justify-center">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-green-400 flex items-center justify-center">
                <FaRocket className="text-green-400 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1"> Grow with Purpose</h3>
                <p className="text-gray-400 text-base">Unlock your potential with LumaTech’s career-focused courses. Upskill, reskill, and climb the tech ladder with confidence and clarity.</p>
              </div>
            </div>
            <hr className="border-gray-700" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-green-400 flex items-center justify-center">
                <FaClipboardList className="text-green-400 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Learn by Doing</h3>
                <p className="text-gray-400 text-base">All our programs are hands-on and crafted by real industry experts — ensuring you're always learning what matters, with tools that actually work.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Card */}
      <div className="max-w-6xl mx-auto rounded-2xl border border-blue-500 bg-gradient-to-br from-[#101112] to-[#101112] relative overflow-visible shadow-xl mb-4 mt-28 pt-6 pb-6">
        <div className="absolute -top-6 left-8 bg-[#101112] border-2 border-blue-500 rounded-full w-16 h-16 flex items-center justify-center z-10">
          <FaRocket className="text-blue-400 text-2xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
          {/* Left */}
          <div className="flex flex-col gap-10 justify-center order-2 md:order-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-orange-400 flex items-center justify-center">
                <FaClipboardList className="text-orange-400 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Hands-On Learning Experience</h3>
                <p className="text-gray-400 text-base">All courses at LumaTech are built by industry experts and filled with practical, project-based learning — so you gain real skills that matter.</p>
              </div>
            </div>
            <hr className="border-gray-700" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-pink-400 flex items-center justify-center">
                <FaCalendarCheck className="text-pink-400 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Apply: Build, Innovate, Grow</h3>
                <p className="text-gray-400 text-base">Turn your ideas into reality with our guided projects and browser-based coding environments — no setup, just pure learning.</p>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="order-1 md:order-2 flex flex-col justify-center items-start md:items-end">
            <p className="text-pink-400 font-semibold mb-2 text-lg">Why We're Your</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight text-left md:text-right">Best Tech Learning<br />Choice</h2>
            <p className="text-gray-300 mb-8 max-w-md text-left md:text-right">Choose LumaTech Academy for a skill-first, outcome-driven learning experience designed to elevate your career.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all">Let’s Connect</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
