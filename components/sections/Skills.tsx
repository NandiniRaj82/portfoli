'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const skills = [
    // Frontend Technologies
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Frontend' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Language' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Language' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Framework' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'Framework' },
    { name: 'Tailwind', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png', category: 'Framework' },
    
    // Backend & Languages
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Language' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', category: 'Language' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'Language' },
    { name: 'C++', icon: 'https://pngimg.com/uploads/letter_c/letter_c_PNG22.png', category: 'Language' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Backend' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', category: 'Backend' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', category: 'Backend' },
    
    // Databases
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Database' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Database' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', category: 'Database' },
    
    // Mobile & Tools
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', category: 'Mobile' },
    { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', category: 'Language' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'DevOps' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'DevOps' },
    { name: 'YAML', icon: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3259618/yaml-icon-md.png', category: 'version' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tool' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tool' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'Design' },
    { name: 'Postman', icon: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254217/postman-icon-md.png', category: 'Tool' },
    { name: 'Tina CMS', icon: 'https://cdn.sanity.io/images/34ent8ly/production/1330251f1f394732038eb0e688693665665960ed-824x824.png', category: 'Tool' },
    { name: 'Docusaurus', icon: 'https://cdn.faun.dev/prod/media/public/cache/f9f62e2758bc297d0243e1dc23147ad2/docusaurus.png', category: 'Tool' },


  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Tech Stack
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"
          ></motion.div>
          <motion.p 
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
          </motion.p>
        </motion.div>

        {/* Single Skills Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-75"></div>
            
            {/* Card Content */}
            <div className="relative z-10">
              {/* Skills Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative flex flex-col items-center"
                  >
                    {/* Skill Icon Container */}
                    <div className="relative">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-800/50 rounded-2xl flex flex-col items-center justify-center border border-gray-600/30 group-hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25 p-2">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300 mb-1"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        {/* Fallback Icon */}
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xs hidden mb-1">
                          {skill.name.charAt(0)}
                        </div>
                        
                        {/* Skill Name - Inside container */}
                        <h3 className="text-white text-xs font-medium group-hover:text-purple-300 transition-colors duration-300 text-center leading-tight">
                          {skill.name}
                        </h3>
                      </div>
                      
                      {/* Floating Animation */}
                      <motion.div
                        animate={{
                          y: [0, -2, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.1,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-30 blur-sm"></div>
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl opacity-20 blur-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;