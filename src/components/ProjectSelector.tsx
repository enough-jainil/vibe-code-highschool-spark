
import React from 'react';
import { motion } from 'framer-motion';
import VibeMascot from './VibeMascot';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  imageUrl?: string;
  datasetUrl: string;
}

interface ProjectSelectorProps {
  onSelectProject: (projectId: number) => void;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sleep & Lifestyle Analysis",
    description: "Analyze correlations between sleep duration and lifestyle factors like physical activity and stress levels.",
    difficulty: "beginner",
    imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    datasetUrl: "https://www.kaggle.com/datasets/uom190346a/sleep-health-and-lifestyle-dataset"
  },
  {
    id: 2,
    title: "University Attendance Patterns",
    description: "Predict daily university attendance patterns using historical attendance data.",
    difficulty: "intermediate",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    datasetUrl: "https://www.kaggle.com/datasets/ahmedaliraja/attendance-sheet-data-set-for-university"
  },
  {
    id: 3,
    title: "Red Wine Quality Factors",
    description: "Investigate which chemical properties influence the quality rating of red wines.",
    difficulty: "advanced",
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    datasetUrl: "https://www.kaggle.com/datasets/uciml/red-wine-quality-cortez-et-al-2009"
  }
];

const ProjectSelector: React.FC<ProjectSelectorProps> = ({ onSelectProject }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50/50 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            Choose Your Research Project
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Select one of these example projects to learn how to create research-quality visualizations and analysis using AI coding.
          </motion.p>
        </div>
        
        <div className="mb-10 flex justify-center">
          <VibeMascot 
            message="To help with your research, I've prepared 3 sample projects. Pick one that interests you!" 
            mood="excited" 
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.description}
                difficulty={project.difficulty}
                imageUrl={project.imageUrl}
                onClick={onSelectProject}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>All datasets are freely available on Kaggle and perfect for educational purposes.</p>
          <p>No coding experience required - we'll guide you through every step!</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSelector;
