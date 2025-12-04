import React from "react";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Lead Robotics Club",
      description: [
        "Led a team of 8 members in designing and developing autonomous robots for educational and research purposes",
        "Organized hands-on workshops to train junior members in microcontroller programming, ESP32 development, and sensor integration",
        "Cultivated a collaborative learning environment by guiding peers through complex robotics applications.",
      ],
      company: "Avantika University",
      location: "Ujjain",
      duration: "March 2025 - Present",
      skills: [ "Event Promotion",
    "Public Speaking",
    "Event Management",
    "Networking",
    "Leadership",
    "Team Coordination" ]
    },
    {
      id: 2,
      title: "Organizer - Robotics Workshop",
      description: [
        "Presented the Smart Medicine Box project to MSME officials, highlighting its impact on healthcare",
        "Explained the technical aspects, including ESP32-based automation and real-time alerts",
        "Demonstrated the working model and its benefits for elderly and chronically ill patients",
        "Received valuable feedback and explored potential funding and collaboration opportunities"
      ],
      company: "TechFest IITB",
      location: "Avantika University, Ujjain",
      duration: "Oct 2024",
      skills: ["Technical Presentation",
                "Event Promotion",
                "Social Media Management",
                "Team Coordination",
                "Communication",
                "Stakeholder Engagement"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl pb-3 font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x mb-6 leading-[1.2]">
            Work Experience
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Professional journey and achievements
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/4">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 mb-1">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-1">{exp.location}</p>
                  <p className="text-gray-500 text-sm">{exp.duration}</p>
                </div>
                <div className="w-full md:w-3/4">
                  <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-800/80 text-blue-400 rounded-full hover:bg-gray-700/80 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
