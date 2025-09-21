import React from 'react';
import { useScroll } from '@react-three/drei';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import PositionsOfResponsibility from './sections/PositionsOfResponsibility';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

const UI: React.FC = () => {
  const scroll = useScroll();

  const scrollToSection = (sectionIndex: number) => {
    if (scroll && scroll.el) {
      scroll.el.scrollTo({
        top: scroll.el.clientHeight * sectionIndex,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full">
      <div className="h-screen flex items-center justify-center">
        {/* Pass the scrollToSection function  */}
        <Hero scrollToSection={scrollToSection} />
      </div>
      <div className="h-screen flex items-center justify-center"><Skills /></div>
      <div className="h-screen flex items-center justify-center"><Projects /></div>
      <div className="h-screen flex items-center justify-center"><Experience /></div>
      <div className="h-screen flex items-center justify-center"><PositionsOfResponsibility /></div>
      <div className="h-screen flex items-center justify-center"><Education /></div>
      <div className="h-screen flex items-center justify-center"><Achievements /></div>
      <div className="h-screen flex items-center justify-center"><Contact /></div>
    </div>
  );
};

export default UI;

