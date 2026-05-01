import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1800; // Total duration in ms
    const intervalTime = 30; // Update every 30ms
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="w-full max-w-md px-8 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8 text-accent-cyan"
        >
          <Terminal size={32} />
          <h1 className="text-2xl font-display font-bold tracking-widest uppercase">Initializing</h1>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-4 relative transition-colors duration-500">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-purple to-accent-cyan"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Status Text & Percentage */}
        <div className="w-full flex justify-between items-center text-sm font-mono text-slate-500 dark:text-slate-400 transition-colors duration-500">
          <span className="animate-pulse">Loading modules...</span>
          <span className="text-accent-cyan font-bold">{Math.floor(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
