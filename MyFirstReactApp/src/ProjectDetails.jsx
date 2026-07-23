import React from 'react';
import ProjectCard from './ProjectCard';

// 1. YOUR MASTER PROJECT DATABASE
// To add a new project, just copy/paste a block and update the text!
const projectsData = [
  {
    id: 1,
    title: "AI-Driven Job Tracker",
    category: "./apps/automation",
    description: "Automated resume parsing and web scraping system designed to extract job requirements and track application pipelines seamlessly.",
    tech: ["React", "Selenium", "MongoDB"],
    status: "DEPLOYED",
    repoUrl: "https://github.com/Glitchtrap991/Job-Tracker-final",
    liveUrl: "#live-demo"
  },
  {
    id: 2,
    title: "Fish Species Classifier",
    category: "./models/vision",
    description: "Convolutional neural network architecture optimized for low-latency edge inference, identifying marine life in real-time.",
    tech: ["TensorFlow Lite", "Android", "Python", "CNN"],
    status: "ONLINE",
    repoUrl: "https://github.com/Glitchtrap991/AI_ML_PEP_Fish_Classifier",
    liveUrl: null
  },
  {
    id: 3,
    title: "Ingage Technologies Website",
    category: "./systems/live-site",
    description: "Designed and engineered a comprehensive, data-driven EdTech platform from scratch using the MERN stack. Features dynamic course catalogs, live internship hubs, hackathon modules, and a custom administrative CMS engineered for real-time content synchronization and seamless CRUD management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    status: "ONLINE",
    repoUrl: "#github",
    liveUrl: "https://latestdeployableversion.vercel.app"// Passing null hides the live demo button automatically!
  },
  {
    id: 4,
    title: "Autonomous Expense Tracker",
    category: "./apps/finance",
    description: "Full-stack financial monitoring dashboard with real-time database syncing and automated categorization algorithms. •	Developed strict schema structures for multi-layered historical data metrics spanning category tags, transactional amounts, and custom trip budgets. ",
    tech: ["React", "Go", "MongoDB", "Tailwind"],
    status: "IN_PROGRESS",
    repoUrl: "#github",
    liveUrl: "#live-demo"
  },
  {
    id: 5,
    title: "Customer Feedback Sentiment Analyzer using Gemini API",
    category: "./apps/sentiment-analysis",
    description: "Developed a responsive web dashboard using Streamlit to ingest bulk batch customer review files (CSVs) for automatic sentiment extraction. Integrated TextBlob for base polarity classification (Positive/Negative/Neutral) alongside Gemini AI to extract deep actionable product improvements from raw text blocks. ",
    tech: ["React", "Go", "MongoDB", "Tailwind"],
    status: "DEPLOYED",
    repoUrl: "https://github.com/Glitchtrap991/AI-agent-for-customer-feedback",
    liveUrl: "https://ai-agent-for-customer-feedback-ko7n9fk7pvz6pkcnaycw2r.streamlit.app"
  },
  {
    id: 6,
    title: "Real-Time Transit Operations Management portal",
    category: "./apps/automation",
    description: "An enterprise-grade, full-stack MERN (MongoDB, Express, React, Node.js) SaaS platform built for logistics and transport operations management. TransitOps streamlines fleet dispatching, driver compliance, maintenance tracking, and real-time financial ROI analytics with automated state-machine workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    status: "LIVE",
    repoUrl: "https://github.com/Glitchtrap991/TransitOps-Smart-Transport-Operations-Platform---Team-Guild",
    liveUrl: "#live-demo"
  }
];

export default function ProjectsPage() {
  return (
    <div className="w-full max-w-6xl py-8 font-mono">
      
      {/* Directory Header */}
      <div className="mb-10 border-b border-emerald-500/20 pb-6">
        <p className="text-xs text-emerald-400 mb-1">&gt; cd /root/portfolio/projects &amp;&amp; ls -la</p>
        <h1 className="text-3xl font-black text-white tracking-tight">
          System Repositories <span className="text-emerald-500 font-normal text-lg">({projectsData.length})</span>
        </h1>
        <p className="text-slate-400 text-sm mt-2">
          Executing inspection on all deployed full-stack environments and machine learning models.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-auto">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            category={project.category}
            description={project.description}
            tech={project.tech}
            status={project.status}
            repoUrl={project.repoUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>

      {/* Terminal Footer Prompt */}
      <div className="mt-12 text-center text-xs text-slate-500">
        &gt; EOF // ALL_REPOSITORIES_LOADED
      </div>

    </div>
  );
}