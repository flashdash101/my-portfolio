import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, y: [0, -20, 0] },
};

const BouncyText = ({ text }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="bouncy-text-container"
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={item} className="bouncy-char">
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default BouncyText;