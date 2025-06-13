import React, { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Music,
  Disc,
  Headphones,
  Radio,
  Mic,
  Speaker,
  Music2,
  Music4,
} from 'lucide-react';

interface ParticleSystemProps {
  particleCount?: number;
  className?: string;
  isDarkRealm: boolean;
  customColors: string[];
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({
  particleCount = 15, // Reduced for better performance
  className = '',
  isDarkRealm,
  customColors,
}) => {
  const getRandomIcon = useCallback((index: number) => {
    const icons = [Music, Disc, Headphones, Radio, Mic, Speaker, Music2, Music4];
    return icons[index % icons.length];
  }, []);

  // Memoize particle positions to prevent constant recalculation
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, index) => {
      const IconComponent = getRandomIcon(index);
      const size = 12 + (index % 16); // Slightly larger for better visibility
      
      // Fixed positions that don't change
      const left = (index * 7 + 10) % 90 + 5; // Spread across screen with margin
      const top = (index * 11 + 15) % 80 + 10; // Vertical distribution with margin
      
      const duration = 8 + (index % 6) * 2; // Slower, more elegant movement
      const delay = index * 0.3; // Staggered start
      
      const particleColor = customColors[index % customColors.length];
      
      const shadowEffect = isDarkRealm
        ? `drop-shadow(0px 0px 4px ${particleColor}) drop-shadow(0px 0px 8px ${particleColor}40)`
        : `drop-shadow(0px 0px 3px ${particleColor}) drop-shadow(0px 0px 6px ${particleColor}60)`;

      return {
        id: index,
        IconComponent,
        size,
        left,
        top,
        duration,
        delay,
        particleColor,
        shadowEffect,
      };
    });
  }, [particleCount, customColors, isDarkRealm, getRandomIcon]);

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute opacity-8"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            color: particle.particleColor,
            filter: particle.shadowEffect,
          }}
          animate={{
            // Subtle floating motion - stays in same general area
            y: [0, -15, 0],
            x: [0, Math.sin(particle.id) * 8, 0], // Gentle side-to-side
            rotate: [0, 180, 360],
            opacity: [0.06, 0.12, 0.06],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
            times: [0, 0.5, 1],
          }}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
        >
          <particle.IconComponent size={particle.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default React.memo(ParticleSystem);