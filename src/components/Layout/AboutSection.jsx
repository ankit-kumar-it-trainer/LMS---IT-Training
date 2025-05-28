import React from 'react';
import { FaRocket, FaChartLine, FaClipboardList, FaCalendarCheck } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-[#020817]">
      {/* First Card */}
      <div className="max-w-6xl mx-auto rounded-2xl border border-green-500 bg-gradient-to-br from-[#101112] to-[#101112] relative overflow-visible mb-12 shadow-xl">
        <div className="absolute -top-6 right-8 bg-[#101112] border-2 border-green-500 rounded-full w-16 h-16 flex items-center justify-center z-10">
          <FaChartLine className="text-green-400 text-2xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
          {/* Left */}
          <div>
            <p className="text-green-400 font-semibold mb-2 text-lg">Who are We</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Empowering Coders, <br />Enabling Dreams</h2>
            <p className="text-gray-300 mb-8 max-w-md">Unveil the essence of CodeHelp: a community-driven platform dedicated to empowering coders of all levels. Discover who we are and how we're shaping the future of coding education.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all">Let's Connect</button>
          </div>
          {/* Right */}
          <div className="flex flex-col gap-10 justify-center">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-green-400 flex items-center justify-center">
                <FaRocket className="text-green-400 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Grow: Elevate Your Career</h3>
                <p className="text-gray-400 text-base">Climb with CodeHelp's Grow. Upskill through CodeHelp and achieve career success.</p>
              </div>
            </div>
            <hr className="border-gray-700" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-green-400 flex items-center justify-center">
                <FaClipboardList className="text-green-400 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Hands-On Learning Experience</h3>
                <p className="text-gray-400 text-base">Emphasize that your courses are crafted by industry experts to ensure high-quality, up-to-date content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Card */}
      <div className="max-w-6xl mx-auto rounded-2xl border border-blue-500 bg-gradient-to-br from-[#101112] to-[#101112] relative overflow-visible shadow-xl">
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
                <p className="text-gray-400 text-base">Emphasize that your courses are crafted by industry experts to ensure high-quality, up-to-date content.</p>
              </div>
            </div>
            <hr className="border-gray-700" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-pink-400 flex items-center justify-center">
                <FaCalendarCheck className="text-pink-400 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Apply: Build, Play, Create</h3>
                <p className="text-gray-400 text-base">Bring ideas to life in CodeHelp's Apply. Build projects, play in boot playgrounds—all in your browser.</p>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="order-1 md:order-2 flex flex-col justify-center items-start md:items-end">
            <p className="text-pink-400 font-semibold mb-2 text-lg">Why We're Your</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight text-left md:text-right">Best Code Learning<br />Choice?</h2>
            <p className="text-gray-300 mb-8 max-w-md text-left md:text-right">Choose CodeHelp for an unparalleled coding experience.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all">Let's Connect</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
