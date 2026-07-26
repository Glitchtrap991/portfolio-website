import React from 'react';

// 1. YOUR DIRECT CONTACT ENDPOINTS

const contactEndpoints = [
  {
    protocol: "EMAIL // SMTP",
    command: "$ mailto:vaparajith.2024@gmail.com",
    href: "mailto:vaparajith.2024@gmail.com",
    status: "PRIMARY_UPLINK",
  },
  {
    protocol: "LINKEDIN // PROFILE",
    command: "$ ping linkedin.com/in/aparajith-venkatesh",
    href: "https://linkedin.com/in/aparajith-venkatesh",
    status: "PROFESSIONAL_NETWORK",
  },
  {
    protocol: "GITHUB // REPOSITORIES",
    command: "$ ssh github.com/Glitchtrap991",
    href: "https://github.com/Glitchtrap991",
    status: "SOURCE_CODE",
  },
  {
    protocol: "TELEPHONE // DIRECT",
    command: "$ tel +91 XXXXX XXXXX",
    href: "tel:+910000000000",
    status: "DIRECT_VOICE",
  }
];

export default function ContactPage() {
  return (
    <div className="w-full max-w-4xl py-8 font-mono">
      
      {/* Terminal Header */}
      <div className="mb-10 border-b border-emerald-500/20 pb-6">
        <p className="text-xs text-emerald-400 mb-1">&gt; cd /root/portfolio/contact &amp;&amp; cat endpoints.txt</p>
        <h1 className="text-3xl font-black text-white tracking-tight">
          Direct Endpoints <span className="text-emerald-500 font-normal text-lg">[PUBLIC]</span>
        </h1>
        <p className="text-slate-400 text-sm mt-2">
          No automated contact forms or messaging queues. Reach out directly via any of the verified channels below.
        </p>
      </div>

      {/* Direct Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactEndpoints.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target={item.href.startsWith('http') ? "_blank" : "_self"}
            rel="noreferrer"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_8px_25px_rgba(16,185,129,0.15)]"
          >
            {/* Top Hover Highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              {/* Protocol & Status Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 text-xs">
                <span className="text-slate-400 font-bold tracking-wider">{item.protocol}</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-slate-900 border border-white/10 text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                  {item.status}
                </span>
              </div>

              {/* Terminal Command Display */}
              <div className="text-sm font-bold text-slate-300 group-hover:text-emerald-400 transition-colors mb-2">
                {item.command}
              </div>
            </div>

            {/* Action Footer */}
            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
              <span>Execute connection</span>
              <span className="font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                Connect &rarr;
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Terminal Footer Prompt */}
      <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
        &gt; ENDPOINTS_ACTIVE // AWAITING_INCOMING_TRANSMISSION
      </div>

    </div>
  );
}