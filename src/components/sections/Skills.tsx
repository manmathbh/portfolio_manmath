import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C++', 'C', 'Java', 'Golang', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Shell']
    },
    {
      title: 'CS Constructs',
      skills: ['Data Structures', 'Computer Networks', 'Operating Systems', 'Object Oriented Programming', 'DBMS', 'gRPC']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Frameworks/Libraries',
      skills: ['Next.js', 'GraphQL', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Socket.IO', 'Flask', 'ESLint']
    },
    {
      title: 'Tools/Softwares',
      skills: ['Linux', 'Unix', 'Git', 'GitHub', 'Docker', 'AWS', 'Vagrant', 'Gerrit']
    },
    {
      title: 'Machine Learning & Data Analysis',
      skills: ['RAG', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Langchain', 'HuggingFace']
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
        Skills
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-black/20 rounded-2xl p-6 border border-white/10 hover:border-primary-500/50 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-primary-400 mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30 hover:bg-primary-500/30 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

