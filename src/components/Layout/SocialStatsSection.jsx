import React from 'react';

const stats = [
  { value: '100%', label: 'Industry-Aligned Curriculum', color: '#FF0000' },
  { value: 'Self-Paced', label: 'Student-Centered Learning', color: '#1DA1F2' },
  { value: 'Job-Focused', label: 'Career-Driven Content', color: '#E1306C' },
  { value: '50+', label: 'Practical Projects Included', color: '#0077B5' },
];

const SocialStatsSection = () => {  return (
    <section className="py-20 px-6 bg-[#020817]">
      <div className="max-w-7xl mx-auto rounded-3xl bg-[#020817] p-6 md:p-10 flex flex-col items-center border-[1px] border-white">

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-3 mb-3">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center justify-center bg-[#1E1F24] rounded-2xl py-8 px-4 min-w-[180px] shadow-lg relative overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: stat.color }}
              />
              <span className="text-2xl md:text-3xl font-bold text-white mb-2 relative z-10">{stat.value}</span>
              <span className="text-gray-400 text-sm md:text-base text-center relative z-10 font-medium">{stat.label}</span>
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ backgroundColor: stat.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialStatsSection;
