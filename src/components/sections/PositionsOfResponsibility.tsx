// import React from 'react';
import { motion } from 'framer-motion';

const positions = [
  {
    role: 'Campus Ambassador',
    organization: 'E-CELL, IIT Bombay',
    date: 'Jul 2024 - Present',
    description: 'Representing and promoting entrepreneurial activities and events organized by IIT Bombay on campus.',
  },
  {
    role: 'Public Relations (PR) Assistant',
    organization: 'PRAGYAA, SGGSIET Nanded',
    date: 'Jan - Mar 2024',
    description: 'Executed PR campaigns and coordinated with media to promote participation in various tech events.',
  },
];

const PositionsOfResponsibility = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4"
    >
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Positions of Responsibility
      </h2>
      <div className="space-y-8">
        {positions.map((pos, index) => (
          <div key={index} className="bg-black bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-primary-700/50">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-primary-400">{pos.role}</h3>
              <span className="text-sm text-gray-400">{pos.date}</span>
            </div>
            <p className="text-lg text-gray-200 mb-3">{pos.organization}</p>
            <p className="text-gray-300">{pos.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PositionsOfResponsibility;
