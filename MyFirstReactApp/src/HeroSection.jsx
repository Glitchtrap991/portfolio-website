import React from 'react';

export default function ProfileCard() {
  return (
    <div className="group relative w-200 ml-20 mt-20 overflow-hidden rounded-3xl border border-emerald-500/20 bg-slate-950/90 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]">
      
      {/* Top Scanner Beam Highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Terminal Header Bar */}
      <div className="mb-6 flex items-center justify-between border-b border-emerald-500/10 pb-3 font-mono text-[11px] text-slate-500">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500/80"></span>
          <span className="h-2 w-2 rounded-full bg-yellow-500/80"></span>
          <span className="h-2 w-2 rounded-full bg-emerald-500/80"></span>
        </span>
        <span className="text-emerald-500/80 tracking-widest">root@localhost:~</span>
      </div>

      {/* Profile Section */}
      <div className="relative mb-4 flex items-center justify-between">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-[2px] shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          <div className="h-full w-full rounded-[14px] bg-slate-950 flex items-center justify-center font-mono font-bold text-xl text-emerald-400 group-hover:scale-105 transition-transform duration-300">
            AV
          </div>
        </div>

        {/* System Status Ping */}
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          SYS_ONLINE
        </span>
      </div>

      {/* Name & Title */}
      <h3 className="text-2xl font-bold font-mono text-white tracking-tight group-hover:text-emerald-400 transition-colors">
        Aparajith Venkatesh
      </h3>
      <p className="text-lg font-mono text-emerald-500 mb-3 tracking-wide mt-2">
        &gt; FULL_STACK // AI_ENGINEER
      </p>

      {/* Terminal Bio */}
      <div className="mb-6 rounded-lg border border-white/5 bg-slate-900/50 p-3 font-mono text-xs leading-relaxed text-slate-400">
        <span className="text-emerald-400">&gt; </span>
        Deploying low-latency MERN architectures &amp; integrating predictive machine learning models into the web.
      </div>

      {/* Command Stack Pills */}
      <div className="mb-6 flex flex-wrap gap-1.5 font-mono text-[10px]">
        {['[PYTHON]','[AI ML]','[DEEP LEARNING]','[GEN AI]','[AGENTIC AI]','[REACT]', '[NODE.JS]', '[MONGO]'].map((tag) => (
          <span key={tag} className="rounded border border-emerald-500/20 text-sm bg-emerald-950/20 px-2 py-1 text-emerald-300/80 transition-colors group-hover:border-emerald-500/40 group-hover:text-emerald-300">
            {tag}
          </span>
        ))}
      </div>

      {/* Action Footer */}
      <button className="w-full rounded-xl border border-emerald-500 bg-emerald-500/10 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all hover:bg-emerald-400 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95">
        $ execute_handshake &rarr;
      </button>

    </div>
  );
}