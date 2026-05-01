import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming & Frameworks",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "C", level: 80 },
      { name: "Spring Boot", level: 85 }
    ]
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 80 },
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 85 },
      { name: "Matplotlib & Seaborn", level: 75 }
    ]
  },
  {
    title: "Analytics & Data",
    skills: [
      { name: "SQL", level: 85 },
      { name: "Excel", level: 90 },
      { name: "Power BI", level: 70 }
    ]
  },
  {
    title: "Tools & Soft Skills",
    skills: [
      { name: "GitHub & VS Code", level: 90 },
      { name: "Streamlit", level: 80 },
      { name: "Analytical Thinking", level: 95 },
      { name: "Problem Solving", level: 90 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-200 dark:border-slate-800 transition-colors duration-500/50 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white transition-colors duration-500 mb-12">
          Technical <span className="text-accent-purple">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-medium text-slate-900 dark:text-white transition-colors duration-500 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 rounded-full bg-accent-cyan inline-block"></span>
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-600 dark:text-slate-300 transition-colors duration-500">{skill.name}</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1) }}
                        className="bg-gradient-to-r from-accent-purple to-accent-cyan h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
