import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaLaptopCode, FaUsers } from 'react-icons/fa';

const HeroSection = () => (
  <section className="relative bg-[#020817] min-h-screen flex items-center overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-screen justify-center">
        {/* Left: Content */}
        <div className="flex-1 text-center lg:text-left flex flex-col justify-center mb-[140px]">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Future-Ready
            <br />
            <span className="text-blue-500"> Tech Skills</span>
            <br />
            At Your Fingertips
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
          Master tech skills with industry-relevant courses designed by top experts. Learn at your own pace with hands-on projects and live doubt solving.
          </p>
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-12">
            <Link
              to="/courses"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-200"
            >
              Explore Courses
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg transform hover:scale-105 transition duration-200"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto lg:mx-0 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                <FaGraduationCap className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">10K+</h3>
              <p className="text-sm text-gray-300">Learners Empowered</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                <FaLaptopCode className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">50+</h3>
              <p className="text-sm text-gray-300">Tech-Focused Courses</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                <FaUsers className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">20+</h3>
              <p className="text-sm text-gray-300">Industry Experts</p>
            </div>
          </div>
        </div>
        
        {/* Right: Image */}
        <div className="flex-1 relative flex items-center justify-center">
          <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500  mb-[140px]" 
>
            <img
              src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&w=800"
              alt="Student coding"
              // className="w-full h-auto"
              className="w-full max-h-[630px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Start Learning Today
                </h3>
                <p className="text-white/90 text-sm">
                  Join thousands of successful students
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-blue/20 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
