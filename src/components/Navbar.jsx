import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg shadow-slate-200/50 dark:shadow-slate-900/20 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 sm:px-12 md:px-24 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold tracking-tight text-slate-900 dark:text-white transition-colors duration-500">
          Rohith<span className="text-accent-cyan">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href={`/Rohith_Kumar_P_DA_Resume2.pdf?t=${new Date().getTime()}`}
            download="Rohith_Kumar_P_Resume.pdf"
            className="text-sm font-medium text-accent-cyan hover:text-accent-purple transition-colors ml-4"
          >
            Resume
          </a>
          
          <button 
            onClick={toggleTheme}
            className="p-2 ml-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-accent-purple dark:hover:text-white transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-500"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href={`/Rohith_Kumar_P_DA_Resume2.pdf?t=${new Date().getTime()}`}
                download="Rohith_Kumar_P_Resume.pdf"
                className="text-accent-cyan hover:text-accent-purple transition-colors font-medium"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
