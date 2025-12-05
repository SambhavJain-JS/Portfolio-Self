import React from "react";
import { FaServer, FaRobot, FaCode, FaMicrochip, FaTools, FaLaptopCode } from "react-icons/fa";
import { SiCplusplus, SiPython, SiArduino, SiEspressif, SiGit, SiAutodesk } from "react-icons/si";
import { IoHardwareChip } from "react-icons/io5";
import { MdDeveloperBoard } from "react-icons/md";
import { FaReact } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa6";
import { GiCircuitry } from "react-icons/gi";
import { GiGears } from "react-icons/gi";
import { PiCircuitryFill } from "react-icons/pi";
import { TbRobot } from "react-icons/tb";
import { FaLayerGroup } from "react-icons/fa";
import { FcElectricalSensor } from "react-icons/fc";
import SkillCard from "./SkillCard";
import { SiLinux, SiOpencv, SiBaidu, SiRos, SiFirebase } from "react-icons/si";
import { MdDashboard } from "react-icons/md";
import { GiLed } from "react-icons/gi";
import { TbTopologyStar3 } from "react-icons/tb";
import { TbCube } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";



export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x mb-6 leading-tight">
              Technical Expertise
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">
              Designing Intelligent Systems with Embedded, IoT, Robotics, and Software Development Expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-4">
                <span className="bg-blue-500/20 p-3 rounded-xl">
                  <FaLaptopCode className="text-blue-400 text-2xl" />
                </span>
                Programming Languages
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <SkillCard icon={<SiCplusplus />} name="C++" level="Advanced" />
                <SkillCard icon={<SiPython />} name="Python" level="Advanced" />
                <SkillCard icon={<SiArduino />} name="Arduino" level="Advanced" />
                <SkillCard icon={<SiEspressif />} name="ESP32" level="Advanced" />
                <SkillCard icon={<FaCode />} name="HTML & CSS" level="Intermediate" />
                <SkillCard icon={<FaReact />} name="React.js" level="Intermediate" />
                <SkillCard icon={<FaFileCode />} name="Microcontroller Programming" level="Intermidiate" />
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-4">
                <span className="bg-purple-500/20 p-3 rounded-xl">
                  <FaMicrochip className="text-purple-400 text-2xl" />
                </span>
                Core Skills
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <SkillCard icon={<FaRobot />} name="IoT Systems Design" level="Advanced" />
                <SkillCard icon={<SiRos />} name="ROS2" level="Intermidiate" />
                <SkillCard icon={<MdDeveloperBoard />} name="Digital Electronics" level="Advanced" />
                <SkillCard icon={<FcElectricalSensor />} name="Sensor Integration" level="Intermidiate" />
                <SkillCard icon={<GiCircuitry />} name="Circuit Design" level="Intermidiate" />
                <SkillCard icon={<GiGears />} name="Motor Control" level="Intermidiate" />
                <SkillCard icon={<PiCircuitryFill />} name="Prototyping & Soldering" level="Intermidiate" />
                <SkillCard icon={<FaLayerGroup  />} name="OOP Concepts" level="Intermidiate" />
                <SkillCard icon={<FaCode />} name="DSA" level="Intermidiate" />
                <SkillCard icon={<GiArtificialIntelligence  />} name="ML" level="Intermidiate" />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-4">
              <span className="bg-green-500/20 p-3 rounded-xl">
                <FaTools className="text-green-400 text-2xl" />
              </span>
              Tools & Technologies
            </h2>
           <div className="grid md:grid-cols-3 gap-6">
              <SkillCard icon={<SiArduino />} name="Arduino IDE" level="Advanced" />
              <SkillCard icon={<MdDashboard />} name="Blynk (IoT Dashboards)" level="Advanced" />
              <SkillCard icon={<SiFirebase />} name="Firebase" level="Intermediate" />
              <SkillCard icon={<SiGit />} name="Git & GitHub" level="Intermediate" />
              <SkillCard icon={<SiAutodesk />} name="Fusion360" level="Intermediate" />
              <SkillCard icon={<TbCube />} name="SolidWorks" level="Intermediate" />
              <SkillCard icon={<SiLinux />} name="Linux" level="Intermediate" />
              <SkillCard icon={<SiOpencv />} name="OpenCV" level="Beginner" />
              <SkillCard icon={<SiMysql />} name="MySQL (DBMS)" level="Intermediate" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
