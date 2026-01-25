
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Abrar Hameem</h2>
          <p className="text-slate-500 text-sm">Building the future of AI, one model at a time.</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-sm font-semibold text-slate-900">{PERSONAL_INFO.location}</p>
          <p className="text-sm text-slate-500">{PERSONAL_INFO.email}</p>
          <div className="flex gap-4 mt-2">
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-slate-900 transition-colors"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href={PERSONAL_INFO.codeforces} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-blue-500 transition-colors"
              aria-label="Codeforces"
            >
              <i className="fas fa-terminal"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-slate-50 text-center">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Abrar Hameem. All rights reserved. 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
