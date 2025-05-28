import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    name: 'Avi Juneja',
    role: 'SDE Intern',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: `I have been following Babbar bhaiya from my first year of College. I belong to ECE branch and had no one to guide me for my future. Babbar Bhaiya's achievements from Amazon to Microsoft and now Codehelp, motivated me to achieve my goals and I was able to crack 2 offers of 10+LPA CTC.`
  },
  {
    name: 'Gursewak singh',
    role: 'Intern at Byteoski Developers',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    text: `The DSA Supreme Batch course by Love Babbar is exceptional! The comprehensive curriculum, engaging teaching style, practical approach, and supportive community make it a must-have for mastering Data Structures and Algorithms.`
  },
  {
    name: 'Ashish dubey',
    role: 'SDE Intern at Microsoft',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    text: `Babbar bhaiya has just helped me improve my DSA and problem solving skills a lot and helped me to grap internship at Microsoft. It helped me a lot in improving my DSA and problem solving skills along with my web development skills`
  },
  {
    name: 'Tushar Gupta',
    role: 'Software Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
    text: `awesome❤️ Don't think other courses even come close in terms of quality.🔥 This was indeed DSA Supreeme!! Will definitely attend CodeHelp's future courses as well😊`
  },
  {
    name: 'Priya Sharma',
    role: 'Frontend Developer',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    text: `The web development course completely transformed my career. The practical projects and real-world applications helped me land my dream job. Thank you, CodeHelp!`
  },
  {
    name: 'Rahul Verma',
    role: 'Full Stack Developer',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    text: `From a complete beginner to a confident developer, CodeHelp's structured approach and mentor support made the journey smooth. Highly recommend their comprehensive courses.`
  },
  {
    name: 'Anjali Patel',
    role: 'Software Engineer at Google',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    text: `The interview preparation program is gold! The mock interviews and problem-solving sessions gave me the confidence to crack my Google interview. Forever grateful to the CodeHelp team.`
  },
  {
    name: 'Arjun Reddy',
    role: 'Backend Developer',
    avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
    text: `The DSA course's systematic approach and in-depth coverage helped me master complex concepts. The community support is amazing, always there to help when stuck.`
  },
  {
    name: 'Neha Gupta',
    role: 'Product Engineer',
    avatar: 'https://randomuser.me/api/portraits/women/34.jpg',
    text: `CodeHelp's placement preparation course is a game-changer. The mix of technical and soft skills training prepared me well for interviews. Secured multiple offers!`
  },
  {
    name: 'Karthik S',
    role: 'Tech Lead',
    avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
    text: `Being from a non-CS background, I was skeptical initially. But the step-by-step learning approach and dedicated mentorship helped me transition into tech smoothly.`
  }
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const review = reviews[current];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const prevReview = () => {
    setIsPaused(true);
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setIsPaused(true);
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 px-4 bg-[#020817] overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-blue-500 mb-6">What our Student Says</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Discover inspiration and insights through recent reviews from our students. Their success stories reflect
          the transformative journey of learning and growth with CodeHelp.
        </p>
      </div>
      <div className="max-w-5xl mx-auto relative">
        <button 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 transform -translate-x-4 bg-[#1E1F24] hover:bg-[#2A2B32] p-4 rounded-full shadow-xl transition-all duration-300 focus:outline-none group"
          onClick={prevReview}
        >
          <FaChevronLeft className="text-white text-xl group-hover:scale-110 transition-transform" />
        </button>
        <button 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 transform translate-x-4 bg-[#1E1F24] hover:bg-[#2A2B32] p-4 rounded-full shadow-xl transition-all duration-300 focus:outline-none group"
          onClick={nextReview}
        >
          <FaChevronRight className="text-white text-xl group-hover:scale-110 transition-transform" />
        </button>
        <div className="overflow-hidden px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1E1F24] rounded-2xl p-8 md:p-12 shadow-2xl"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-full border-4 border-[#2A2B32] overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-3 -left-3 bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:rotate-12">
                      <FaQuoteLeft className="text-white text-lg" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-6 mb-2">{review.name}</h3>
                  <p className="text-blue-500 text-sm font-medium">{review.role}</p>
                </div>
                <div className="w-full md:w-2/3" style={{ maxWidth: '600px', minHeight: '200px' }}>
                  <p className="text-gray-300 text-lg leading-relaxed">{review.text}</p>
                  <div className="mt-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-yellow-400"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.417 8.23L12 18.897l-7.417 4.603L6 15.27 0 9.423l8.332-1.268z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8 gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsPaused(true);
                setCurrent(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === current ? 'bg-blue-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
