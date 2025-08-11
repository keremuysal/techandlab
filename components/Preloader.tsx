import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
    },
  },
};


const letterContainerVariants: Variants = {
  hidden: { opacity: 1 }, 
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, 
    },
  },
};


const letterVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

const Preloader: React.FC = () => {
  const companyName = "Tech&Lab";
  const shortcompanyName = "T&L";

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#0A0A0A]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key="preloader"
    >
      <motion.h1
        className="text-2xl md:text-4xl font-bold tracking-wider text-gray-800 dark:text-gray-200 overflow-hidden"
        variants={letterContainerVariants} 
        aria-label={companyName}
      >
        {companyName.split("").map((char, index) => (
          <motion.span
            key={`company-${char}-${index}`} 
            variants={letterVariants}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char} 
          </motion.span>
        ))}
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl font-bold tracking-wider text-gray-500 dark:text-gray-400 mt-2 overflow-hidden"
        variants={letterContainerVariants}
        aria-label={shortcompanyName}
      >
        {shortcompanyName.split("").map((char, index) => (
          <motion.span
            key={`short-${char}-${index}`}
            variants={letterVariants}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>
    </motion.div>
  );
};

export default Preloader;