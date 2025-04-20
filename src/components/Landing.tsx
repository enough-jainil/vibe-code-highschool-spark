
import React, { useState, useEffect } from 'react';
import VibeMascot from './VibeMascot';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface LandingProps {
  onGetStarted: () => void;
}

const Landing: React.FC<LandingProps> = ({ onGetStarted }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const messages = [
    "Wanna learn vibe coding?",
    "Use AI to write code without coding knowledge!",
    "It's perfect for your research projects!",
    "Let's get started!"
  ];
  
  useEffect(() => {
    // Show initial message after a short delay
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (showMessage && currentMessageIndex < messages.length - 1) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex(currentMessageIndex + 1);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [showMessage, currentMessageIndex, messages.length]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-vibePurple/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-vibeBlue/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-vibeTeal/10 rounded-full blur-xl"></div>
      
      <div className="max-w-3xl mx-auto text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-vibePurple to-vibeBlue">
            Vibe Coding
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Create research-quality visualizations & analysis without writing a single line of code!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex justify-center"
        >
          <VibeMascot 
            message={messages[currentMessageIndex]} 
            mood={currentMessageIndex === 3 ? "excited" : "happy"}
            className="transform scale-150"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            onClick={onGetStarted}
            className="bg-gradient-to-r from-vibePurple to-vibeBlue text-white text-lg px-8 py-6 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </Button>
          
          <p className="mt-6 text-sm text-gray-500">
            Perfect for high school research projects - no coding experience required!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
