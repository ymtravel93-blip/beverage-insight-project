import React from 'react';
import { motion } from 'framer-motion';

export default function LandingPage({ onStart }) {
  return (
    <div className="w-full bg-[#121212] text-[#EFECE6] font-sans min-h-screen flex flex-col justify-between">
      {/* --- NAVIGATION BAR --- */}
      <header className="w-full border-b border-[#2A2825] px-6 md:px-12 py-5 flex items-center justify-between bg-[#121212]/90 backdrop-blur-md sticky top-0 z-50">
        {/* Brand Logo & Name */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full border border-[#B38B59]/40 flex items-center justify-center">
            <svg className="w-5 h-5 text-[#B38B59]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#EFECE6]">THE BEVERAGE</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#B38B59]">INSIGHT PROJECT</span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-medium text-[#A09D98]">
          <a href="#about" className="hover:text-[#EFECE6] transition-colors">ABOUT</a>
          <a href="#study" className="hover:text-[#EFECE6] transition-colors">THE STUDY</a>
          <a href="#impact" className="hover:text-[#EFECE6] transition-colors">YOUR IMPACT</a>
          <a href="#faq" className="hover:text-[#EFECE6] transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-[#EFECE6] transition-colors">CONTACT</a>
        </nav>

        {/* Top Right Outline CTA */}
        <button
          onClick={onStart}
          className="px-5 py-2.5 border border-[#B38B59] text-[#B38B59] hover:bg-[#B38B59] hover:text-[#121212] text-[10px] uppercase tracking-[0.2em] font-medium transition-all"
        >
          BEGIN THE STUDY
        </button>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[78vh] flex items-center px-6 md:px-16 py-12 overflow-hidden">
        {/* Background Mood Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
            alt="Craft Cocktail Concept" 
            className="w-full h-full object-cover object-center opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
        </div>

        {/* Hero Content Block */}
        <div className="relative z-10 max-w-2xl text-left">
          {/* Eyebrow Accent Line */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#B38B59]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#B38B59] font-medium">
              AN INDEPENDENT CONSUMER RESEARCH INITIATIVE
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-normal leading-[1.08] tracking-tight text-[#EFECE6] mb-6"
          >
            The Beverage <br />
            <span className="italic font-light text-[#EFECE6]">Insight Project</span>
          </motion.h1>

          {/* Gold Subtitle */}
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-xl md:text-2xl font-light text-[#B38B59] mb-4"
          >
            Understanding Consumer Preferences. <br />
            Inspiring Better Products.
          </motion.h3>

          {/* Description Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs md:text-sm text-[#A09D98] font-light leading-relaxed mb-8 max-w-lg"
          >
            Help shape the future of beverages. Share your preferences in our short study and contribute to building better experiences for everyone.
          </motion.p>

          {/* Hero Button + Time Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-6"
          >
            <button
              onClick={onStart}
              className="px-8 py-4 bg-[#B38B59] hover:bg-[#9B7547] text-[#121212] text-[11px] uppercase tracking-[0.2em] font-semibold transition-all shadow-lg flex items-center space-x-3"
            >
              <span>BEGIN THE STUDY</span>
              <span>→</span>
            </button>

            <div className="flex items-center space-x-2 text-[#A09D98]">
              <svg className="w-4 h-4 text-[#B38B59]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div className="text-[10px] uppercase tracking-[0.15em] font-medium leading-tight">
                <span>4-5 MINUTES</span> <br />
                <span className="text-[#A09D98]/60">TO COMPLETE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- BOTTOM HIGHLIGHT BAR --- */}
      <footer className="w-full bg-[#EFECE6] text-[#121212] py-8 px-6 md:px-16 border-t border-[#2A2825]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Feature 1 */}
          <div className="flex items-center space-x-4 border-b sm:border-b-0 sm:border-r border-[#D9D5CC] pb-6 sm:pb-0 pr-4">
            <div className="w-12 h-12 rounded-full border border-[#D9D5CC] flex items-center justify-center shrink-0 bg-[#EFECE6]">
              <svg className="w-5 h-5 text-[#121212]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-1">100% ANONYMOUS</h4>
              <p className="text-[11px] text-[#55524D] font-light leading-tight">Your responses are confidential and secure.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center space-x-4 border-b sm:border-b-0 md:border-r border-[#D9D5CC] pb-6 sm:pb-0 pr-4">
            <div className="w-12 h-12 rounded-full border border-[#D9D5CC] flex items-center justify-center shrink-0 bg-[#EFECE6]">
              <svg className="w-5 h-5 text-[#121212]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-1">INDUSTRY IMPACT</h4>
              <p className="text-[11px] text-[#55524D] font-light leading-tight">Your insights help shape better products.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center space-x-4 border-b sm:border-b-0 sm:border-r border-[#D9D5CC] pb-6 sm:pb-0 pr-4">
            <div className="w-12 h-12 rounded-full border border-[#D9D5CC] flex items-center justify-center shrink-0 bg-[#EFECE6]">
              <svg className="w-5 h-5 text-[#121212]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-1">FOR EVERY CONSUMER</h4>
              <p className="text-[11px] text-[#55524D] font-light leading-tight">Whether casual or connoisseur, your voice matters.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center space-x-4 pr-4">
            <div className="w-12 h-12 rounded-full border border-[#D9D5CC] flex items-center justify-center shrink-0 bg-[#EFECE6]">
              <svg className="w-5 h-5 text-[#121212]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-1">THANK YOU</h4>
              <p className="text-[11px] text-[#55524D] font-light leading-tight">As a token of gratitude, you may be invited to future exclusive studies.</p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
