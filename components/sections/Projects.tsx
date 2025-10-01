'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink, FiSmartphone, FiGlobe, FiShield, FiHeart } from 'react-icons/fi';
import Image from 'next/image';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: 'Service Sphere App',
      description: 'A comprehensive Flutter mobile application for streamlined service scheduling of utilities, integrated with Node.js backend and MongoDB for seamless data management.',
      tech: ['Flutter', 'Node.js', 'MongoDB', 'REST API'],
      image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      icon: FiSmartphone,
      color: 'from-purple-500 to-blue-500'
    },
    {
      title: 'Service Sphere Web',
      description: 'React.js web platform version of Service Sphere, providing the same powerful service management capabilities with responsive web design and optimized user experience.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      icon: FiGlobe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Dynamic QR Code Attendance System',
      description: 'Innovative attendance tracking system using dynamically generated QR codes, built with Node.js and MongoDB for automated and secure attendance management.',
      tech: ['Node.js', 'MongoDB', 'QR Code API', 'Express.js'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      icon: FiShield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Furry Friends',
      description: 'Pet adoption website designed to connect loving families with pets in need of homes, featuring search functionality and adoption management built with PHP and MySQL.',
      tech: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
      image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: '#',
      demo: '#',
      icon: FiHeart,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-gray-400 text-lg">Some of my recent work</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="project-card rounded-xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${project.color} p-3 rounded-lg`}>
                  <project.icon className="text-white" size={20} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    <FiGithub />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;