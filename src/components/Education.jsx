import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-slate-200 dark:border-slate-200 dark:border-slate-800 transition-colors duration-500/50 transition-colors duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white transition-colors duration-500 mb-10 flex items-center gap-3">
            <GraduationCap className="text-accent-cyan" size={32} />
            Education
          </h2>
          
          <div className="space-y-6">
            <div className="glass p-6 rounded-2xl border-l-4 border-l-accent-cyan">
              <div className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-500 mb-1">09/2023 - Present</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-500">B.E. Computer Science & Engineering (AI & ML)</h3>
              <p className="text-accent-purple font-medium text-sm mt-1">Rathinam Technical Campus, Coimbatore</p>
              <div className="mt-3 inline-block px-3 py-1 bg-slate-100 dark:bg-slate-900 transition-colors duration-500 border border-slate-200 dark:border-slate-800 transition-colors duration-500 rounded-md text-sm font-medium text-slate-600 dark:text-slate-600 dark:text-slate-300 transition-colors duration-500">
                CGPA: 8.14
              </div>
            </div>
            
          </div>
        </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white transition-colors duration-500 mb-10 flex items-center gap-3">
              <Award className="text-accent-purple" size={32} />
              Certifications
            </h2>
            
            <ul className="space-y-4">
              {[
                "Associate Data Analyst – DataCamp",
                "AWS Academy Graduate – Machine Learning Foundations AWS",
                "AWS Academy Graduate – Machine Learning for NLP",
                "Data Mining – NPTEL"
              ].map((cert, idx) => (
                <li key={idx} className="glass px-6 py-4 rounded-xl flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent-purple"></div>
                  <span className="text-slate-600 dark:text-slate-600 dark:text-slate-300 transition-colors duration-500 font-medium">{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white transition-colors duration-500 mb-10 flex items-center gap-3">
              <Trophy className="text-yellow-500" size={32} />
              Achievements
            </h2>
            
            <ul className="space-y-4">
              <li className="glass px-6 py-4 rounded-xl flex items-start gap-4">
                <span className="text-accent-cyan mt-1">🏆</span>
                <span className="text-slate-600 dark:text-slate-600 dark:text-slate-300 transition-colors duration-500">Runner-Up (2nd Place) in Intra-College Gen-Z Hackathon</span>
              </li>
              <li className="glass px-6 py-4 rounded-xl flex items-start gap-4">
                <span className="text-accent-cyan mt-1">🚀</span>
                <span className="text-slate-600 dark:text-slate-600 dark:text-slate-300 transition-colors duration-500">Participated in Smart India Hackathon (SIH) 2025 and developed "Meghprajanya" for rooftop rainwater harvesting analysis</span>
              </li>
              <li className="glass px-6 py-4 rounded-xl flex items-start gap-4">
                <span className="text-accent-cyan mt-1">⭐</span>
                <span className="text-slate-600 dark:text-slate-600 dark:text-slate-300 transition-colors duration-500">Completed NPTEL Data Mining certification with strong analytical understanding</span>
              </li>
            </ul>
          </motion.div>
      </div>
    </section>
  );
}
