
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-full border border-blue-100">
          Available for Opportunities
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Hi, I'm <span className="text-blue-600">Abrar Hameem</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
          A passionate <span className="text-slate-900 font-semibold">AI Engineer</span> specializing in LLMs, 
          Computer Vision, and scalable Backend systems. Transforming complex data into intelligent solutions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all shadow-lg"
          >
            View Projects
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-2"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>

        <div className="flex gap-6 text-2xl text-slate-400">
          <a 
            href={PERSONAL_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-900 transition-colors"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="hover:text-slate-900 transition-colors"
            aria-label="Email"
          >
            <i className="far fa-envelope"></i>
          </a>
          <a 
            href={PERSONAL_INFO.codeforces} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-900 transition-colors"
            aria-label="Codeforces"
          >
            <i className="fas fa-terminal"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
