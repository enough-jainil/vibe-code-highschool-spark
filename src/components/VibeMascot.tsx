
import React from 'react';
import { cn } from '@/lib/utils';

interface VibeMascotProps {
  className?: string;
  message?: string;
  mood?: 'happy' | 'excited' | 'thinking' | 'waiting';
  animate?: boolean;
}

const VibeMascot: React.FC<VibeMascotProps> = ({ 
  className, 
  message, 
  mood = 'happy',
  animate = true 
}) => {
  // Color scheme based on mood
  const colors = {
    happy: 'text-vibePurple',
    excited: 'text-vibeYellow',
    thinking: 'text-vibeBlue',
    waiting: 'text-vibeTeal'
  };

  // Animations based on mood
  const animations = {
    happy: 'animate-bounce-slight',
    excited: 'animate-wiggle',
    thinking: 'animate-float',
    waiting: ''
  };

  return (
    <div className={cn('flex items-end gap-3', className)}>
      <div className={cn(
        'relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-vibePurple to-vibePink',
        animate ? animations[mood] : ''
      )}>
        {/* Mascot face */}
        <div className="relative">
          {/* Eyes */}
          <div className="flex gap-2">
            <div className="w-3 h-4 bg-white rounded-full"></div>
            <div className="w-3 h-4 bg-white rounded-full"></div>
          </div>
          
          {/* Mouth - different based on mood */}
          {mood === 'happy' && (
            <div className="w-6 h-2 bg-white rounded-full mt-2 mx-auto"></div>
          )}
          {mood === 'excited' && (
            <div className="w-4 h-4 bg-white rounded-full mt-2 mx-auto"></div>
          )}
          {mood === 'thinking' && (
            <div className="w-2 h-2 bg-white rounded-full mt-2 ml-5"></div>
          )}
          {mood === 'waiting' && (
            <div className="w-4 h-1 bg-white rounded-full mt-2 mx-auto"></div>
          )}
        </div>

        {/* Ears/Antennas */}
        <div className="absolute -top-4 left-3 w-2 h-5 bg-gradient-to-t from-vibePink to-vibeYellow rounded-full"></div>
        <div className="absolute -top-5 right-3 w-2 h-6 bg-gradient-to-t from-vibePink to-vibeYellow rounded-full"></div>
      </div>
      
      {/* Speech bubble */}
      {message && (
        <div className="relative bg-white p-3 rounded-xl shadow-md max-w-xs">
          <div className="absolute -left-2 bottom-4 w-4 h-4 bg-white transform rotate-45"></div>
          <p className={cn("text-sm font-medium", colors[mood])}>{message}</p>
        </div>
      )}
    </div>
  );
};

export default VibeMascot;
