import type { Variants, Easing } from 'motion/react';

// Common easings
export const easings: Record<string, Easing> = {
  // Cubic-bezier specified in the brief: cubic-bezier(0.22, 1, 0.36, 1)
  standard: [0.22, 1, 0.36, 1],
  smooth: [0.32, 0.72, 0, 1],
};

// Common durations
export const durations = {
  micro: 0.15,
  standard: 0.25,
  page: 0.4,
};

// Variants
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: durations.standard, 
      ease: easings.standard 
    } 
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const hoverLift = {
  rest: { y: 0, filter: "brightness(1)" },
  hover: { 
    y: -2, 
    filter: "brightness(1.1)",
    transition: { duration: durations.micro, ease: easings.standard }
  },
  tap: { 
    scale: 0.98,
    transition: { duration: durations.micro }
  }
};
