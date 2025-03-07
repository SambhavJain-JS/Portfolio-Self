import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/SambhavJain-JS',
      icon: <FaGithub className="text-xl" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sambhav-jain-sj0505',
      icon: <FaLinkedin className="text-xl" />
    },
    {
      name: 'Email',
      url: 'mailto:sambhav.jain@avantika.edu.in',
      icon: <FaEnvelope className="text-xl" />
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-900/90 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Sambhav Jain
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Engineering student passionate about robotics, IoT, and innovative technology solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                <FaCode className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                Projects
              </Link>
              <Link to="/skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                <FaCode className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                Skills
              </Link>
              <Link to="/experience" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                <FaCode className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                Experience
              </Link>
              <Link to="/certificates" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                <FaCode className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                Certificates
              </Link>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Connect</h3>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              Feel free to reach out for collaborations or opportunities
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex justify-center items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Sambhav Jain. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
