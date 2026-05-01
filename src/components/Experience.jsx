import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Artificial Intelligence Intern",
    company: "amasQIS.ai",
    location: "Remote",
    date: "Aug 2025 - Mar 2026",
    description: [
      "Gained practical exposure to machine learning concepts, workflows, and working with datasets.",
      "Understood preprocessing, basic model-building steps, and collaborated remotely on AI-related solutions."
    ]
  },
  {
    role: "Web Development Intern",
    company: "Code Bind Technologies",
    location: "Coimbatore",
    date: "Internship",
    description: [
      "Worked on frontend development using HTML, CSS, developing responsive web pages and improving UI design practices.",
      "Gained hands-on experience in real-world workflows, including project implementation and debugging."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-200 dark:border-slate-800 transition-colors duration-500/50 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white transition-colors duration-500 mb-12">
          Professional <span className="text-accent-purple">Experience</span>
        </h2>
        
        <div className="relative border-l border-slate-200 dark:border-slate-800 transition-colors duration-500 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[21px] top-1 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 p-2 rounded-full border border-slate-200 dark:border-slate-800 transition-colors duration-500 text-accent-purple">
                <Briefcase size={20} />
              </div>
              
              <div className="glass p-6 md:p-8 rounded-2xl relative group hover:border-accent-purple/50 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-500">{exp.role}</h3>
                    <div className="text-accent-cyan font-medium mt-1">{exp.company} <span className="text-slate-500 font-normal">| {exp.location}</span></div>
                  </div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors duration-500 bg-slate-100 dark:bg-slate-900 transition-colors duration-500 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 transition-colors duration-500 w-fit">
                    {exp.date}
                  </div>
                </div>
                
                <ul className="space-y-3 mt-4">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="text-slate-600 dark:text-slate-600 dark:text-slate-300 transition-colors duration-500 text-sm flex gap-3">
                      <span className="text-accent-purple mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
