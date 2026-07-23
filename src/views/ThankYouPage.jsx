import React from 'react';
import { motion } from 'framer-motion';

export default function ThankYouPage({ onReset }) {
  return (
    <div className="max-w-xl mx-auto px-6 py-16 text-center flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 rounded-full border border-copper text-copper flex items-center justify-center mb-6 text-2xl"
      >
        ✓
      </motion.div>

      <motion.h2 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="font-serif text-3xl sm:text-4xl text-charcoal mb-3"
      >
        Thank You!
      </motion.h2>

      <motion.p 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xs sm:text-sm text-charcoal/60 font-light leading-relaxed mb-8 max-w-md"
      >
        Your response has been recorded. You have just contributed to shaping better beverage experiences in India.
      </motion.p>

      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        onClick={onReset}
        className="px-6 py-3 bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-sm"
      >
        Submit Another Response
      </motion.button>
    </div>
  );
}
