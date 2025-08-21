'use client';

import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Nandini Raj. Made with 
            <FiHeart className="text-red-400 animate-pulse" size={16} />
            and lots of coffee.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed & Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;