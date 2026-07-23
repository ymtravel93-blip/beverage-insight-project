import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ThankYouPage({ onReset }) {
  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmittedEmail(true);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto px-6 py-16 text-center"
    >
      <div className="w-12 h-12 rounded-full bg-forest/10 text-forest flex items-center justify-center mx-auto mb-6">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>

      <span className="text-[11px] uppercase tracking-[0.25em] text-copper font-medium block mb-2">
        Submission Received
      </span>

      <h1 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal mb-4">
        Thank You for Your Perspective.
      </h1>

      <p className="text-sm sm:text-base text-charcoal/70 font-light leading-relaxed mb-10">
        Your answers have been securely recorded. The insights gathered from this study directly inform independent industry whitepapers on the evolution of premium spirits in India.
      </p>

      <div className="bg-white border border-ivory-border p-8 rounded-sm mb-12 text-left">
        <h3 className="font-serif text-lg text-charcoal mb-2">
          Join the Advisory Panel
        </h3>
        <p className="text-xs text-charcoal/60 leading-relaxed mb-6 font-light">
          We occasionally invite selected consumers to participate in blind tasting panels and confidential bottle design feedback sessions. Leave your email if you wish to participate.
        </p>

        {submittedEmail ? (
          <div className="text-xs uppercase tracking-wider text-forest font-medium bg-forest/5 p-4 rounded text-center border border-forest/20">
            ✓ Your email has been added to our private researcher network.
          </div>
        ) : (
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-ivory border border-ivory-border px-4 py-3 text-xs text-charcoal focus:outline-none focus:border-copper transition-colors"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-charcoal text-ivory text-xs uppercase tracking-widest font-medium hover:bg-copper transition-colors"
            >
              Request Invite
            </button>
          </form>
        )}
      </div>

      <button
        onClick={onReset}
        className="text-xs uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors underline underline-offset-4"
      >
        Return to Overview
      </button>
    </motion.div>
  );
}
