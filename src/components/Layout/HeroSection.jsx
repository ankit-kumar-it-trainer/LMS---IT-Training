import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaLaptopCode, FaUsers } from 'react-icons/fa';

const HeroSection = () => (
  <section className="relative bg-[#1B1834] pt-20 pb-12 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Premium
            <span className="text-primary-light"> Coding</span> Education
            <br />
            At Your Fingertips
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
            Master programming with industry-relevant courses designed by top developers. Learn at your own pace with hands-on coding practice and live doubt solving.
          </p>
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-12">
            <Link
              to="/courses"
              className="px-8 py-3 bg-white hover:bg-gray-100 text-[#1B1834] font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-200"
            >
              Explore Courses
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#1B1834] font-semibold rounded-lg transform hover:scale-105 transition duration-200"
            >
              Contact Us
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto lg:mx-0">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <FaGraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">10K+</h3>
              <p className="text-sm text-gray-300">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <FaLaptopCode className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">100+</h3>
              <p className="text-sm text-gray-300">Coding Courses</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <FaUsers className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">50+</h3>
              <p className="text-sm text-gray-300">Industry Experts</p>
            </div>
          </div>
        </div>
        
        {/* Right: Image */}
        <div className="flex-1 relative">
          <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
            <img
              src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&w=800"
              alt="Student coding"
              className="w-full h-auto"
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
