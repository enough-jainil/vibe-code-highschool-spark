
import React, { useState } from 'react';
import VibeMascot from './VibeMascot';
import { Button } from '@/components/ui/button';
import { ChevronRight, Code, Database, FileText, Terminal, Braces } from 'lucide-react';
import { motion } from 'framer-motion';

interface VibeExplainerProps {
  onContinue: () => void;
}

const VibeExplainer: React.FC<VibeExplainerProps> = ({ onContinue }) => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: "What is Vibe Coding?",
      description: "Vibe Coding is a term coined by AI researcher Andrej Karpathy. It means using AI to write code for you through natural language prompts - no coding knowledge needed!",
      icon: <Code className="w-8 h-8 text-vibePurple" />,
      mascotMessage: "Let me explain how you can code without knowing how to code!"
    },
    {
      title: "Perfect for Research Projects",
      description: "When working on research projects, you often need to create charts, analyze data, and generate visualizations - all things that traditionally required coding knowledge.",
      icon: <FileText className="w-8 h-8 text-vibeBlue" />,
      mascotMessage: "It'll make your research projects so much easier!"
    },
    {
      title: "How It Works",
      description: "You simply describe what you want in plain English. The AI understands your needs and generates the exact code required to create your charts, tables, and analysis.",
      icon: <Braces className="w-8 h-8 text-vibeTeal" />,
      mascotMessage: "Just tell the AI what you need, and it does the coding for you!"
    },
    {
      title: "Ready to Try It Out?",
      description: "We've prepared 3 example research projects for you to explore. Each one includes step-by-step guidance on what prompts to use to create professional-grade visualizations.",
      icon: <Terminal className="w-8 h-8 text-vibeYellow" />,
      mascotMessage: "Let's see which project interests you the most!"
    }
  ];
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onContinue();
    }
  };
  
  const currentStepData = steps[currentStep];
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-white to-indigo-50/50">
      <div className="w-full max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <VibeMascot 
            message={currentStepData.mascotMessage} 
            mood={currentStep === steps.length - 1 ? "excited" : "thinking"}
          />
          
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentStep ? 'bg-vibePurple' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-50 rounded-lg">
              {currentStepData.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{currentStepData.title}</h2>
          </div>
          
          <p className="text-gray-600 mb-6 text-lg">
            {currentStepData.description}
          </p>
          
          {currentStep === 2 && (
            <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="font-medium mb-2 text-gray-800">Example Prompt:</p>
              <p className="italic text-gray-600">"Create a scatter plot showing the relationship between sleep duration and physical activity level using the sleep health dataset."</p>
            </div>
          )}
          
          <div className="flex justify-end">
            <Button
              onClick={handleNext}
              className="flex items-center gap-2 bg-gradient-to-r from-vibePurple to-vibeBlue text-white"
            >
              {currentStep < steps.length - 1 ? 'Next' : 'Choose a Project'}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
        
        {currentStep === 0 && (
          <div className="text-center text-gray-500 text-sm">
            <p>"AI won't replace developers. Developers using AI will replace developers not using AI."</p>
            <p className="font-medium">- Inspired by a common saying in the AI community</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VibeExplainer;
