import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

const courses = [
  {
    id: 1,
    title: 'Spring Boot 0 to 100 Cohort 3.0 [NEW]',
    badges: ['BEST-SELLER', 'SELF-PACED'],
    tag: 'NEW',
    tagType: 'orange',
    image: 'https://img-c.udemycdn.com/course/750x422/2314160_8d61_6.jpg',
    description: 'Upgraded and better than ever! Master Spring Boot, Microservices, Kafka, k8s and more.',
  },
  {
    id: 2,
    title: 'DSA Prime 4.0',
    badges: ['BEST-SELLER', 'SELF-PACED'],
    tag: 'NEW',
    tagType: 'orange',
    image: 'https://img-c.udemycdn.com/course/750x422/2314160_8d61_6.jpg',
    description: 'Master Data Structures & Algorithms in Java with our comprehensive DSA course, featuring interactive...',
  },
  {
    id: 3,
    title: 'Java React Full Stack Course 2.0',
    badges: ['SELF-PACED'],
    tag: 'COMBO',
    tagType: 'teal',
    image: 'https://img-c.udemycdn.com/course/750x422/2314160_8d61_6.jpg',
    description: 'Designed for working professionals, this course teaches you how to build scalable, high-performance applications usin...',
  }
];

const CoursesOfferedSection = () => {
  return (
    <section className="py-16 bg-[#020817]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center mb-12">
          <span className="text-4xl text-white font-bold">Our </span>
          <span className="text-4xl text-blue-500 font-bold">Courses</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-[#020817] border border-gray-800 rounded-lg overflow-hidden relative group">
              {/* Tag Ribbon */}
              {course.tag && (
                <div className={`absolute top-4 -right-12 rotate-45 z-10 ${
                  course.tagType === 'orange' ? 'bg-orange-500' : 'bg-teal-500'
                } text-white px-12 py-1 text-sm font-medium`}>
                  {course.tag}
                </div>
              )}
              
              {/* Image */}
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full aspect-video object-cover"
                />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {course.badges.map((badge, idx) => (
                  <span 
                    key={idx}
                    className={`px-3 py-1 text-xs font-semibold rounded ${
                      badge === 'BEST-SELLER' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-green-500 text-white'
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl text-white font-bold mb-3 min-h-[60px]">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2 rounded transition-colors duration-300">
                    Enroll Now
                  </button>
                  <button className="flex-1 border border-gray-600 text-white hover:bg-gray-800 py-2 rounded flex items-center justify-center gap-2 transition-colors duration-300">
                    More Details <HiChevronRight className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesOfferedSection;
