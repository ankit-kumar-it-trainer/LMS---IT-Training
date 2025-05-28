import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';

const InstructorSection = () => {
  return (
    <section className="py-16 bg-[#020817] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Left Content */}
        <div className="flex-1">
          <button className="bg-gray-800 text-sm text-gray-300 px-4 py-2 rounded-full mb-4">
            + Meet your Instructor
          </button>
          <h2 className="text-4xl text-blue-500 font-bold mb-4">Ankit Kumar</h2>
          <p className="text-white text-sm font-medium mb-4">
            A YOUTUBE CREATOR, AN ACTIVIST AND A TRAVEL VLOGGER
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            I love making videos. My expertise is in creating informative and educational content which provides objective, concise and simplified explanations of complex issues on a variety of subjects.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            I strongly believe in speaking truth to power and practice promoting progressive values of democracy, freedom, rationalism and critical thinking through my videos.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            My background is from mechanical and renewable energy engineering since I did my masters college degree in that. But my passion lies in the fields of Economics and Political Science in which I studied for a second bachelors degree. And yes, I also really really love travelling.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            You can learn more about him on:
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <FaInstagram className="text-2xl hover:text-white transition" />
            <FaYoutube className="text-2xl hover:text-white transition" />
            <FaTwitter className="text-2xl hover:text-white transition" />
            <FaFacebook className="text-2xl hover:text-white transition" />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cricket-pandith-34702.appspot.com/o/logo.png?alt=media&token=6434420b-c70c-449e-b459-160f4c268b1b"
            alt="Ankit Kumar - IT Trainer"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
