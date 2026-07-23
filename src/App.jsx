import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import LandingPage from './views/LandingPage.jsx';
import Questionnaire from './views/Questionnaire.jsx';
import ThankYouPage from './views/ThankYouPage.jsx';

const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"; 

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'questionnaire' | 'thankyou'

  const handleStart = () => {
    setCurrentView('questionnaire');
  };

  const handleComplete = async (answers) => {
    try {
      if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            ...answers
          }),
        });
      }
    } catch (err) {
      console.error("Error submitting response:", err);
    } finally {
      setCurrentView('thankyou');
    }
  };

  const handleReset = () => {
    setCurrentView('landing');
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        {currentView === 'landing' && (
          <LandingPage onStart={handleStart} />
        )}

        {currentView === 'questionnaire' && (
          <Questionnaire onComplete={handleComplete} />
        )}

        {currentView === 'thankyou' && (
          <ThankYouPage onReset={handleReset} />
        )}
      </main>
    </div>
  );
}
