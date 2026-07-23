import React from 'react';
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-500/20 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 h-20">
        
        {/* Terminal Logo with Blinking Cursor */}
        <Link to="/" className="group flex items-center gap-2 font-mono text-base font-bold tracking-tight text-white transition-colors hover:text-emerald-400">
          <span className="text-emerald-500">&gt;</span>
          <span className="text-lg">Aparajith Venkatesh</span>
          <span className="inline-block h-4 w-2 animate-pulse bg-emerald-500"></span>
        </Link>

        {/* Directory Navigation Links */}
        <ul className="hidden items-center gap-8 font-mono text-sm md:flex">
          <li>
            <Link to="/" className="text-slate-400 text-xl transition-all hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">
              <span className="text-emerald-600/60">./</span>home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-slate-400 text-xl transition-all hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">
              <span className="text-emerald-600/60">./</span>projects
            </Link>
          </li>
          <li>
            <Link to="/stack" className="text-slate-400 text-xl transition-all hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">
              <span className="text-emerald-600/60">./</span>stack
            </Link>
          </li>
        </ul>

        {/* System Security / Network Badge */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="hidden rounded-md border text-sm border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-emerald-400 sm:inline-block">
            PORT: 443 [SECURE]
          </span>
          <Link
            to="/contact"
            className="rounded-lg border border-emerald-500 bg-slate-900 px-3.5 py-1.5 font-mono text-xs font-bold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all hover:bg-emerald-400 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95"
          >
            $ init_contact
          </Link>
        </div>

      </nav>
    </header>
  );
}