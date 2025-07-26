import React, { useState } from 'react';

const TopAnnouncementBar = () => {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="w-full bg-gradient-to-r from-[#0081cf] to-[#001B60] py-2 px-4 flex items-center justify-center relative z-50">
      <span className="text-white text-center text-base font-medium">
        Data Science & AI 4.0 is now live <span role="img" aria-label="fire">🔥</span> Join the next-gen problem solvers and elevate your tech career!
      </span>
      <span className="ml-4 bg-black bg-opacity-80 text-[#7CB8FF] px-3 py-1 rounded text-sm font-semibold">EARLYBIRD</span>
      <button
        className="absolute right-6 text-white text-xl top-1/2 -translate-y-1/2 hover:text-gray-300 focus:outline-none"
        onClick={() => setShow(false)}
        aria-label="Close announcement bar"
      >
        &times;
      </button>
    </div>
  );
};

export default TopAnnouncementBar;
