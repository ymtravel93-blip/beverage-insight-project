import React from 'react';
import { motion } from 'framer-motion';

export default function LandingPage({ onStart }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-6 py-12 sm:py-20 flex flex-col items-center text-center"
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="inline-block mb-6 px-4 py-1.5 border border-copper/30 rounded-full text-[11px] tracking-[0.2em] uppercase text-copper font-medium"
      >
        2026 Consumer Intelligence Initiative
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-serif text-4xl sm:text-6xl md:text-7xl text-charcoal font-normal tracking-tight leading-[1.1] mb-6"
      >
        Understanding Consumer Preferences. <br className="hidden sm:inline" />
        <span className="italic font-light text-charcoal/80">Inspiring Better Products.</span>
      </motion.h1>

      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-2xl text-base sm:text-lg text-charcoal/70 font-light leading-relaxed mb-12"
      >
        The Beverage Insight Project is an independent research platform examining evolving palates, cultural shifts, and purchasing drivers across India’s alcobev landscape.
      </motion.p>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl mb-12 py-8 border-y border-ivory-border"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-charcoal/40 mb-1">Time</span>
          <span className="text-sm font-medium text-charcoal">4–5 Minutes</span>
        </div>
        <div className="flex flex-col items-center sm:border-x sm:border-ivory-border">
          <span className="text-xs uppercase tracking-widest text-charcoal/40 mb-1">Scope</span>
          <span className="text-sm font-medium text-charcoal">8 Key Questions</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-charcoal/40 mb-1">Privacy</span>
          <span className="text-sm font-medium text-charcoal">100% Anonymous</span>
        </div>
      </motion.div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        onClick={onStart}
        className="group relative inline-flex items-center justify-center px-10 py-4 bg-charcoal text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-copper transition-colors duration-300 shadow-md"
      >
        <span>Begin the Study</span>
        <svg 
          className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </motion.button>
    </motion.div>
  );
}
