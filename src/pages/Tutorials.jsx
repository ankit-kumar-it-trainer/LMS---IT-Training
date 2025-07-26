import React from 'react';

const tutorials = [
  {
    title: 'OOPS (Java)',
    image: 'https://i.imgur.com/0y8Ftya.png',
    author: 'CodeHelp Team',
    date: 'June 1, 2024',
  },
  {
    title: 'Spring Framework : Java Development for Beginners',
    image: 'https://i.imgur.com/6Q2Qw1v.png',
    author: 'CodeHelp Team',
    date: 'June 1, 2024',
  },
  {
    title: 'Low Level Design',
    image: 'https://i.imgur.com/8Q2Qw1v.png',
    author: 'CodeHelp Team',
    date: 'June 1, 2024',
  },
  {
    title: 'SQL',
    image: 'https://i.imgur.com/1Q2Qw1v.png',
    author: 'CodeHelp Team',
    date: 'June 1, 2024',
  },
  {
    title: 'CSS',
    image: 'https://i.imgur.com/2Q2Qw1v.png',
    author: 'CodeHelp Team',
    date: 'June 1, 2024',
  },
  {
    title: 'Frontend Development in Angular',
    image: 'https://i.imgur.com/3Q2Qw1v.png',
    author: 'CodeHelp Team',
    date: 'June 1, 2024',
  },
];

const Tutorials = () => (
  <div className="min-h-screen bg-[#141328] py-10 px-4">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Tutorials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tutorials.map((tutorial, idx) => (
          <div key={idx} className="bg-[#181A20] rounded-xl shadow-lg overflow-hidden border border-white/10">
            <img src={tutorial.image} alt={tutorial.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-white mb-2">{tutorial.title}</h2>
              <div className="flex items-center text-xs text-gray-400 gap-2 mt-2">
                <span className="font-medium">{tutorial.author}</span>
                <span>•</span>
                <span>{tutorial.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Tutorials;
