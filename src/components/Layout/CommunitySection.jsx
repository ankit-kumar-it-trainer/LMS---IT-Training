import React from 'react';
import { FaInstagram, FaYoutube, FaDiscord, FaGooglePlay, FaApple } from 'react-icons/fa';

const socials = [
  { label: 'Instagram', icon: <FaInstagram />, url: '#' },
  { label: 'YouTube', icon: <FaYoutube />, url: '#' },
  { label: 'Discord', icon: <FaDiscord />, url: '#' },
  { label: 'Playstore', icon: <FaGooglePlay />, url: '#' },
  { label: 'Appstore', icon: <FaApple />, url: '#' },
];

const CommunitySection = () => (
  <section className="py-12 bg-[#020817]">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Explore Our Community!</h2>
      <div className="flex justify-center mb-8">
        <span className="block w-16 h-1 bg-blue-500 rounded-full"></span>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1E1F24] hover:bg-[#23242a] text-white px-6 py-3 rounded-lg shadow transition-all duration-200 min-w-[140px] justify-center"
          >
            <span className="text-xl">{s.icon}</span>
            <span className="text-base font-medium">{s.label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default CommunitySection;
