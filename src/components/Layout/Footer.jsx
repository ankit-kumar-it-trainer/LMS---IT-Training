import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#16142a] text-white py-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="text-lg font-bold">Ankit Kumar - IT Trainer</span>
                <span className="text-xs text-gray-400">Learn to code like a pro</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400">
              The Ultimate Guide To Ace SDE Interviews.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-primary transition">Courses</Link>
              </li>
              <li>
                <Link to="/labs" className="text-gray-400 hover:text-primary transition">Labs</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-primary transition">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-primary transition">Terms of use</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-400 hover:text-primary transition">Refund & Cancellation Policy</Link>
              </li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
            <div className="flex items-center gap-2 text-gray-400">
              <FaEnvelope className="text-primary" />
              <a href="mailto:Support@Codehelp.in" className="hover:text-primary transition">
                Support@Codehelp.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-gray-700">
        <p className="text-center text-gray-400 text-sm">
          Copyright © {currentYear} Ankit Kumar - IT Trainer. All Rights Reserved.
        </p>
      </div>

      {/* Help Button */}
      <div className="fixed bottom-6 right-6">
        <button 
          className="flex items-center gap-2 bg-white text-[#1B1834] px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <span role="img" aria-label="question" className="text-xl">🤔</span>
          <span className="font-medium">Facing an issue?</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
