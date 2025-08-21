import React, { useState, useEffect, useRef } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown, FiCode, FiZap, FiStar, FiPlay, FiExternalLink } from 'react-icons/fi';

const TypingAnimation = ({ texts, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-cyan-400 ml-1">|</span>
    </span>
  );
};

const ParallaxOrb = ({ size, color, left, top, delay }) => (
  <div
    className={`absolute rounded-full blur-xl opacity-20 animate-float-slow`}
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color}, transparent)`,
      left,
      top,
      animationDelay: `${delay}s`,
    }}
  />
);

const CodeSnippet = ({ children, className = "" }) => (
  <div className={`font-mono text-sm bg-gray-900/50 border border-cyan-500/20 rounded-lg p-3 backdrop-blur-sm ${className}`}>
    <div className="flex items-center gap-2 mb-2">
      <div className="w-3 h-3 rounded-full bg-red-400"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
      <div className="w-3 h-3 rounded-full bg-green-400"></div>
    </div>
    <div className="text-gray-300">{children}</div>
  </div>
);

const StatsCard = ({ number, label, icon: Icon }) => (
  <div className="bg-gray-900/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10">
    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
    <div className="text-3xl font-bold text-white mb-2">{number}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </div>
);

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  
  const typingTexts = [
    'Full-Stack Developer',
    'React.js Specialist',
    'Node.js Expert',
    'Mobile App Developer',
  ];

  const socialLinks = [
    { 
      icon: FiGithub, 
      href: 'https://github.com/NandiniRaj82', 
      label: 'GitHub',
      color: 'hover:bg-gray-800 hover:text-white'
    },
    { 
      icon: FiLinkedin, 
      href: 'https://www.linkedin.com/in/nandini-raj-6787242a1/', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    { 
      icon: FiMail, 
      href: 'mailto:nandiniraj175@gmail.com', 
      label: 'Email',
      color: 'hover:bg-purple-600 hover:text-white'
    },
  ];

  const skills = ['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'TypeScript'];
  
  const stats = [
    { number: '50+', label: 'Projects', icon: FiCode },
    { number: '3+', label: 'Years Exp', icon: FiZap },
    { number: '100%', label: 'Success Rate', icon: FiStar }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-black overflow-hidden"
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 animate-gradient-shift" />
        <div className="absolute inset-0 bg-gradient-to-bl from-pink-600/5 via-purple-600/10 to-indigo-600/5 animate-gradient-shift-reverse" />
        
        {/* Floating Orbs */}
        <ParallaxOrb size="400px" color="#8b5cf6" left="10%" top="20%" delay={0} />
        <ParallaxOrb size="300px" color="#06b6d4" left="80%" top="60%" delay={2} />
        <ParallaxOrb size="200px" color="#ec4899" left="60%" top="10%" delay={4} />
        
        {/* Dynamic Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-grid-pattern animate-pulse" />
        </div>
        
        {/* Mouse Interactive Light */}
        <div 
          className="absolute w-96 h-96 pointer-events-none transition-all duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute top-20 left-10 hidden xl:block opacity-80">
        <CodeSnippet className="animate-float">
          <span className="text-cyan-400">const</span>{' '}
          <span className="text-purple-400">developer</span> = {'{'}
          <br />
          <span className="ml-4 text-green-400">passionate</span>: <span className="text-yellow-400">true</span>,
          <br />
          <span className="ml-4 text-green-400">creative</span>: <span className="text-yellow-400">true</span>
          <br />
          {'}'}
        </CodeSnippet>
      </div>
      
      <div className="absolute bottom-20 right-10 hidden xl:block opacity-80">
        <CodeSnippet className="animate-float-reverse">
          <span className="text-purple-400">Skills</span>: [
          <br />
          {skills.map((skill, i) => (
            <span key={i} className="ml-4 text-green-400">
              '{skill}'{i < skills.length - 1 ? ',' : ''}
              <br />
            </span>
          ))}
          ]
        </CodeSnippet>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            {/* Status Badge */}
           

            {/* Main Heading */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-4 leading-none">
                <span className="block bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent relative">
                  Nandini Raj
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent blur-sm opacity-40" />
                </span>
              </h1>
            </div>

            {/* Typing Animation */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-2xl md:text-4xl mb-8">
                <div className="bg-gray-900/40 backdrop-blur-xl border border-cyan-500/30 px-8 py-6 rounded-3xl inline-block shadow-2xl">
                  <TypingAnimation texts={typingTexts} className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text font-bold" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                Crafting <span className="text-cyan-400 font-semibold">exceptional digital experiences</span> with 
                cutting-edge technologies, innovative solutions, and 
                <span className="text-purple-400 font-semibold"> pixel-perfect design</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <FiMail className="w-5 h-5" />
                    Start a Project
                    <FiPlay className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
                
                <button className="group border-2 border-cyan-500/50 text-cyan-300 hover:text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm bg-cyan-500/5 hover:bg-cyan-500/20 hover:border-cyan-400 transform hover:scale-110 hover:shadow-lg">
                  <a
                  href="https://docs.google.com/document/d/1pi3HBS_i5amJhvyqfiXzaqh86sifNx7L3u7oVbfZFWw/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-3">
                    <FiDownload className="w-5 h-5 group-hover:animate-bounce" />
                    View Resume
                    <FiExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </span>
                </a>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center gap-6 mb-16">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-all duration-300 p-5 rounded-2xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-cyan-500/50 transform hover:scale-125 hover:-translate-y-2 hover:shadow-xl`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col items-center">
              <div className="w-8 h-14 border-2 border-cyan-400/50 rounded-full flex justify-center relative overflow-hidden group cursor-pointer">
                <div className="w-1.5 h-4 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-3 animate-bounce group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-cyan-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-gray-400 mt-4 animate-pulse">Discover More</p>
              <FiArrowDown className="text-cyan-400/60 mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        
        @keyframes gradient-shift {
          0%, 100% { transform: translateX(0%) rotate(0deg); }
          50% { transform: translateX(100%) rotate(180deg); }
        }
        
        @keyframes gradient-shift-reverse {
          0%, 100% { transform: translateX(0%) rotate(0deg); }
          50% { transform: translateX(-100%) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(0px); }
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 20s ease-in-out infinite;
        }
        
        .animate-gradient-shift-reverse {
          animation: gradient-shift-reverse 25s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 6s ease-in-out infinite;
        }
        
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;