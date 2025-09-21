// import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  { title: 'Codeforces Specialist', details: 'Max Rating: 1527 | 500+ Problems Solved', icon: '/assets/codeforces_logo.png', url: 'https://codeforces.com/profile/CodeSniperMan' },
  { title: 'LeetCode Expert', details: '800+ Problems Solved | Max Rating: 1565 | Top 31%', icon: '/assets/leetcode_logo.png', url: 'https://leetcode.com/u/mnmth/' },
  { title: 'CodeChef 3*', details: 'Max Rating: 1713 | Competitive Programming Excellence', icon: '/assets/codechef_logo.jpeg', url: 'https://www.codechef.com/users/mnmth' },
  { title: 'IICPC CODEFEST 2025', details: 'All India Rank 23/4072+ | Outstanding Performance', icon: '/assets/iicpc_logo.png' },
  { title: 'ICPC Regionals', details: 'First team in college history to compete', icon: '/assets/icpc_logo.png  ' },
  { title: 'National Scholarship', details: 'Awarded by Government of India for Higher Education', icon: '🎓' }
];

const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-4"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
        Achievements & Milestones
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((ach, index) => {
          const cardContent = (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full backdrop-blur-md bg-black/20 rounded-xl p-6 border border-white/10 text-center hover:border-primary-500/50 transition-colors duration-300"
            >
              <div className="h-10 flex justify-center items-center mb-4">
                {ach.icon.startsWith('/') ? (
                  <img src={ach.icon} alt={`${ach.title} logo`} className="h-full w-auto" />
                ) : (
                  <span className="text-4xl">{ach.icon}</span>
                )}
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">{ach.title}</h3>
              <p className="text-gray-300 text-sm">{ach.details}</p>
            </motion.div>
          );

          return ach.url ? (
            <a href={ach.url} target="_blank" rel="noopener noreferrer" key={`${ach.title}-link`}>
              {cardContent}
            </a>
          ) : (
            cardContent
          );
        })}
      </div>
    </motion.div>
  );
};

export default Achievements;

