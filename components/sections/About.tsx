'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-gray-400 text-lg">Get to know me better</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden gradient-bg p-2 float">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 via-blue-500 to-cyan-400 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gray-800 flex items-center justify-center relative overflow-hidden">
                    {/* Female Avatar SVG */}
                    <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      className="text-purple-300"
                    >
                      {/* Face */}
                      <circle cx="100" cy="85" r="35" fill="currentColor" opacity="0.9" />
                      {/* Hair */}
                      <path
                        d="M65 60 Q100 40 135 60 Q140 45 135 35 Q100 20 65 35 Q60 45 65 60"
                        fill="currentColor"
                        opacity="0.8"
                      />
                      {/* Body */}
                      <ellipse cx="100" cy="150" rx="45" ry="35" fill="currentColor" opacity="0.7" />
                      {/* Eyes */}
                      <circle cx="90" cy="80" r="3" fill="#1f2937" />
                      <circle cx="110" cy="80" r="3" fill="#1f2937" />
                      {/* Smile */}
                      <path
                        d="M90 95 Q100 105 110 95"
                        stroke="#1f2937"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Animated elements */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-2 border-dashed border-purple-400/30 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            <p className="mb-6">
              Hi, I’m Nandini 👋
              <br></br>
              I'm a passionate <span className="text-purple-400 font-semibold">Software Developer</span> with 
              expertise in building scalable web applications and mobile solutions. My journey in technology 
              has been driven by curiosity and a desire to create meaningful digital experiences.
            </p>
            
            <p className="mb-6">
              With strong foundations in both frontend and backend technologies, I specialize in 
              <span className="text-blue-400 font-semibold"> React.js, Node.js, and Flutter</span>. 
              I enjoy working on projects that challenge me to learn new technologies and solve 
              complex problems.
            </p>

            <p className="mb-8">
              Currently, I'm focused on developing innovative solutions that bridge the gap between 
              user needs and technical possibilities. I believe in writing clean, maintainable code 
              and delivering projects that exceed expectations.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Fast Learner</h4>
                <p className="text-gray-400">Always eager to learn new technologies and adapt to changing requirements.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Problem Solver</h4>
                <p className="text-gray-400">Love tackling complex challenges and finding efficient solutions.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;