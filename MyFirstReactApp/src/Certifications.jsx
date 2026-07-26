import React from 'react';
import Certificate from './Certificate';

const certs = [{
        id: "1",
        title: "Microsoft Certified: Azure AI Fundamentals",
        issuer: "Microsoft",
        image: "./assets/Microsoft Certified - Azure AI Fundamentals_page-0001.jpg",
        credentialId: "DA8C3D0DE2DF56FB"
    },
    {
        id: "2",
        title: "Google AI Essentials",
        issuer: "Coursera",
        image: "./assets/Google_AI_Essentials.jpg",
        credentialId: "BAZ2TF5CT59E"
    },
    {
        id: "3",
        title: "MongoDB Basics for Students",
        issuer: "MongoDB",
        image: "./assets/MongoDB cert.jpg",
        credentialId: "MDBv149huhakm"
    },
    {
        id: "4",
        title: "Deep Learning Fundamentals",
        issuer: "IBM Developer Skills Network.(CognitiveClass.ai)",
        image: "./assets/Deep Learning Fundaments.jpg",
        credentialId: "ML0115EN"
    },
    {
        id: "5",
        title: "",
        issuer: "IBM Developer Skills Network.(CognitiveClass.ai)",
        image: "./assets/Deep Learning with TensorFlow.jpg",
        credentialId: "ML0120EN"
    },
    {
        id: "6",
        title: "Accelerating Deep Learning with GPUs",
        issuer: "IBM Developer Skills Network.(CognitiveClass.ai)",
        image: "./assets/Accelerating Deep Learning with GPUs.jpg",
        credentialId: "ML0122ENv3"
    },
    {
        id: "7",
        title: "SQL and Relational Databases 101",
        issuer: "IBM Developer Skills Network.(CognitiveClass.ai)",
        image: "./assets/SQL and Relational Databases 101.jpg",
        credentialId: "DB0101EN"
    },
    {
        id: "8",
        title: "Agentic AI in Action: RAG with LangChain",
        issuer: "Infosys Springboard",
        image: "./assets/Agentic AI in Action: RAG with LangChain Infosys.jpg",
        credentialId: ""
    },
    {
        id: "9",
        title: "Introduction to Data Science",
        issuer: "Infosys Springboard",
        image: "./assets/Introduction to Data Science Infosys.jpg",
        credentialId: ""
    },
    {
        id: "10",
        title: "Data Science Foundation Certication",
        issuer: "Infosys Springboard",
        image: "./assets/Data Science Foundation Certication Infosys.jpg",
        credentialId: ""
    },
]
export default function Certifications() {
    return(
        <div className="w-full max-w-6xl py-8 font-mono">
            <div className="mb-10 border-b border-emerald-500/20 pb-6">
                <p className="text-s text-emerald-400 mb-1">&gt; cd /root/portfolio/certs &amp;&amp; ls -la</p>
                <h1 className="text-3xl font-black text-white tracking-tight">
                    Certifications <span className="text-emerald-500 font-normal text-lg">({certs.length})</span>
                </h1>
                <p className="text-slate-400 text-sm mt-2">
                   Loading all completed certificates ...<span className="inline-block h-4 w-2 animate-pulse bg-emerald-500"></span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-auto">
                    {certs.map((cert) => (
                        <Certificate 
                        key={cert.id}
                        title={cert.title}
                        issuer={cert.issuer}
                        image={cert.image}
                        credentialId={cert.credentialId}
                        />
                    ))}
            </div>

            <div className="mt-12 text-center text-xs text-slate-500">
                 &gt; {certs.length} CERTIFICATES LOADED SUCESSFULLY !!!
            </div>
        </div>
    );
}