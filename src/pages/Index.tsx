
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Landing from '@/components/Landing';
import VibeExplainer from '@/components/VibeExplainer';
import ProjectSelector from '@/components/ProjectSelector';
import SleepProject from '@/components/projects/SleepProject';
import AttendanceProject from '@/components/projects/AttendanceProject';
import WineProject from '@/components/projects/WineProject';

// We need to add this dependency for the animations
<lov-add-dependency>framer-motion@latest</lov-add-dependency>

// App state types
type AppState = 'landing' | 'explainer' | 'selector' | 'project';
type ProjectType = null | 1 | 2 | 3;

const Index = () => {
  const [appState, setAppState] = useState<AppState>('landing');
  const [selectedProject, setSelectedProject] = useState<ProjectType>(null);
  
  const handleGetStarted = () => {
    setAppState('explainer');
  };
  
  const handleContinueToProjects = () => {
    setAppState('selector');
  };
  
  const handleSelectProject = (projectId: number) => {
    setSelectedProject(projectId as ProjectType);
    setAppState('project');
  };
  
  const handleBackToProjects = () => {
    setSelectedProject(null);
    setAppState('selector');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50/50">
      <AnimatePresence mode="wait">
        {appState === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Landing onGetStarted={handleGetStarted} />
          </motion.div>
        )}
        
        {appState === 'explainer' && (
          <motion.div
            key="explainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <VibeExplainer onContinue={handleContinueToProjects} />
          </motion.div>
        )}
        
        {appState === 'selector' && (
          <motion.div
            key="selector"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectSelector onSelectProject={handleSelectProject} />
          </motion.div>
        )}
        
        {appState === 'project' && selectedProject === 1 && (
          <motion.div
            key="sleep-project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SleepProject onBack={handleBackToProjects} />
          </motion.div>
        )}
        
        {appState === 'project' && selectedProject === 2 && (
          <motion.div
            key="attendance-project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AttendanceProject onBack={handleBackToProjects} />
          </motion.div>
        )}
        
        {appState === 'project' && selectedProject === 3 && (
          <motion.div
            key="wine-project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <WineProject onBack={handleBackToProjects} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
