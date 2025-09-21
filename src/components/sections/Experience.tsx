import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'CodeAlpha',
      duration: 'Jan. 2024 - Feb. 2024',
      location: 'Online',
      responsibilities: [
        'Developed and optimized algorithms for file manager in Linux (Ubuntu), reducing runtime by 10 percent.',
        'Utilized object-oriented programming principles to enhance code modularity and maintainability.',
        'Contributed to the codebase by writing unit tests to ensure code quality and reliability.',
        'Collaborated with senior developers to design and implement efficient data structures for real-time applications.'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-black/20 rounded-2xl p-8 border border-white/10 hover:border-primary-500/50 transition-all duration-300"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {exp.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-300 mb-4">
                <div className="flex items-center gap-4 mb-2 sm:mb-0">
                  <span className="text-primary-400 font-medium">{exp.company}</span>
                  <span className="text-gray-400">•</span>
                  <span>{exp.location}</span>
                </div>
                <span className="text-gray-400">{exp.duration}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-gray-200 mb-3">Key Responsibilities:</h4>
              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <motion.li
                    key={respIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: respIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;

