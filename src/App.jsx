import React, { useState } from 'react';
import LandingPage from './views/LandingPage';
import Questionnaire from './views/Questionnaire';
import ThankYouPage from './views/ThankYouPage';

// Active Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwX2BRbRnY8z4SENVRtK7drpZJNYO9wh0Cg_4gYxQaMMRagq5UyHasTBlNShfahV9VUWA/exec";

export default function App() {
  const [currentStep, setCurrentStep] = useState('landing'); // 'landing' | 'questionnaire' | 'thankyou'

  const handleStart = () => {
    setCurrentStep('questionnaire');
  };

  const handleComplete = async (surveyAnswers) => {
    // Attach ISO timestamp to payload
    const payload = {
      timestamp: new Date().toISOString(),
      ...surveyAnswers,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('Error submitting survey responses:', error);
    } finally {
      setCurrentStep('thankyou');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-[#121212] font-sans antialiased">
      {currentStep === 'landing' && (
        <LandingPage onStart={handleStart} />
      )}
      {currentStep === 'questionnaire' && (
        <Questionnaire onComplete={handleComplete} />
      )}
      {currentStep === 'thankyou' && (
        <ThankYouPage />
      )}
    </div>
  );
}
