import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUESTIONS } from '../data/questions.js';
import QuestionCard from '../components/QuestionCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

export default function Questionnaire({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQ = QUESTIONS[currentIndex];
  const currentAnswers = answers[currentQ.id] || [];

  const handleSelectOption = (optionId) => {
    if (currentQ.type === 'single') {
      setAnswers(prev => ({ ...prev, [currentQ.id]: [optionId] }));
    } else {
      const exists = currentAnswers.includes(optionId);
      if (exists) {
        setAnswers(prev => ({
          ...prev,
          [currentQ.id]: currentAnswers.filter(id => id !== optionId)
        }));
      } else {
        if (currentQ.maxSelect && currentAnswers.length >= currentQ.maxSelect) {
          return;
        }
        setAnswers(prev => ({
          ...prev,
          [currentQ.id]: [...currentAnswers, optionId]
        }));
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await onComplete(answers);
    setIsSubmitting(false);
  };

  const isValid = currentAnswers.length > 0;

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col min-h-[calc(100vh-120px)] justify-between">
      <div>
        <ProgressBar current={currentIndex + 1} total={QUESTIONS.length} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-4"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-copper font-medium block mb-3">
              {currentQ.category}
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal leading-snug mb-3">
              {currentQ.title}
            </h2>

            <p className="text-xs sm:text-sm text-charcoal/60 font-light mb-8">
              {currentQ.subtitle}
            </p>

            <div className="space-y-3">
              {currentQ.options.map(option => (
                <QuestionCard
                  key={option.id}
                  option={option}
                  isSelected={currentAnswers.includes(option.id)}
                  onSelect={() => handleSelectOption(option.id)}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pt-10 pb-6 flex justify-between items-center border-t border-ivory-border/60 mt-8">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0 || isSubmitting}
          className={`text-xs uppercase tracking-widest font-medium transition-colors ${
            currentIndex === 0 
              ? 'text-charcoal/20 cursor-not-allowed' 
              : 'text-charcoal/60 hover:text-charcoal'
          }`}
        >
          ← Back
        </button>

        <button
          onClick={handleNext}
          disabled={!isValid || isSubmitting}
          className={`
            px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300
            ${isValid && !isSubmitting
              ? 'bg-charcoal text-ivory hover:bg-copper shadow-sm cursor-pointer'
              : 'bg-ivory-border text-charcoal/30 cursor-not-allowed'}
          `}
        >
          {isSubmitting ? (
            'Recording Insights...'
          ) : currentIndex === QUESTIONS.length - 1 ? (
            'Complete Study'
          ) : (
            'Continue →'
          )}
        </button>
      </div>
    </div>
  );
}
