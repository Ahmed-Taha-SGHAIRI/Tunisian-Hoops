'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface ScoreDisplayProps {
  score: number;
  className?: string;
}

export function ScoreDisplay({ score, className }: ScoreDisplayProps) {
  const [displayScore, setDisplayScore] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      const start = 0;
      const end = score;
      if (start === end) return;

      const duration = 1000;
      let startTimestamp: number | null = null;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        setDisplayScore(Math.floor(ease * (end - start) + start));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setDisplayScore(end);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [score, isInView]);

  return (
    <span 
      ref={ref} 
      className={cn("font-heading font-bold tabular-nums", className)}
    >
      {displayScore}
    </span>
  );
}
