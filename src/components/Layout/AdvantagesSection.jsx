import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const AdvantagesSection = () => {
  const advantages = [
    'Structured + problem solving based',
    'Fastest 1:1 doubt support',
    'Integrated prep platform',
    'Profile highlighted on naukri',
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#1B1834] to-[#141328] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Your Competitive Edge
        </h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Explore the unique benefits that set us apart, giving you the competitive edge in your coding endeavors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Advantages List */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
            <ul className="space-y-6">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {advantage}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Graph Section */}
          <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="relative z-10">
              <div className="w-full h-[300px] flex items-end gap-4 pb-8">
                <div className="flex-1 h-[40%] bg-gradient-to-t from-blue-500/50 to-blue-500/20 rounded-t-lg relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm text-gray-300">Others</div>
                </div>
                <div className="flex-1 h-[85%] bg-gradient-to-t from-emerald-500/50 to-emerald-500/20 rounded-t-lg relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm text-white">You</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
