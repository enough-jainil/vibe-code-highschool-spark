
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  imageUrl?: string;
  onClick: (id: number) => void;
}

const difficultyColors = {
  beginner: "bg-vibeTeal text-white",
  intermediate: "bg-vibeBlue text-white",
  advanced: "bg-vibePurple text-white"
};

const difficultyLabels = {
  beginner: "Beginner",
  intermediate: "Intermediate", 
  advanced: "Advanced"
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  difficulty,
  imageUrl,
  onClick
}) => {
  return (
    <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] border-2 hover:border-vibePurple/50">
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold text-foreground">{title}</CardTitle>
          <span className={cn(
            "px-2 py-1 text-xs rounded-full font-medium",
            difficultyColors[difficulty]
          )}>
            {difficultyLabels[difficulty]}
          </span>
        </div>
        <CardDescription className="text-sm text-muted-foreground mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {imageUrl && (
          <div className="w-full h-40 bg-muted overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {!imageUrl && (
          <div className="w-full h-40 bg-gradient-to-br from-vibePurple/10 to-vibeBlue/10 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Project {id}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 flex justify-end">
        <Button 
          onClick={() => onClick(id)}
          className="bg-gradient-to-r from-vibePurple to-vibeBlue text-white font-medium"
        >
          Select Project
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
