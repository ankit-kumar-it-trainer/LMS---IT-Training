import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/24/solid';

const categories = [
  { name: 'Featured', courses: [] },
  { name: 'Web Development', courses: [] },
  { name: 'Data Science', courses: [] },
  { name: 'Mobile Development', courses: [] },
];

const courses = [
  {
    id: 1,
    title: 'Complete React Developer Course',
    description: 'Master React.js and build modern web applications',
    videoId: 'w7ejDZ8SWv8',
    instructor: 'Ankit Kumar',
    rating: 4.9,
    students: 1234,
    price: '$99.99',
    category: 'Web Development',
    image: `https://img.youtube.com/vi/w7ejDZ8SWv8/maxresdefault.jpg`
  },
  {
    id: 2,
    title: 'Advanced JavaScript Concepts',
    description: 'Deep dive into JavaScript fundamentals and advanced topics',
    videoId: 'Mus_vwhTCq0',
    instructor: 'Ankit Kumar',
    rating: 4.8,
    students: 987,
    price: '$89.99',
    category: 'Web Development',
    image: `https://img.youtube.com/vi/Mus_vwhTCq0/maxresdefault.jpg`
  },
  {
    id: 3,
    title: 'Python for Data Science',
    description: 'Learn Python programming for data analysis and visualization',
    videoId: 'rfscVS0vtbw',
    instructor: 'Ankit Kumar',
    rating: 4.7,
    students: 2341,
    price: '$79.99',
    category: 'Data Science',
    image: `https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg`
  },
];

// Update categories with courses
categories.forEach(category => {
  category.courses = courses.filter(course => 
    category.name === 'Featured' ? true : course.category === category.name
  );
});

const CoursesSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Popular Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from industry experts and advance your career with our comprehensive courses
          </p>
        </div>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-100 p-1 mt-12 max-w-2xl mx-auto">
            {categories.map((category) => (
              <Tab
                key={category.name}
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                  ${
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-600 hover:bg-white/[0.12] hover:text-blue-800'
                  }`
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            {categories.map((category, idx) => (
              <Tab.Panel
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {category.courses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="object-cover w-full h-48"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-600">
                          {course.category}
                        </span>
                        <div className="flex items-center">
                          <StarIcon className="h-5 w-5 text-yellow-400" />
                          <span className="ml-1 text-sm font-medium text-gray-600">
                            {course.rating}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {course.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            src="https://via.placeholder.com/40"
                            alt={course.instructor}
                            className="h-8 w-8 rounded-full"
                          />
                          <span className="ml-2 text-sm text-gray-600">
                            {course.instructor}
                          </span>
                        </div>
                        <span className="font-bold text-gray-900">{course.price}</span>
                      </div>
                      <Link
                        to={`/courses/${course.id}`}
                        className="mt-4 block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default CoursesSection;
