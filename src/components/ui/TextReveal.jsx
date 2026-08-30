import React from 'react';
import { motion } from 'framer-motion';

export default function TextReveal({ 
  text, 
  className = "", 
  justifyContent = "center",
  delay = 0,
  as: Component = "div"
}) {
  const words = text.match(/[\p{L}\p{N}]+[^\s\p{L}\p{N}]?|[^\s]/gu) || [];

  // Variants for the container to orchestrate the animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay },
    },
  };

  // Variants for each word to create a smoother smoke effect
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  const MotionComponent = motion[Component] || motion.div;

  return (
    <MotionComponent
      style={{ display: "flex", flexWrap: "wrap", justifyContent }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{ marginRight: "0.25em" }} // Standardize spacing relative to font-size
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
