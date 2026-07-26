import React from "react";

export default function certificate({ title, issuer, image, credentialId}){
    return(
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_8px_25px_rgba(16,185,129,0.15)] font-mono">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
            {/*Thumbnail preview*/}

            <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                    <img src={image} 
                    alt={title} 
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-slate-950/80 border border-emerald-500/30 px-2 py-1 rounded text-[10px] text-emerald-400">
                        {issuer}
                    </div>
                </div>
                <span className="">&gt; cred_id : {credentialId}</span>
            </div>

            {/*Certificate details*/}

            <div>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors mb-3">
                    <span className="text-emerald-500 mr-1">&gt;</span>{title}
                </h3>
                <p className="text-slate-400 w-auto text-s leading-relaxed mb-6 bg-slate-900/50 p-3 rounded-lg border border-white/5 border-l-2 border-l-emerald-500/50">
                   <span className="text-emerald-500 mr-1">&gt;</span>Issued By: {issuer}
                </p>
                <p className="text-xs text-slate-400 mb-4"><span className="text-emerald-500 mr-1">&gt;</span>Credential_ID: {credentialId}</p>
            </div>
        </div>
    );
}