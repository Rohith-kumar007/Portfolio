import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-200 dark:border-slate-800 transition-colors duration-500/50 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white transition-colors duration-500 mb-8">
          About <span className="text-accent-cyan">Me</span>
        </h2>
        
        <div className="glass p-8 rounded-2xl md:p-12 relative overflow-hidden group">
          {/* Subtle gradient accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity group-hover:bg-accent-purple/10"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-6 text-lg text-slate-600 dark:text-slate-300 transition-colors duration-500 leading-relaxed">
              <p>
                I am a passionate <span className="text-slate-900 dark:text-white transition-colors duration-500 font-medium">Software Developer & Data Analyst</span> with strong foundations in programming, data structures, and analytical problem-solving. 
                I actively seek opportunities to leverage my skills to build efficient, scalable applications and uncover data-driven insights.
              </p>
              <p>
                My background spans across full-stack development to working with machine learning workflows and data analytics. I enjoy building robust systems and 
                finding elegant solutions to complex challenges. 
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900 transition-colors duration-500 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors duration-500 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan"></div>
                  <span className="text-slate-600 dark:text-slate-300 transition-colors duration-500">Coimbatore, India</span>
                </div>
                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900 transition-colors duration-500 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors duration-500 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent-purple"></div>
                  <span className="text-slate-600 dark:text-slate-300 transition-colors duration-500">Fresher / Graduate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
