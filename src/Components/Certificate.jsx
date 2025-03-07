import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Certificate() {
  const certificates = [
    {
      title: "Python Programming",
      issuer: "Infosys",
      date: "March 2025",
      description: "Python’s basic rules and syntax to write, compile, and run Python programs.",
      skills: ["Python", "Programming", "Data Structures", "Algorithms"],
      color: "blue"
    },
    {
      title: "C# DSA",
      issuer: "Coursera",
      date: "January 2025",
      description: " C# programming language and its application in data structures and algorithms.",
      skills: ["C#", "Data Structures", "Algorithms", "Programming"],
      color: "green"
    },
    {
      title: "Networking Basics",
      issuer: "Cisco ",
      date: "December 2024",
      description: " Introduction to networking concepts, protocols, and network security.",
      skills: ["Networking", "Cisco", "Protocols", "Security"],
      logo: "/google-logo.png",
      color: "purple"
    },
    {
      title: "Introduction to IoT",
      issuer: "Cisco ",
      date: "December 2024",
      description: " Introduction to the Internet of Things (IoT) and its applications.",
      skills: ["IoT", "Networking", "Sensors", "Cloud"],
      color: "blue"
    },
    {
      title: "Basic Html & CSS",
      issuer: "Microsoft",
      date: "October 2024",
      description: " Hands-on experience in electronics, programming, and IoT .",
      skills: [ "HTML", "CSS", "Web Development", "Frontend"],
      color: "green"
    },
    {
      title: "Arduino Programming",
      issuer: "Infosys",
      date: "September 2024",
      description: " Arduino programming and its application in electronics and IoT.",
      skills: ["Arduino", "Programming", "Electronics", "IoT"],
      color: "purple"
    }
  ];

  const getGradient = (color) => {
    const gradients = {
      blue: "from-blue-500/20 to-blue-500/5",
      green: "from-green-500/20 to-green-500/5",
      purple: "from-purple-500/20 to-purple-500/5"
    };
    return gradients[color] || gradients.blue;
  };

  const getBorderHover = (color) => {
    const borders = {
      blue: "hover:border-blue-500/50",
      green: "hover:border-green-500/50",
      purple: "hover:border-purple-500/50"
    };
    return borders[color] || borders.blue;
  };

  const getIconColor = (color) => {
    const colors = {
      blue: "text-blue-500",
      green: "text-green-500",
      purple: "text-purple-500"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x mb-6 leading-tight">
            Certifications
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b ${getGradient(cert.color)} backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 ${getBorderHover(cert.color)} transition-all duration-500 hover:shadow-xl hover:transform hover:scale-[1.02] group`}
            >
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {cert.title}
                </h3>

                {/* Issuer and Date */}
                <div className="flex justify-between items-center mb-6">
                  <p className={`text-lg font-medium ${getIconColor(cert.color)}`}>
                    {cert.issuer}
                  </p>
                  <span className="text-gray-400 text-sm px-3 py-1.5 rounded-full bg-gray-800/50 font-medium">
                    {cert.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-1.5 bg-gray-800/50 text-sm rounded-full ${getIconColor(cert.color)} font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential Link */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <span className="text-gray-500 text-sm font-medium">
                  </span>
                  <a
                    href="#"
                    className={`inline-flex items-center gap-3 ${getIconColor(cert.color)} hover:opacity-80 transition-opacity duration-300 text-sm font-medium group/link`}
                  >
                    View Credential
                    <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
