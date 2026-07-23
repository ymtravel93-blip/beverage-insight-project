import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './views/LandingPage';
import Questionnaire from './views/Questionnaire';
import ThankYouPage from './views/ThankYouPage';

const GOOGLE_SCRIPT_URL = "https://docs.google.com/spreadsheets/d/1tkSVWhAWIRViPVGxVv3g3ueEwX-au7Cm_tU4aKDjk58/edit?usp=sharing";

export default function App() {
  const [step, setStep] = useState('landing');

  const handleStart = () => {
    setStep('study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setStep('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleComplete = async (answers) => {
    if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            ...answers
          })
        });
      } catch (error) {
        console.error("Submission error:", error);
      }
    }
    setStep('thankyou');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal">
      <Navbar onReset={handleReset} />
      <main className="flex-1 flex flex-col justify-center py-6">
        {step === 'landing' && <LandingPage onStart={handleStart} />}
        {step === 'study' && <Questionnaire onComplete={handleComplete} />}
        {step === 'thankyou' && <ThankYouPage onReset={handleReset} />}
      </main>
      <footer className="py-8 px-6 border-t border-ivory-border/60 text-center text-[10px] uppercase tracking-[0.2em] text-charcoal/40 font-light">
        © 2026 The Beverage Insight Project · All Rights Reserved
      </footer>
    </div>
  );
}
