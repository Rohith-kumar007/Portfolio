import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-12 pt-20">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6"
      >
        <div className="inline-block px-4 py-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-sm font-medium mb-2">
          Software Developer | Data Analyst
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-slate-900 dark:text-white transition-colors duration-500">
          Hi, I'm <br/>
          <span className="text-gradient">Rohith Kumar P</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 transition-colors duration-500 max-w-xl">
          Building scalable applications and data-driven solutions.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="#projects" 
            className="flex items-center gap-2 px-6 py-3 bg-accent-purple hover:bg-purple-600 text-white rounded-lg font-medium shadow-lg shadow-purple-500/25 transition-all duration-300"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a 
            href={`/Rohith_Kumar_P_DA_Resume2.pdf?t=${new Date().getTime()}`}
            download="Rohith_Kumar_P_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 border border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 rounded-lg font-medium transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
          >
            Download Resume <Download size={18} />
          </a>
          <a 
            href="#contact" 
            className="flex items-center gap-2 px-6 py-3 glass hover:bg-slate-800 hover:text-white text-slate-800 dark:text-white rounded-lg font-medium transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
        
        <div className="flex gap-4 pt-4">
          <a href="https://github.com/Rohith-kumar007" target="_blank" className="p-2 text-slate-500 dark:text-slate-400 transition-colors duration-500 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/rohithkumar-p" target="_blank" className="p-2 text-slate-500 dark:text-slate-400 transition-colors duration-500 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:rohithkumarp07@gmail.com" className="p-2 text-slate-500 dark:text-slate-400 transition-colors duration-500 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-purple to-accent-cyan blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full border-2 border-slate-200 dark:border-slate-800 transition-colors duration-500 overflow-hidden glass p-2">
            <img 
              src="/profile.png" 
              alt="Rohith Kumar P" 
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
