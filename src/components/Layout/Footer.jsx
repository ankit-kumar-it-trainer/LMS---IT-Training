import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#020817]  text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr] gap-12">
          {/* Left Column - Profile */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cricket-pandith-34702.appspot.com/o/logo.png?alt=media&token=6434420b-c70c-449e-b459-160f4c268b1b"
                alt="LumaTech Academy"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold tracking-tight">LumaTech Academy</h2>
                <p className="text-xs text-gray-300 -mt-1">Light Up Your Skills</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              Light Up Your Skills with LumaTech Academy. Expert IT Training, Coding Tips, and Career Guidance.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-gray-400">✉️</span>
                <a href="mailto:contact@krishnaik.in" className="text-gray-400 hover:text-white transition-colors">
                  contact@krishnaik.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400">📞</span>
                <a href="tel:+919111533440" className="text-gray-400 hover:text-white transition-colors">
                  +91 9111533440
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="flex-1 bg-white rounded-l-md px-4 py-2.5 text-gray-900 text-sm focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-[#F08C1B]/90 text-white px-4 py-2.5 rounded-r-md transition-colors"
                >
                  →
                </button>
              </div>
            </form>
          </div>

          {/* Middle Column - Links */}
          <div>
            <div className="space-y-4">
              <Link to="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/refund-policy" className="block text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div>
            <div className="flex flex-col gap-4">
              <a
                href="https://youtube.com/@krishnaik06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
           <div class="bg-[#020817] p-2.5 rounded-md border border-white mr-3">
                  <FaYoutube size={20} className="text-white" />
                </div>
                <span className="text-gray-400 hover:text-white transition-colors">Youtube</span>
              </a>
              <a
                href="https://linkedin.com/in/krish-naik-"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
         <div class="bg-[#020817] p-2.5 rounded-md border border-white mr-3">
                  <FaLinkedin size={20} className="text-white" />
                </div>
                <span className="text-gray-400 hover:text-white transition-colors">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/krishnaik06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
             <div class="bg-[#020817] p-2.5 rounded-md border border-white mr-3">
                  <FaInstagram size={20} className="text-white" />
                </div>
                <span className="text-gray-400 hover:text-white transition-colors">Instagram</span>
              </a>
              <a
                href="https://twitter.com/krishnaik06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <div class="bg-[#020817] p-2.5 rounded-md border border-white mr-3">
                  <FaXTwitter size={20} className="text-white" />
                </div>
                <span className="text-gray-400 hover:text-white transition-colors">Twitter</span>
              </a>
              <a
                href="https://wa.me/919111533440"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
            <div class="bg-[#020817] p-2.5 rounded-md border border-white mr-3">
                  <FaWhatsapp size={20} className="text-white" />
                </div>
                <span className="text-gray-400 hover:text-white transition-colors">Whatsapp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {currentYear} KrishAITechnologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
