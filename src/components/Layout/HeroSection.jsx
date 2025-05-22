import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const stats = [
  { label: 'Success Rate', value: '95%' },
  { label: 'Active Students', value: '1000+' },
  { label: 'Course Library', value: '50+' },
  { label: 'Expert Instructors', value: '10+' }
];

const features = [
  {
    title: 'Expert-Led Training',
    description: 'Learn from industry professionals with years of experience'
  },
  {
    title: 'Flexible Learning',
    description: 'Study at your own pace with lifetime access to course content'
  },
  {
    title: 'Professional Certification',
    description: 'Earn certificates recognized by top companies'
  }
];

const HeroSection = () => {
  return (
    <div className="relative bg-white">
      {/* Main Hero Section */}
      <div className="relative min-h-[85vh] overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
        
        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh] px-4 sm:px-6 lg:px-8">
            {/* Left Content */}
            <div className="text-center lg:text-left pt-20 lg:pt-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                Turn Your Expertise Into An
                <span className="block text-blue-600">Online Learning Business</span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-gray-500 max-w-3xl">
                Create and sell online courses and coaching services under your own brand. Transform your knowledge into a thriving business.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/register"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
                >
                  Get Started For Free
                  <ChevronRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/courses"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-lg font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition duration-150 ease-in-out"
                >
                  Browse Courses
                </Link>
              </div>
            </div>
            
            {/* Right Content - Stats */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Platform Highlights</h3>
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="rounded-lg bg-blue-50 p-5 inline-block">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
