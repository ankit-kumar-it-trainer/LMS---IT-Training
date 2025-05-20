import { Link } from 'react-router-dom';

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-blue-600 to-indigo-800 text-white min-h-[60vh] flex items-center justify-center">
    <div className="absolute inset-0 bg-black/30" />
    <div className="relative z-10 max-w-3xl mx-auto text-center py-20 px-4">
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
        Start Your Learning Journey with <span className="text-yellow-300">Ankit Kumar – IT Trainer</span>
      </h1>
      <p className="text-lg sm:text-2xl mb-8 font-medium drop-shadow">
        Learn from curated YouTube video lessons.
      </p>
      <Link
        to="/courses"
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-3 rounded-lg shadow-lg transition"
      >
        Browse Courses
      </Link>
    </div>
  </section>
);

export default HeroSection;
