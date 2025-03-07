import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaRobot } from 'react-icons/fa';

const Home = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Shubham-Vyas',
      icon: <FaGithub className="text-2xl" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shubham-vyas-3b3b37247/',
      icon: <FaLinkedin className="text-2xl" />
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/shubham_vyas_20',
      icon: <FaInstagram className="text-2xl" />
    },
    {
      name: 'Email',
      url: 'mailto:shubhamvyas2004@gmail.com',
      icon: <FaEnvelope className="text-2xl" />
    }
  ];

  return (
    <div className="relative flex-1 flex bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-900/60 backdrop-blur-3xl">
          <div className="absolute inset-0 bg-grid-white/[0.008] bg-grid-pattern"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center py-20">
        <div className="text-center space-y-10 max-w-5xl mx-auto px-4">
          {/* Robot Icon */}
          <div className="relative group cursor-pointer mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-2xl animate-pulse group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
            <FaRobot className="text-8xl text-blue-400/90 mx-auto relative z-10 animate-float transition-transform duration-500 group-hover:scale-110" />
          </div>

          {/* Main Heading */}
          <div className="space-y-8">
            <h2 className="text-2xl font-light tracking-wide text-blue-400/90">
              Welcome to my portfolio
            </h2>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight shine-effect">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                Sambhav Jain
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="space-y-8">
            <p className="text-3xl md:text-4xl text-gray-300 font-light tracking-wide">
              Engineering Student & Tech Enthusiast
            </p>
            <p className="text-xl text-gray-400/90 max-w-3xl mx-auto leading-relaxed">
              Passionate about robotics, IoT, and innovative technology solutions. 
              Building the future through code and creativity.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <Link
              to="/projects"
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3 text-white text-lg font-medium">
                View Projects
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/skills"
              className="group relative px-8 py-3 border border-blue-400 text-blue-400 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden text-lg font-medium"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Skills
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-10 pt-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                aria-label={link.name}
              >
                <div className="text-2xl relative">
                  {link.icon}
                  <div className="absolute inset-0 bg-blue-400/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;