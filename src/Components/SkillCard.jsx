import React from "react";

export default function SkillCard({ icon, name, level }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 transform hover:scale-[1.02] group">
      <div className="flex items-center gap-4">
        <span className="text-3xl text-gray-400 group-hover:text-blue-400 transition-all duration-300 transform group-hover:scale-110">
          {icon}
        </span>
        <div>
          <h3 className="text-lg font-medium text-white mb-1">{name}</h3>
          <p className="text-sm text-gray-400 font-medium">{level}</p>
        </div>
      </div>
    </div>
  );
}
