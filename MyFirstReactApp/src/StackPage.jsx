import React from 'react';

// 1. MASTER STACK DATABASE
// Organized by system architecture layers
const stackData = [
  {
    category: "CORE_LANGUAGES",
    path: "/usr/bin/languages",
    skills: [
      { name: "JavaScript (ES6+)", level: "90%", status: "OPTIMIZED", bar: "██████████████░░" },
      { name: "Python", level: "85%", status: "ACTIVE", bar: "█████████████░░░" },
      { name: "Java", level: "80%", status: "STABLE", bar: "████████████░░░░" },
      { name: "C / C++", level: "75%", status: "LOW_LATENCY", bar: "███████████░░░░░" }
    ]
  },
  {
    category: "FRONTEND_ARCHITECTURE",
    path: "/var/www/client",
    skills: [
      { name: "React.js", level: "90%", status: "CORE_ENGINE", bar: "██████████████░░" },
      { name: "Tailwind CSS", level: "95%", status: "OPTIMIZED", bar: "███████████████░" },
      { name: "Vite / ES Modules", level: "85%", status: "LIGHTNING", bar: "█████████████░░░" },
      { name: "HTML5 / CSS3", level: "90%", status: "STABLE", bar: "██████████████░░" }
    ]
  },
  {
    category: "BACKEND_&_DATABASES",
    path: "/etc/servers/api",
    skills: [
      { name: "Node.js / Express", level: "85%", status: "ONLINE", bar: "█████████████░░░" },
      { name: "MongoDB / Mongoose", level: "85%", status: "CONNECTED", bar: "█████████████░░░" }
    ]
  },
  {
    category: "AI_&_MACHINE_LEARNING",
    path: "/opt/models/inference",
    skills: [
        { name : "Machine Learning",level : "90%", status : "ACTIVE", bar: "██████████████░░"},
      { name: "TensorFlow / TFLite", level: "80%", status: "EDGE_DEPLOYED", bar: "████████████░░░░" },
      { name: "CNN Architectures", level: "85%", status: "TRAINED", bar: "█████████████░░░" },
      { name: "Scikit-Learn / Pandas", level: "80%", status: "ACTIVE", bar: "████████████░░░░" },
      { name: "Computer Vision (OpenCV)", level: "75%", status: "PROCESSING", bar: "███████████░░░░░" }
    ]
  },
  {
    category: "DEVOPS_&_SYSTEM_TOOLS",
    path: "/root/utilities",
    skills: [
      { name: "Git / GitHub Versioning", level: "90%", status: "SYNCED", bar: "██████████████░░" },
      { name: "RESTful API Design", level: "90%", status: "SECURE", bar: "██████████████░░" }
    ]
  }
];

export default function StackPage() {
  return (
    <div className="w-full max-w-6xl py-8 font-mono">
      
      {/* Terminal Header */}
      <div className="mb-10 border-b border-emerald-500/20 pb-6">
        <p className="text-xs text-emerald-400 mb-1">&gt; cd /root/portfolio/stack &amp;&amp; cat dependencies.json</p>
        <h1 className="text-3xl font-black text-white tracking-tight">
          System Architecture <span className="text-emerald-500 font-normal text-lg">[ENV: PROD]</span>
        </h1>
        <p className="text-slate-400 text-sm mt-2">
          Real-time diagnostic overview of deployed languages, frameworks, and infrastructure capabilities.
        </p>
      </div>

      {/* Stack Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {stackData.map((section, idx) => (
          <div 
            key={idx} 
            className={`rounded-2xl border border-emerald-500/20 bg-slate-950/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.1)] ${
              idx === stackData.length - 1 ? 'lg:col-span-2' : ''
            }`}
          >
            {/* Section Header */}
            <div className="flex items-center justify-between border-b border-emerald-500/10 pb-3 mb-4">
              <span className="text-sm font-bold text-white tracking-wider flex items-center gap-2">
                <span className="text-emerald-500">&gt;</span> {section.category}
              </span>
              <span className="text-[11px] text-slate-500 font-mono">{section.path}</span>
            </div>

            {/* Skills List within Category */}
            <div className="space-y-4">
              {section.skills.map((skill, sIdx) => (
                <div key={sIdx} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 bg-slate-900/40 p-3 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                  
                  {/* Skill Name & Status Pill */}
                  <div className="flex items-center justify-between sm:justify-start gap-3 min-w-[200px]">
                    <span className="text-xs font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {skill.status}
                    </span>
                  </div>

                  {/* Terminal Memory/Proficiency Bar */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 font-mono text-xs text-slate-500">
                    <span className="text-emerald-500/80 hidden md:inline tracking-tighter drop-shadow-[0_0_5px_rgba(16,185,129,0.4)]">
                      [{skill.bar}]
                    </span>
                    <span className="text-slate-300 font-bold w-10 text-right">{skill.level}</span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Terminal Footer Prompt */}
      <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
        &gt; ALL_DEPENDENCIES_VERIFIED // ZERO_CONFLICTS_DETECTED
      </div>

    </div>
  );
}