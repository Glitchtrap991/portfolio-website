import React from 'react';

export default function ProjectCard({ title, category, description, tech, status, repoUrl, liveUrl }) {
  // Determine badge styling based on project status
  const isOnline = status === 'DEPLOYED' || status === 'ONLINE';

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_8px_25px_rgba(16,185,129,0.15)] font-mono">
      
      {/* Top Scanner Beam on Hover */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Card Header: Category & Live Status */}
        <div className="mb-4 flex items-center justify-between text-s text-slate-500 border-b border-emerald-500/10 pb-3">
          <span className="text-emerald-500/70">{category}</span>
          <span className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] border ${
            isOnline 
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
              : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
          }`}>
            <span className={`h-1.5 w-1.5 rounded-full ${isOnline ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            {status}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors mb-3">
          <span className="text-emerald-500 mr-1">&gt;</span>{title}
        </h3>

        {/* Project Description */}
        <p className="text-slate-400 w-auto text-s leading-relaxed mb-6 bg-slate-900/50 p-3 rounded-lg border border-white/5 border-l-2 border-l-emerald-500/50">
          {description}
        </p>
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="mb-6 flex flex-wrap gap-1.5 text-[10px]">
          {tech.map((item, index) => (
            <span 
              key={index} 
              className="rounded text-s bg-slate-900 px-2 py-1 text-slate-300 border border-white/5 group-hover:border-emerald-500/20 group-hover:text-emerald-300 transition-colors"
            >
              [{item}]
            </span>
          ))}
        </div>

        {/* Command Line Action Links */}
        <div className="flex items-center gap-3 pt-3 border-t border-emerald-500/10 text-xs">
          <a 
            href={repoUrl} 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 text-center py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5 hover:border-white/20 transition-all"
          >
            $ cat source
          </a>
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 text-center py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-400 text-emerald-400 hover:text-slate-950 font-bold border border-emerald-500/30 hover:border-emerald-400 transition-all shadow-[0_0_10px_rgba(16,185,129,0.1)]"
            >
              $ exec_live &rarr;
            </a>
          )}
        </div>
      </div>

    </div>
  );
}