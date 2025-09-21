import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Quiz App (Full-Stack MERN)',
      description: 'Developed a full-stack application using the MERN stack, featuring a Node.js REST API with JWT authentication and a responsive React frontend.',
      details: 'Independently deployed the backend to Render and frontend to Vercel, configuring CI/CD, CORS, and environment variables for a live production environment.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Vercel', 'Render', 'Git'],
      links: {
        source: 'https://github.com/manmathbh/quiz_app',
        demo: 'https://quiz-app-z8t8.onrender.com/'
      }
    },
    {
      title: 'Full-Stack Expense Tracker',
      description: 'Built a full-stack MERN application featuring a secure RESTful API with JWT authentication and full CRUD operations for expense management.',
      details: 'Dynamic frontend with Chart.js for data visualization and a data export feature (PDF/CSV); deployed using a CI/CD pipeline to Netlify and Render.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'JWT', 'Netlify', 'Render'],
      links: {
        source: 'https://github.com/manmathbh/expense_tracker',
        demo: 'https://graceful-sundae-d41e85.netlify.app/login.html'
      }
    },
    {
      title: 'Grammar Score Generator (Machine Learning Project)',
      description: 'Developed an ML model to predict spoken English grammar proficiency (0-5 scale) from audio features like MFCCs and pitch statistics.',
      details: 'Trained and evaluated various regression models (Linear Regression, XGBoost), assessing performance with Pearson correlation and Matplotlib/Seaborn visualizations.',
      technologies: ['Python', 'Machine Learning', 'Linear Regression', 'XGBoost', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
      links: {
        source: 'https://github.com/manmathbh/grammar-scorring'
      }
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-black/20 rounded-2xl p-8 border border-white/10 hover:border-primary-500/50 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  <strong>Details:</strong> {project.details}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                <a
                  href={project.links.source}
                  className="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-lg border border-primary-500/30 hover:bg-primary-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  Source Code
                </a>
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    className="px-4 py-2 bg-secondary-500/20 text-secondary-300 rounded-lg border border-secondary-500/30 hover:bg-secondary-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-secondary-500/20 text-secondary-300 rounded-full text-sm border border-secondary-500/30 hover:bg-secondary-500/30 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

