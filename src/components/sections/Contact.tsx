import  { useState } from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/manmathbh' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/mnmth/' },
  { name: 'X', icon: 'fa-brands fa-x-twitter', url: 'https://x.com/manmathbh' },
  { name: 'Discord', icon: 'fab fa-discord', url: 'https://discordapp.com/users/manmath3' },
  { name: 'Coding Profiles', icon: 'fas fa-code', url: 'https://clist.by/coder/manmath/' },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('manmathcp@gmail.com');
    setCopied(true);
    // Reset the "Copied!" text after 2 seconds -> :)))
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center text-white max-w-2xl mx-auto px-4"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        I'm actively seeking new opportunities and I'm always open to discussing new projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      {/* Email with Copy Button */}
      <div className="flex justify-center items-center gap-3 bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-3 max-w-sm mx-auto mb-6">
        <b className="text-gray-200">manmathcp@gmail.com</b>
        <button 
          onClick={handleCopyEmail}
          className="text-sm bg-primary-600/50 hover:bg-primary-600 text-white font-semibold px-3 py-1 rounded-md transition-all duration-300"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <p className="text-gray-400 mb-8">
        You can also find me on Discord: <b>manmath3</b>
      </p>

      <a
        href="mailto:manmathcp@gmail.com"
        className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg mb-12 transform hover:scale-105"
      >
        Say Hello
      </a>
      <div className="flex justify-center gap-6">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
          >
            <i className={`${social.icon} text-3xl`}></i>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;

