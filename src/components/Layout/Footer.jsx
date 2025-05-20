import { FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-center md:text-left">
        &copy; {new Date().getFullYear()} Ankit Kumar – IT Trainer. All rights reserved.
      </div>
      <div className="flex space-x-4 justify-center md:justify-end">
        <a href="https://www.linkedin.com/in/ankit-kumar-it-trainer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-2xl">
          <FaLinkedin />
        </a>
        <a href="https://www.youtube.com/@ankitkumar-it-trainer" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 text-2xl">
          <FaYoutube />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
