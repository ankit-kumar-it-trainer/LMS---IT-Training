import { useState } from 'react';
import YouTubeEmbed from '../components/Course/YouTubeEmbed';

const StudentDashboard = () => {
  // Mock data - in a real app, this would come from an API
  const [courses] = useState([
    {
      id: 1,
      title: 'Introduction to React',
      description: 'Learn the basics of React.js',
      videoId: 'w7ejDZ8SWv8',
      watched: false
    },
    {
      id: 2,
      title: 'Advanced JavaScript Concepts',
      description: 'Deep dive into JavaScript',
      videoId: 'Mus_vwhTCq0',
      watched: false
    },
    {
      id: 3,
      title: 'Node.js Fundamentals',
      description: 'Build backend applications with Node.js',
      videoId: 'TlB_eWDSMt4',
      watched: false
    }
  ]);

  const [watchedVideos, setWatchedVideos] = useState(new Set());

  const handleMarkAsWatched = (courseId) => {
    setWatchedVideos(prev => new Set([...prev, courseId]));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Courses</h1>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-4">
              <YouTubeEmbed videoId={course.videoId} title={course.title} />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{course.title}</h3>
              <p className="mt-2 text-gray-600">{course.description}</p>
              <button
                onClick={() => handleMarkAsWatched(course.id)}
                className={`mt-4 w-full px-4 py-2 rounded-md ${
                  watchedVideos.has(course.id)
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white transition-colors duration-200`}
              >
                {watchedVideos.has(course.id) ? 'Watched ✓' : 'Mark as Watched'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Progress</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Completed Courses</span>
            <span className="text-2xl font-bold text-blue-600">
              {watchedVideos.size}/{courses.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${(watchedVideos.size / courses.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
