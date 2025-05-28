import React from 'react';

const FacingIssueButton = () => {
  return (
    <>


      <button 
        className="fixed left-4 bottom-6 z-50 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        onClick={() => window.location.href = '/contact'}
      >
        <span role="img" aria-label="thinking face" className="text-xl">🤔</span>
        <span className="font-medium">Facing an issue?</span>
      </button>
    </>
  );
};

export default FacingIssueButton;
