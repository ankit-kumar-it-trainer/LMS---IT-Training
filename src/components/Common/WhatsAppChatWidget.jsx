import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '+917838349247';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;

const WhatsAppChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating WhatsApp Icon */}
      {!open && (
        <button
          className="fixed right-6 bottom-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
          onClick={() => setOpen(true)}
          aria-label="Open WhatsApp Chat"
        >
          <FaWhatsapp className="text-3xl" />
        </button>
      )}

      {/* Chat Popup */}
      {open && (
        <div className="fixed right-6 bottom-6 z-50 w-80 max-w-[90vw] bg-white rounded-2xl shadow-2xl animate-fade-in flex flex-col">
          <div className="flex flex-col items-center p-6 pb-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cricket-pandith-34702.appspot.com/o/logo.png?alt=media&token=6434420b-c70c-449e-b459-160f4c268b1b"
              alt="WhatsApp Chat"
              className="w-20 h-20 mb-2 rounded-full bg-green-100 shadow"
              style={{objectFit: 'cover'}}
            />
            <h3 className="text-xl font-bold text-gray-800 mb-1">Hi Aliens</h3>
            <p className="text-gray-600 text-center text-sm mb-4">
              Welcome to Telusko. We are here to help you! Chat with us on WhatsApp for Courses related enquiries.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 text-lg transition-all duration-200 mb-2"
            >
              <FaWhatsapp className="text-2xl" />
              START CHAT
            </a>
            <span className="text-xs text-gray-400">Powered by Ankit Kumar</span>
          </div>
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
            onClick={() => setOpen(false)}
            aria-label="Close Chat"
          >
            &times;
          </button>
        </div>
      )}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease; }
      `}</style>
    </>
  );
};

export default WhatsAppChatWidget;
