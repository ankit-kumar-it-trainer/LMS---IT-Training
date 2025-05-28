import React from 'react';
import Navbar from '../components/Layout/Navbar';
import SocialStatsSection from '../components/Layout/SocialStatsSection';
import ReviewsSection from '../components/Layout/ReviewsSection';
import HeroSection from '../components/Layout/HeroSection';
import CoursesSection from '../components/Course/CoursesSection';
import ContactSection from '../components/Layout/ContactSection';
import StartJourneySection from '../components/Layout/StartJourneySection';
import Footer from '../components/Layout/Footer';
import AdvantagesSection from '../components/Layout/AdvantagesSection';
import FacingIssueButton from '../components/Common/FacingIssueButton';
import TopAnnouncementBar from '../components/Common/TopAnnouncementBar';
import AboutSection from '../components/Layout/AboutSection';
import CommunitySection from '../components/Layout/CommunitySection';
import WhatsAppChatWidget from '../components/Common/WhatsAppChatWidget';
import InstructorSection from '../components/Layout/InstructorSection';
import CoursesOfferedSection from '../components/Course/CoursesOfferedSection';

const Home = () => {  return (
    <div className="min-h-screen flex flex-col">
      <TopAnnouncementBar />
      <Navbar />      <FacingIssueButton />
      <main className="flex-1">
        <HeroSection />
        <SocialStatsSection />
        <CoursesSection />
        <CoursesOfferedSection />
        <AboutSection />
        <AdvantagesSection />
        <ReviewsSection key="reviews" />
        <InstructorSection />
        <StartJourneySection />
        <CommunitySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppChatWidget />
    </div>
  );
};

export default Home;
