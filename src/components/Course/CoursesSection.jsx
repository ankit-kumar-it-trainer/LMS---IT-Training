import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'React Basics',
    description: 'Kickstart your React journey with fundamentals and hands-on projects.',
    videoId: 'w7ejDZ8SWv8',
  },
  {
    id: 2,
    title: 'JavaScript Essentials',
    description: 'Master the core concepts of JavaScript for web development.',
    videoId: 'PkZNo7MFNFg',
  },
  {
    id: 3,
    title: 'Node.js Crash Course',
    description: 'Learn backend development with Node.js and Express.',
    videoId: 'TlB_eWDSMt4',
  },
  {
    id: 4,
    title: 'HTML & CSS Mastery',
    description: 'Build beautiful and responsive websites from scratch.',
    videoId: 'UB1O30fR-EE',
  },
  {
    id: 5,
    title: 'Git & GitHub',
    description: 'Version control and collaboration for developers.',
    videoId: 'RGOj5yH7evk',
  },
  {
    id: 6,
    title: 'Python for Beginners',
    description: 'Start coding in Python with easy-to-follow lessons.',
    videoId: 'rfscVS0vtbw',
  },
];

const getThumbnail = (videoId) => `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

const CoursesSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800">Popular Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <img
              src={getThumbnail(course.videoId)}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{course.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{course.description}</p>
              <Link
                to={`/courses/${course.id}`}
                className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-center"
              >
                Watch Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
