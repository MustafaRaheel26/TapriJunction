import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Values from './components/Values';
import ChooseYourJourney from './components/ChooseYourJourney';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ModalSystem from './components/ModalSystem';

export default function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'menu' | 'sweets' | 'catering' | 'lunch' | 'story';
  }>({
    isOpen: false,
    type: 'menu'
  });

  const handleOpenModal = (type: 'menu' | 'sweets' | 'catering' | 'lunch' | 'story') => {
    setModalState({ isOpen: true, type });
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const handleScrollToStory = () => {
    const el = document.getElementById('our-story');
    if (el) {
      const offset = 90; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#2C1810] flex flex-col font-sans selection:bg-[#C9922B]/30 selection:text-[#6B1A1A]">
      {/* Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Sections */}
      <main className="grow">
        <Hero onOpenModal={handleOpenModal} onScrollToStory={handleScrollToStory} />
        <OurStory onOpenModal={handleOpenModal} />
        <Values />
        <ChooseYourJourney onOpenModal={handleOpenModal} />
        <Testimonials />
        <Newsletter />
      </main>

      {/* Detailed Footer */}
      <Footer />

      {/* Highly Interactive Modal System (Dine-in Menu, Mithai Custom Box, Catering Golden Ticket, Lunch Subscriptions, Our Story) */}
      <ModalSystem
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
      />
    </div>
  );
}
