import React from 'react';

const features = [
   'Project-Based Learning',
  'Expert Insights',
  'Core Concepts',
  'Mock Tests',
  'Interview Prep',
  'Skill Challenges',
  'Instant Compiler',
  'Community Support',
];

const studentAvatars = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/45.jpg',
  'https://randomuser.me/api/portraits/women/46.jpg',
  'https://randomuser.me/api/portraits/men/47.jpg',
];

const CoursesSection = () => {
  return (
    <section className="bg-[#020817] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ignite Your<br /> <span className="text-blue-500"> Future with </span> <br />LumaTech Academy
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            Level up your tech skills, build real-world projects, and unlock your full potential in today’s digital world.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all">
              View Courses
            </button>
            <button className="border border-blue-500 text-white font-semibold px-8 py-3 rounded-lg text-lg flex items-center gap-2 transition-all hover:bg-blue-600">
              Watch Video <span className="text-red-500">●</span> <span className="hidden sm:inline">Live</span> <span className="ml-1">→</span>
            </button>
          </div>
          <div className="flex items-center bg-[#18171C] border border-[#33324A] rounded-full px-4 py-2 w-fit">
            <div className="flex -space-x-3 mr-4">
              {studentAvatars.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="Student avatar"
                  className="w-10 h-10 rounded-full border-2 border-[#18171C] object-cover shadow"
                  style={{ zIndex: studentAvatars.length - idx }}
                />
              ))}
            </div>
            <span className="text-white font-medium text-base">5,500+ Happy Students</span>
          </div>
        </div>
        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <button
              key={feature}
              className="w-full h-16 bg-transparent border border-blue-500 rounded-lg text-white font-bold text-lg flex items-center justify-center transition-all hover:bg-[#191A2E] hover:border-[#A3B3FF]"
            >
              {feature}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
