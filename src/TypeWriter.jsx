// Instant Fade & Slide Reveal Animation - Data Science Theme
import React from 'react';
import './fade-reveal.css';

const FadeReveal = ({ text, delay = 0, className = '' }) => {
  return (
    <span 
      className={`fade-reveal ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
    </span>
  );
};

export default FadeReveal;