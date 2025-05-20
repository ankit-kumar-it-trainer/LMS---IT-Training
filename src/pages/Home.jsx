import React from 'react';
import Navbar from '../components/Layout/Navbar';
import HeroSection from '../components/Layout/HeroSection';
import CoursesSection from '../components/Course/CoursesSection';
import AboutSection from '../components/Layout/AboutSection';
import ContactSection from '../components/Layout/ContactSection';
import Footer from '../components/Layout/Footer';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CoursesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
