'use client';

import { motion, type HTMLMotionProps, type Variants } from 'motion/react';
import { fadeUp, staggerContainer, hoverLift } from '@/lib/motion';

export function FadeUp(props: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      {...props}
    />
  );
}

export function StaggerContainer(props: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      {...props}
    />
  );
}

export function HoverCard({ children, className, ...props }: HTMLMotionProps<"div">) {
  const hoverVariants: Variants = hoverLift;
  return (
    <motion.div
      variants={hoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
