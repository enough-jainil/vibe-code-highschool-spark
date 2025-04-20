
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VibeMascot from '../VibeMascot';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, ArrowRight, Download, FileText, Image, Table } from 'lucide-react';

interface SleepProjectProps {
  onBack: () => void;
}

const SleepProject: React.FC<SleepProjectProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('setup');

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50/50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <Button 
            variant="outline" 
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Button>
          
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Sleep & Lifestyle Analysis
          </h1>
          
          <div className="w-28"></div> {/* Spacer to balance the layout */}
        </div>
        
        <div className="mb-8 flex justify-center">
          <VibeMascot 
            message="Great choice! Let's explore how sleep duration relates to lifestyle factors."
            mood="excited"
          />
        </div>
        
        <Tabs defaultValue="setup" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="setup">Setup</TabsTrigger>
            <TabsTrigger value="figures">Figures</TabsTrigger>
            <TabsTrigger value="tables">Tables</TabsTrigger>
            <TabsTrigger value="debug">Debug Tips</TabsTrigger>
          </TabsList>
          
          {/* Setup Tab */}
          <TabsContent value="setup" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Project Setup</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">1. Download the Dataset</h3>
                  <p className="text-gray-600 mb-3">
                    First, you'll need to download the Sleep Health and Lifestyle Dataset from Kaggle.
                  </p>
                  <Button className="flex items-center gap-2 bg-vibeBlue">
                    <Download className="w-4 h-4" />
                    <a 
                      href="https://www.kaggle.com/datasets/uom190346a/sleep-health-and-lifestyle-dataset"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      Go to Dataset
                    </a>
                  </Button>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">2. Set Up Your Environment</h3>
                  <p className="text-gray-600 mb-2">
                    For this project, you have two simple options:
                  </p>
                  <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-600">
                    <li>
                      <strong>Option A: Use ChatGPT</strong> - Simply upload the downloaded CSV file to ChatGPT. No setup required!
                    </li>
                    <li>
                      <strong>Option B: Use Google Colab</strong> - A free, cloud-based Jupyter notebook environment. Great for more complex analysis.
                    </li>
                  </ul>
                  <Button className="flex items-center gap-2 bg-vibeTeal">
                    <a 
                      href="https://colab.research.google.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      Open Google Colab
                    </a>
                  </Button>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">3. Understand the Dataset</h3>
                  <p className="text-gray-600 mb-2">
                    This dataset contains information about:
                  </p>
                  <ul className="list-disc pl-5 mb-2 grid grid-cols-2 gap-x-4 text-gray-600">
                    <li>Sleep Duration (hours)</li>
                    <li>Quality of Sleep (scale: 1-10)</li>
                    <li>Physical Activity Level (minutes)</li>
                    <li>Stress Level (scale: 1-10)</li>
                    <li>BMI Category</li>
                    <li>Blood Pressure</li>
                    <li>Heart Rate</li>
                    <li>Daily Steps</li>
                    <li>Sleep Disorder</li>
                  </ul>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    onClick={() => setActiveTab('figures')}
                    className="flex items-center gap-2 bg-gradient-to-r from-vibePurple to-vibeBlue text-white"
                  >
                    Next: Creating Figures
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* Figures Tab */}
          <TabsContent value="figures">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Creating Figures</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Image className="w-5 h-5 text-vibePurple mt-1" />
                    <h3 className="font-semibold text-lg text-gray-700">Figure 1: Scatter plot of Physical Activity vs Sleep Duration</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT after uploading your dataset:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      I've uploaded a sleep health and lifestyle dataset. Please create a scatter plot showing the relationship between Physical Activity Level (x-axis) and Sleep Duration (y-axis). Add a trend line, appropriate axis labels, and a title. Also include a brief interpretation of what the plot shows.
                    </div>
                    
                    <div className="flex items-start gap-2 mb-4">
                      <div className="w-5 h-5 rounded-full bg-vibePurple text-white flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs">+</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        For a more advanced analysis, add: "Color the points based on the 'Stress Level' column to show how stress might influence this relationship."
                      </p>
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A scatter plot showing if people who are more physically active tend to sleep longer or shorter durations.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Image className="w-5 h-5 text-vibePurple mt-1" />
                    <h3 className="font-semibold text-lg text-gray-700">Figure 2: Scatter plot of Stress Level vs Sleep Duration</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Using the same sleep dataset, create a scatter plot showing the relationship between Stress Level (x-axis) and Sleep Duration (y-axis). Add a trend line, appropriate axis labels, and a title. Include a brief explanation of the relationship shown.
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A scatter plot revealing if higher stress levels correlate with shorter sleep durations.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Image className="w-5 h-5 text-vibePurple mt-1" />
                    <h3 className="font-semibold text-lg text-gray-700">Figure 3: Box plot of Sleep Duration across Occupations</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Create a box plot showing the distribution of Sleep Duration across different Occupation categories in the sleep dataset. Add appropriate labels, a title, and sort the occupations from highest to lowest median sleep duration. Also provide a brief analysis of which occupations get the most and least sleep.
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A box plot showing how sleep duration varies across different occupations, revealing which jobs might be associated with better or worse sleep patterns.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline"
                    onClick={() => setActiveTab('setup')}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Setup
                  </Button>
                  
                  <Button 
                    onClick={() => setActiveTab('tables')}
                    className="flex items-center gap-2 bg-gradient-to-r from-vibePurple to-vibeBlue text-white"
                  >
                    Next: Creating Tables
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* Tables Tab */}
          <TabsContent value="tables">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Creating Tables</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Table className="w-5 h-5 text-vibeBlue mt-1" />
                    <h3 className="font-semibold text-lg text-gray-700">Table 1: Correlation Matrix</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Using the sleep dataset, create a correlation matrix table showing the correlation coefficients between Sleep Duration and the following factors: Physical Activity Level, Stress Level, Heart Rate, Daily Steps, and Quality of Sleep. Format the table nicely and highlight strong correlations. Also provide a brief interpretation of the results.
                    </div>
                    
                    <div className="flex items-start gap-2 mb-4">
                      <div className="w-5 h-5 rounded-full bg-vibeBlue text-white flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs">+</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        To make it visually better, add: "Also create a heatmap visualization of this correlation matrix, using a color scale from red (negative correlation) to blue (positive correlation)."
                      </p>
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A table showing how strongly different lifestyle factors correlate with sleep duration, revealing which factors might have the strongest influence on sleep.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Table className="w-5 h-5 text-vibeBlue mt-1" />
                    <h3 className="font-semibold text-lg text-gray-700">Table 2: Average Sleep Duration per Occupation</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Create a table showing the average Sleep Duration for each Occupation in the dataset. Sort the table from highest to lowest average sleep duration. Also include the sample size (count) for each occupation and the standard deviation to show the variation. Add a brief analysis of which occupations get the most and least sleep on average.
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A table ranking different occupations by average sleep duration, highlighting which jobs might be associated with better or worse sleep habits.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline"
                    onClick={() => setActiveTab('figures')}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Figures
                  </Button>
                  
                  <Button 
                    onClick={() => setActiveTab('debug')}
                    className="flex items-center gap-2 bg-gradient-to-r from-vibePurple to-vibeBlue text-white"
                  >
                    Next: Debugging Tips
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          {/* Debug Tab */}
          <TabsContent value="debug">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Debugging Tips</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">Common Issues and Solutions</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-vibePurple mb-2">Issue: AI generates code but doesn't show the visualization</h4>
                      <p className="text-gray-600 mb-2">Solution:</p>
                      <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                        The code generated looks correct, but I don't see the output visualization. Please run the code and make sure to display the plot by adding plt.show() at the end if it's a matplotlib plot, or by calling the display command if it's a pandas plot.
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-vibePurple mb-2">Issue: Error with column names or missing data</h4>
                      <p className="text-gray-600 mb-2">Solution:</p>
                      <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                        There seems to be an issue with the column names. Please first show me the column names in the dataset by running df.columns to verify the exact column names, then update the code accordingly.
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-vibePurple mb-2">Issue: Plot doesn't look right or is hard to read</h4>
                      <p className="text-gray-600 mb-2">Solution:</p>
                      <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                        The plot is generating but doesn't look clear enough. Could you modify the code to increase the figure size to (10, 6), add grid lines, and use a more readable color palette? Also, please make the font size larger for all labels.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">Getting More Advanced Results</h3>
                  <p className="text-gray-600 mb-3">
                    Once you've mastered the basics, try these advanced prompts:
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                      Based on our analysis of the sleep dataset so far, run a multiple regression analysis to determine which factors are the strongest predictors of Sleep Duration. Include Physical Activity Level, Stress Level, Age, BMI Category, and Occupation as predictors. Show the regression results table and interpret the coefficients.
                    </div>
                    
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                      Create a dashboard-style visualization with 4 subplots that summarizes our key findings about sleep duration from this dataset. Include: 1) Top correlation plot, 2) Occupation vs sleep boxplot, 3) Physical activity scatter plot, and 4) Stress level scatter plot. Use a consistent color theme and make the overall figure professional enough for a research paper.
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">Learning More</h3>
                  <p className="text-gray-600 mb-3">
                    As you become more comfortable with AI coding, you can learn more advanced techniques:
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Try asking the AI to explain the code it generates to better understand what's happening</li>
                    <li>Request variations of the same plots with different parameters to explore the data more deeply</li>
                    <li>Ask for recommendations on additional analyses that might be valuable for your research</li>
                    <li>Learn how to export high-resolution figures suitable for publication</li>
                  </ul>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button 
                    variant="outline"
                    onClick={() => setActiveTab('tables')}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Tables
                  </Button>
                  
                  <Button 
                    onClick={onBack}
                    className="flex items-center gap-2 bg-gradient-to-r from-vibePurple to-vibeBlue text-white"
                  >
                    Choose Another Project
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SleepProject;
