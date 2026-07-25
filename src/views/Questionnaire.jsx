import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUESTIONS } from '../data/questions';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';

export default function Questionnaire({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQ = QUESTIONS[currentIndex];
  const currentAnswers = answers[currentQ.id] || [];

  const handleSelectOption = (optionId) => {
    if (currentQ.type === 'image_grid') {
      const exists = currentAnswers.includes(optionId);
      if (currentQ.maxSelect === 1) {
        setAnswers(prev => ({ ...prev, [currentQ.id]: [optionId] }));
      } else {
        if (exists) {
          setAnswers(prev => ({
            ...prev,
            [currentQ.id]: currentAnswers.filter(id => id !== optionId)
          }));
        } else {
          if (currentQ.maxSelect && currentAnswers.length >= currentQ.maxSelect) return;
          setAnswers(prev => ({
            ...prev,
            [currentQ.id]: [...currentAnswers, optionId]
          }));
        }
      }
    }
  };

  const handleTextChange = (text) => {
    setAnswers(prev => ({ ...prev, [currentQ.id]: text }));
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await onComplete(answers);
    setIsSubmitting(false);
  };

  const isArrayValid = Array.isArray(currentAnswers) && currentAnswers.length > 0;
  const isTextValid = typeof currentAnswers === 'string' && currentAnswers.trim().length > 0;
  const isValid = isArrayValid || isTextValid;

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col min-h-[calc(100vh-100px)] justify-between">
      <div>
        <ProgressBar current={currentIndex + 1} total={QUESTIONS.length} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-4"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-copper font-medium block mb-2">
              {currentQ.section}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-snug mb-2">
              {currentQ.title}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/60 font-light mb-8">
              {currentQ.subtitle}
            </p>

            {/* IMAGE GRID SELECTOR */}
            {currentQ.type === 'image_grid' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {currentQ.options.map(option => (
                  <QuestionCard
                    key={option.id}
                    type="image_grid"
                    option={option}
                    isSelected={currentAnswers.includes(option.id)}
                    onSelect={() => handleSelectOption(option.id)}
                  />
                ))}
              </div>
            )}

            {/* OPEN TEXT AREA */}
            {currentQ.type === 'text_long' && (
              <div className="mb-6">
                <textarea
                  rows={5}
                  placeholder="Type your thoughts here..."
                  value={typeof currentAnswers === 'string' ? currentAnswers : ''}
                  onChange={(e) => handleTextChange(e.target.value)}
                  className="w-full p-5 bg-white border border-ivory-border text-charcoal text-sm rounded-sm focus:outline-none focus:border-copper resize-none shadow-sm"
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="pt-8 pb-4 flex justify-between items-center border-t border-ivory-border/60 mt-8">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0 || isSubmitting}
          className={`text-xs uppercase tracking-widest font-medium ${
            currentIndex === 0 ? 'text-charcoal/20 cursor-not-allowed' : 'text-charcoal/60 hover:text-charcoal'
          }`}
        >
          ← Back
        </button>

        <button
          onClick={handleNext}
          disabled={!isValid || isSubmitting}
          className={`px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all ${
            isValid && !isSubmitting
              ? 'bg-charcoal text-ivory hover:bg-copper cursor-pointer shadow-md'
              : 'bg-ivory-border text-charcoal/30 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? 'Recording...' : currentIndex === QUESTIONS.length - 1 ? 'Complete Study' : 'Continue →'}
        </button>
      </div>
    </div>
  );
}
