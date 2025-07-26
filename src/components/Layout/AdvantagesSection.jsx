import React from 'react';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';

const AdvantagesSection = () => {
  const comparison = [
    { feature: 'Structured Video Lessons', us: true, others: true, free: true },
    { feature: 'Live Sessions with Industry Experts', us: true, others: true, free: false },
    { feature: 'Built-In Problem Solving Platform', us: true, others: false, free: false },
    { feature: 'Fastest Doubt Resolution', us: true, others: false, free: false },
    { feature: 'Daily Progress Tracking', us: true, others: false, free: false },
  ];

  return (
    <section className="relative py-20 bg-[#020817] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="text-gray-300 text-md">More than just Courses</span>
          <h2 className="text-4xl font-bold text-blue-500">
            How are we Different
          </h2>
        </div>

        <div className="relative">
          <div className="bg-[#1A1C24] rounded-2xl border border-gray-700 overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-[2fr,1fr,1fr] text-[14px] md:text-[16px]">
              {/* Header */}
              <div className="p-4 md:p-4 border-b border-gray-700 text-white font-medium text-[14px] md:text-[16px]">
                Features
              </div>
              <div className="p-4 md:p-4 border-b border-gray-700 text-center text-white font-medium text-[14px] md:text-[16px]">
                Our Platform
              </div>
              <div className="p-4 md:p-4 border-b border-gray-700 text-center text-white font-medium text-[14px] md:text-[16px]">
                Other Platforms
              </div>

              {/* Comparison Rows */}
              {comparison.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="p-4 md:p-4 border-b border-gray-700 text-white text-[14px] md:text-[16px]">
                    {item.feature}
                  </div>
                  <div className="p-4 md:p-4 border-b border-gray-700 flex justify-center items-center text-[14px] md:text-[16px]">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="p-4 md:p-4 border-b border-gray-700 flex justify-center items-center text-[14px] md:text-[16px]">
                    {item.free ? (
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                    ) : (
                      <XMarkIcon className="w-5 h-5 text-white-500" />
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/courses"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          >
            Explore Courses →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
