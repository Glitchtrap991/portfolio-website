import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import ProjectDetails from "./ProjectDetails";
import StackPage from "./StackPage";
import Certifications from "./Certifications";
import ContactDetails from "./ContactDetails";
import { Certificate } from 'node:crypto';
export default function App() {
  return (
    /* The core layout engine: min-h-screen + flex-col keeps the footer at the bottom */
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      
      <Navbar />

      {/* flex-grow forces this container to take up all empty space between nav and footer */}
      <main className="flex flex-grow items-center justify-center p-6 sm:p-12">
        <Routes>
          <Route path="/" element={
            <div className="flex flex-col items-center gap-8">
              <div className="text-center font-mono">
                <p className="text-s text-emerald-400 mb-7">&gt; SYSTEM_READY // INTERACTIVE_MODULES_LOADED</p>
                <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Select Your Profile Node
                </h1>
              </div>
              <HeroSection />
            </div>
          }
          />
          <Route path="/projects" element={<ProjectDetails />} />
          <Route path="/stack" element={<StackPage />} />
          <Route path="/contact" element={<ContactDetails />} />
          <Route path="/certs" element={<Certifications />}/>
          <Route path="*" element={
            <div className="text-center font-mono py-20 text-red-500 font-bold">
              &gt; ERROR: 404 // ROUTE_NOT_FOUND
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}