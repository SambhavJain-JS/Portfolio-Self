import React from "react";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Wall Painting Machine",
      description: [
        "Developed an automated wall painting machine using Arduino and CNC mechanism",
        "Implemented stepper motor control for precise movement",
        "Created a user-friendly interface for machine operation",
        "Achieved 80% reduction in manual painting effort"
      ],
      company: "College Project",
      location: "Mumbai",
      duration: "Jan 2024 - Present",
      skills: ["Arduino", "CNC", "Stepper Motors", "Gear Mechanism"]
    },
    {
      id: 2,
      title: "Smart Medicine Box",
      description: [
        "Built an IoT-based medicine reminder system",
        "Integrated ESP32 for wireless connectivity",
        "Developed mobile app interface for medication scheduling",
        "Implemented alert system with LED and buzzer indicators"
      ],
      company: "Personal Project",
      location: "Mumbai",
      duration: "Oct 2023 - Dec 2023",
      skills: ["ESP32", "IoT", "Arduino", "Mobile App Development"]
    },
    {
      id: 3,
      title: "Wave Mouse",
      description: [
        "Created a hands-free computer mouse using gyroscope sensors",
        "Implemented gesture recognition algorithms",
        "Designed ergonomic housing using 3D printing",
        "Achieved 90% accuracy in cursor control"
      ],
      company: "College Project",
      location: "Mumbai",
      duration: "Jun 2023 - Sep 2023",
      skills: ["Arduino Pro Micro", "Gyroscope", "3D Printing", "C++"]
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
