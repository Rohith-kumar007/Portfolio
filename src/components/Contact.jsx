import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-200 dark:border-slate-800 transition-colors duration-500/50 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white transition-colors duration-500 mb-4">
            Get In <span className="text-accent-cyan">Touch</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 transition-colors duration-500">
            Have a question or want to work together? Feel free to reach out. I'm currently looking for new opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-slate-100 dark:bg-slate-900 transition-colors duration-500 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors duration-500 text-accent-cyan">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Email</p>
                <a href="mailto:rohithkumarp07@gmail.com" className="text-slate-600 dark:text-slate-300 transition-colors duration-500 hover:text-slate-900 dark:text-white transition-colors duration-500">
                  rohithkumarp07@gmail.com
                </a>
              </div>
            </div>
            
            <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-slate-100 dark:bg-slate-900 transition-colors duration-500 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors duration-500 text-accent-purple">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Phone</p>
                <a href="tel:+919842070767" className="text-slate-600 dark:text-slate-300 transition-colors duration-500 hover:text-slate-900 dark:text-white transition-colors duration-500">
                  +91 9842070767
                </a>
              </div>
            </div>
            
            <div className="glass p-6 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-slate-100 dark:bg-slate-900 transition-colors duration-500 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors duration-500 text-blue-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Location</p>
                <p className="text-slate-600 dark:text-slate-300 transition-colors duration-500">
                  Coimbatore - 641008, India
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form action="mailto:rohithkumarp07@gmail.com" method="POST" encType="text/plain" className="glass p-8 rounded-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors duration-500">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="Name"
                    className="w-full bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-colors duration-500 rounded-xl px-4 py-3 text-slate-600 dark:text-slate-300 transition-colors duration-500 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors duration-500">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="Email"
                    className="w-full bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-colors duration-500 rounded-xl px-4 py-3 text-slate-600 dark:text-slate-300 transition-colors duration-500 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors duration-500">Message</label>
                <textarea 
                  id="message" 
                  name="Message"
                  rows="4" 
                  className="w-full bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-colors duration-500 rounded-xl px-4 py-3 text-slate-600 dark:text-slate-300 transition-colors duration-500 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-cyan hover:opacity-90 text-slate-900 dark:text-white transition-colors duration-500 rounded-xl font-medium transition-opacity shadow-lg"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
