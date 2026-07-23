import React from 'react';
import { motion } from 'framer-motion';

export default function LandingPage({ onStart }) {
  return (
    <div className="w-full text-charcoal">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[85vh] bg-charcoal text-ivory flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Background Image with Dark Mood Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1600" 
            alt="Craft Beverage" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] uppercase tracking-[0.3em] text-copper mb-4 font-medium"
          >
            The Beverage Insight Project
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-tight tracking-tight mb-6"
          >
            Understanding Consumer Preferences. <br />
            <span className="italic font-light text-ivory/80">Inspiring Better Products.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-sm sm:text-base text-ivory/70 font-light leading-relaxed mb-10"
          >
            An independent research initiative exploring the evolving beverage landscape in India. Your insights help shape the future of craft spirits and beverages.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={onStart}
            className="px-8 py-4 bg-copper hover:bg-copper-hover text-white text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-lg flex items-center space-x-3"
          >
            <span>Begin the Study</span>
            <span>→</span>
          </motion.button>
        </div>
      </section>

      {/* SECTION 2: WHY YOUR INSIGHTS MATTER & HOW IT WORKS */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: Light Editorial Block */}
        <div className="bg-ivory p-10 sm:p-16 border-b md:border-b-0 md:border-r border-ivory-border flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-copper font-medium mb-3">About The Study</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mb-4">Why Your Insights Matter</h2>
          <p className="text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed mb-10">
            Consumer preferences are constantly evolving. Through this study, we aim to understand what you enjoy, what inspires you, and what you look forward to in the world of beverages.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-ivory-border/60 text-left">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-1">Independent</h4>
              <p className="text-[11px] text-charcoal/60 font-light">Unaffiliated. Focused on true consumer voice.</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-1">Impactful</h4>
              <p className="text-[11px] text-charcoal/60 font-light">Influences better beverage creation.</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-1">Confidential</h4>
              <p className="text-[11px] text-charcoal/60 font-light">100% anonymous & secure data handling.</p>
            </div>
          </div>
        </div>

        {/* Right: Dark Moody Block */}
        <div className="bg-charcoal text-ivory p-10 sm:p-16 relative flex flex-col justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1000" 
            alt="Craft Ice & Barware" 
            className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-10 pointer-events-none"
          />
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-[0.25em] text-copper font-medium mb-3 block">How It Works</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory mb-8">Simple. Quick. Valuable.</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="w-8 h-8 rounded-full border border-copper/50 text-copper flex items-center justify-center text-xs font-medium shrink-0">1</span>
                <div>
                  <h4 className="text-sm font-medium text-ivory">Answer a few questions</h4>
                  <p className="text-xs text-ivory/60 font-light mt-0.5">Takes only 4–5 minutes of your time.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="w-8 h-8 rounded-full border border-copper/50 text-copper flex items-center justify-center text-xs font-medium shrink-0">2</span>
                <div>
                  <h4 className="text-sm font-medium text-ivory">Share your preferences</h4>
                  <p className="text-xs text-ivory/60 font-light mt-0.5">Your honest preferences make a real difference.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="w-8 h-8 rounded-full border border-copper/50 text-copper flex items-center justify-center text-xs font-medium shrink-0">3</span>
                <div>
                  <h4 className="text-sm font-medium text-ivory">Help shape the future</h4>
                  <p className="text-xs text-ivory/60 font-light mt-0.5">Be a key contributor to better beverage standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
