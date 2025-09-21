import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  scrollToSection: (sectionIndex: number) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center max-w-4xl mx-auto px-6"
    >
      <div className="backdrop-blur-md bg-black/20 rounded-3xl p-12 border border-white/10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
        >
          Manmath Hatte
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-2xl md:text-3xl font-medium text-gray-300 mb-8"
        >
          Software Engineer & Competitive Programmer
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          B.Tech student passionate about full-stack development, competitive programming, and machine learning. 
          Building innovative solutions with modern technologies.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection(2)}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          
          <a
            href="https://drive.google.com/file/d/1D3UUb5FL461XD4MXfsMT3Vufbc4rUPMG/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gray-700/50 rounded-full text-white font-semibold hover:bg-gray-600/50 transition-all duration-300 transform hover:scale-105"
          >
            View Resume
          </a>

          <button
            onClick={() => scrollToSection(8)} // Scrolls to Contact
            className="px-8 py-4 border-2 border-primary-500 rounded-full text-primary-400 font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex justify-center space-x-8 text-gray-400"
        >
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Nanded, Maharashtra</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>manmathcp@gmail.com</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;

