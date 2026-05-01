import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Database, BarChart3, TrendingUp, Server } from 'lucide-react';

const projects = [
  {
    title: "Employee-Payroll-System",
    subtitle: "Full-Stack ERP System",
    date: "March 2026",
    description: "A full-stack ERP-style Employee Attendance & Payroll System built with Spring Boot and MySQL, featuring role-based authentication, attendance tracking, leave management, and automated salary computation.",
    tech: ["Java", "Spring Boot", "MySQL", "Full-Stack"],
    icon: <Server className="text-blue-500" size={24} />,
    link: "https://github.com/Rohith-kumar007/Employee-Payroll-System"
  },
  {
    title: "AgriSense Pro",
    subtitle: "Crop Yield Prediction System",
    date: "03/2026 - 04/2026",
    description: "Built a machine learning model to predict crop yield using agricultural data. Developed a complete data pipeline for preprocessing and feature analysis.",
    tech: ["Python", "Scikit-learn", "Streamlit", "MySQL", "Plotly"],
    icon: <TrendingUp className="text-accent-cyan" size={24} />,
    link: "https://github.com/Rohith-kumar007/AgriSense-Pro"
  },
  {
    title: "Swiggy Data Analysis System",
    subtitle: "Interactive Data Dashboard",
    date: "03/2026 - 04/2026",
    description: "Performed comprehensive exploratory data analysis on restaurant data to identify patterns and trends. Built a Streamlit application for interactive data analysis and insights generation.",
    tech: ["Python", "Pandas", "Streamlit", "Power BI"],
    icon: <Database className="text-accent-purple" size={24} />,
    link: "https://github.com/Rohith-kumar007/Swiggy-Data-Driven-Insights"
  },
  {
    title: "Sales Performance Dashboard",
    subtitle: "Business Intelligence",
    date: "11/2025 - 12/2025",
    description: "Cleaned and transformed raw sales data using Power Query and Excel functions. Created an interactive dashboard to identify sales trends, top products, and regional performance insights.",
    tech: ["Microsoft Excel", "Power Query", "Pivot Tables"],
    icon: <BarChart3 className="text-blue-400" size={24} />,
    link: "https://github.com/Rohith-kumar007/sales-performance-dashboard-excel"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-200 dark:border-slate-800 transition-colors duration-500/50 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white transition-colors duration-500 mb-12">
          Featured <span className="text-accent-cyan">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 flex flex-col h-full group"
            >
              <div className="mb-4 p-3 bg-slate-800/50 rounded-xl w-fit group-hover:bg-slate-800 transition-colors">
                {project.icon}
              </div>
              <div className="mb-2">
                <span className="text-xs font-medium text-slate-500 mb-1 block">{project.date}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-500 group-hover:text-accent-cyan transition-colors">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {project.title}
                    <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h3>
                <p className="text-sm font-medium text-accent-purple mb-3">{project.subtitle}</p>
              </div>
              <p className="text-slate-500 dark:text-slate-400 transition-colors duration-500 text-sm mb-6 flex-grow">
                {project.description}
              </p>>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-900 transition-colors duration-500 border border-slate-200 dark:border-slate-800 transition-colors duration-500 rounded-md text-slate-600 dark:text-slate-600 dark:text-slate-300 transition-colors duration-500">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
