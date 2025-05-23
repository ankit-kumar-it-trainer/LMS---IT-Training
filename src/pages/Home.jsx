import React from 'react';
import Navbar from '../components/Layout/Navbar';
import HeroSection from '../components/Layout/HeroSection';
import CoursesSection from '../components/Course/CoursesSection';
import ContactSection from '../components/Layout/ContactSection';
import StartJourneySection from '../components/Layout/StartJourneySection';
import Footer from '../components/Layout/Footer';
import AdvantagesSection from '../components/Layout/AdvantagesSection';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />      <main className="flex-1">
        <HeroSection />
        <CoursesSection />
        <AdvantagesSection />
        <StartJourneySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
