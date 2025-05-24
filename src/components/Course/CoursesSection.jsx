import React from 'react';
import { Link } from 'react-router-dom';

const StudentAvatar = ({ index }) => (
  <img
    src={`https://i.pravatar.cc/40?img=${index}`}
    alt="Student"
    className="w-8 h-8 rounded-full border-2 border-gray-900"
  />
);

const CourseCard = ({ title, link, isLive, bordered }) => (
  <Link 
    to={link} 
    className={`block p-6 rounded-lg transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20`}
  >
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    {isLive && (
      <span className="inline-flex items-center gap-1 text-red-400 text-sm font-medium">
        <span className="animate-pulse">●</span> Live
      </span>
    )}
  </Link>
);

const features = [
  {
    title: "Dev Challenges",
    link: "/challenges",
    bordered: true
  },
  {
    title: "Tutorials",
    link: "/tutorials",
    bordered: true
  },
  {
    title: "Articles",
    link: "/articles",
    bordered: true
  },
  {
    title: "Core CS Subjects",
    link: "/cs-subjects",
    bordered: true
  },
  {
    title: "Free Web Dev",
    link: "/free-web-dev",
    bordered: true
  },
  {
    title: "Interview Experiences",
    link: "/interviews",
    bordered: true
  },
  {
    title: "Mock Tests",
    link: "/mock-tests",
    bordered: true
  },
  {
    title: "Quick Compiler",
    link: "/compiler",
    bordered: true
  }
];

// Define static data for categories and courses
const categories = [
  { name: 'Featured' },
  { name: 'Web Development' },
  { name: 'Data Structures' },
  { name: 'Algorithms' },
  { name: 'Machine Learning' },
  { name: 'Interview Prep' }
];

const courses = [
  { name: 'React Basics', category: 'Web Development' },
  { name: 'Advanced React', category: 'Web Development' },
  { name: 'Data Structures in C++', category: 'Data Structures' },
  { name: 'Dynamic Programming', category: 'Algorithms' },
  { name: 'Intro to Machine Learning', category: 'Machine Learning' },
  { name: 'Cracking the Coding Interview', category: 'Interview Prep' }
];

// Update categories with courses
categories.forEach(category => {
  category.courses = courses.filter(course => 
    category.name === 'Featured' ? true : course.category === category.name
  );
});

const CoursesSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1B1834] to-[#141328] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Crack the Code to<br />Success with Ankit Kumar - IT Trainer
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            Elevate your programming skills, solve challenges, and unlock the world of coding possibilities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/courses"
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-100 text-[#1B1834] font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              View Courses
            </Link>
            <Link
              to="/watch"
              className="inline-flex items-center px-6 py-3 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300 group"
            >
              <span>Watch Video</span>
              <span className="ml-2 text-red-400 group-hover:text-red-300">Live →</span>
            </Link>
          </div>

          {/* Students Counter */}
          <div className="mt-12 inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <StudentAvatar key={i} index={i} />
              ))}
            </div>
            <span className="text-white font-semibold ml-2">70,000+ Happy Students</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <CourseCard
              key={index}
              title={feature.title}
              link={feature.link}
              bordered={feature.bordered}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-[100px]"></div>
    </section>
  );
};

export default CoursesSection;
