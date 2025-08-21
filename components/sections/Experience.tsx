'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Dokaai',
      period: 'Jun 2025 – Present',
      location: 'Remote',
      description: 'Improved UI consistency by 25% across multiple applications. Collaborated closely with design and backend teams to implement responsive user interfaces and optimize user experience.',
      achievements: [
        'Enhanced UI consistency by 25%',
        'Collaborated with cross-functional teams',
        'Implemented responsive design principles'
      ],
      color: 'from-purple-500 to-blue-500'
    },
    {
      title: 'SDE Intern',
      company: 'Koach',
      period: 'Jan 2025 – Mar 2025',
      location: 'Remote',
      description: 'Implemented interactive UI components from Figma designs, reducing development turnaround time by 40%. Created reusable component library to streamline future development processes.',
      achievements: [
        'Reduced turnaround time by 40%',
        'Implemented Figma-to-code workflow',
        'Built reusable component library'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Project Lead',
      company: 'SciTech Club',
      period: 'Dec 2024 – Present',
      location: 'On-site',
      description: 'Leading a team to develop innovative projects for college technical infrastructure. Responsible for backend development, API design, and coordinating team efforts to deliver high-quality solutions.',
      achievements: [
        'Leading development team',
        'Backend architecture design',
        'API development and documentation'
      ],
      color: 'from-green-500 to-emerald-500'
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience</h2>
          <p className="text-gray-400 text-lg">My professional journey</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-gray-900 border-2 border-purple-500 rounded-full -translate-x-1/2 mt-6" />

                {/* Content */}
                <div className="md:ml-16 w-full">
                  <div className="skill-card rounded-xl p-6 hover:neon-glow transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <h4 className="text-lg font-semibold text-purple-400 mb-2">{exp.company}</h4>
                      </div>
                      <div className={`bg-gradient-to-r ${exp.color} p-3 rounded-lg w-fit`}>
                        <FiBriefcase className="text-white" size={20} />
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FiCalendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold text-purple-400 mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;