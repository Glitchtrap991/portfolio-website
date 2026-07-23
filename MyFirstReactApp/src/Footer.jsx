import React from 'react';
import {Link} from "react-router-dom";
export default function Footer() {
  return (
    <footer className="w-full h-30 border-t border-emerald-500/20 bg-slate-950 px-6 py-8 font-mono text-xs text-slate-400">
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-6 md:flex-row">
        
        {/* Left: Terminal Copyright / EOF */}
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-slate-300">dev@localhost:~$</span>
          <span className="text-emerald-500 text-xs">echo "© {new Date().getFullYear()} Aparajith Venkatesh. All rights reserved."</span>
        </div>

        {/* Center: Live Server Diagnostics */}
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-lg border border-white/5 bg-slate-900/60 px-4 py-2 text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500">LATENCY:</span> 12ms
          </span>
          <span className="text-slate-700">|</span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500">UPTIME:</span> 99.9%
          </span>
          <span className="text-slate-700">|</span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-500">ENV:</span> production
          </span>
        </div>

        {/* Right: Command Line Social Links */}
        <div className="flex gap-4 text-sm gap-10">
          <Link to="https://github.com" className="transition-colors hover:text-emerald-400 hover:underline decoration-emerald-500 underline-offset-4">
            $ ssh github
          </Link>
          <Link to="https://linkedin.com" className="transition-colors hover:text-emerald-400 hover:underline decoration-emerald-500 underline-offset-4">
            $ ping linkedin
          </Link>
        </div>

      </div>
    </footer>
  );
}