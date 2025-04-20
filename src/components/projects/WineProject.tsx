
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VibeMascot from '../VibeMascot';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, ArrowRight, Download, FileText, Image, Table } from 'lucide-react';

interface WineProjectProps {
  onBack: () => void;
}

const WineProject: React.FC<WineProjectProps> = ({ onBack }) => {
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
            Red Wine Quality Factors
          </h1>
          
          <div className="w-28"></div> {/* Spacer to balance the layout */}
        </div>
        
        <div className="mb-8 flex justify-center">
          <VibeMascot 
            message="Let's explore what makes a good wine! We'll analyze the chemical factors that influence wine quality."
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
                    First, download the Red Wine Quality Dataset from Kaggle.
                  </p>
                  <Button className="flex items-center gap-2 bg-vibeBlue">
                    <Download className="w-4 h-4" />
                    <a 
                      href="https://www.kaggle.com/datasets/uciml/red-wine-quality-cortez-et-al-2009"
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
                    This dataset contains information about red wine quality and various chemical properties:
                  </p>
                  <ul className="list-disc pl-5 mb-2 grid grid-cols-2 gap-x-4 text-gray-600">
                    <li>Fixed Acidity</li>
                    <li>Volatile Acidity</li>
                    <li>Citric Acid</li>
                    <li>Residual Sugar</li>
                    <li>Chlorides</li>
                    <li>Free Sulfur Dioxide</li>
                    <li>Total Sulfur Dioxide</li>
                    <li>Density</li>
                    <li>pH</li>
                    <li>Sulphates</li>
                    <li>Alcohol</li>
                    <li>Quality (score between 0 and 10)</li>
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
                    <h3 className="font-semibold text-lg text-gray-700">Figure 1: Histogram of Wine Quality</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT after uploading your dataset:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      I've uploaded a red wine quality dataset. Please create a histogram showing the distribution of quality scores. Add appropriate labels, a title, and include the count for each quality level. Also provide a brief interpretation of the distribution.
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A histogram showing how many wines fall into each quality rating category, revealing if the quality scores are evenly distributed or skewed.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Image className="w-5 h-5 text-vibePurple mt-1" />
                    <h3 className="font-semibold text-lg text-gray-700">Figure 2: Scatter plot of Alcohol vs Quality</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Using the red wine dataset, create a scatter plot showing the relationship between alcohol content (x-axis) and quality score (y-axis). Add a trend line, appropriate axis labels, and a title. Include a brief analysis of what the plot reveals about how alcohol content may influence wine quality.
                    </div>
                    
                    <div className="flex items-start gap-2 mb-4">
                      <div className="w-5 h-5 rounded-full bg-vibePurple text-white flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs">+</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        For a more advanced visualization, add: "Also add a jitter effect to better show overlapping points, and include the average quality score for different alcohol content ranges."
                      </p>
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A scatter plot showing if higher alcohol content correlates with higher quality ratings in red wine.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Image className="w-5 h-5 text-vibePurple mt-1" />
                    <h3 className="font-semibold text-lg text-gray-700">Figure 3: Correlation Heatmap</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Create a heatmap showing the correlation matrix among all physicochemical features and quality in the red wine dataset. Use a color scale from blue (negative correlation) to red (positive correlation). Annotate each cell with the correlation coefficient rounded to two decimal places. Provide an analysis of which features show the strongest positive and negative correlations with wine quality.
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A heatmap visualization that reveals which chemical properties have the strongest relationships with each other and with wine quality.
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
                    <h3 className="font-semibold text-lg text-gray-700">Table 1: Regression Metrics</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Using the red wine quality dataset, build a linear regression model to predict wine quality based on all available chemical properties. Display a table showing the regression performance metrics including MAE, MSE, RMSE, and R². Include a brief interpretation of the model's performance.
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A table showing how accurately we can predict wine quality based on its chemical properties using a regression model.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Table className="w-5 h-5 text-vibeBlue mt-1" />
                    <h3 className="font-semibold text-lg text-gray-700">Table 2: Classification Metrics</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Create a binary classification model for the red wine dataset where wines with quality scores of 7 or higher are classified as "high quality" and others as "low quality". Display a table with classification metrics including precision, recall, F1-score, and accuracy. Also include a confusion matrix visualization and a brief interpretation of the results.
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A table showing how well we can classify wines into high and low quality categories based on their chemical properties.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Table className="w-5 h-5 text-vibeBlue mt-1" />
                    <h3 className="font-semibold text-lg text-gray-700">Table 3: Feature Coefficients</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Generate a table showing the coefficients from a linear regression model for predicting wine quality, sorted from highest (most positive impact) to lowest (most negative impact). Include the standardized coefficients to show the relative importance of each feature. Provide a brief interpretation of which chemical properties have the strongest influence on wine quality.
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A table ranking which chemical properties have the strongest positive or negative impact on wine quality.
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
                      <h4 className="font-medium text-vibePurple mb-2">Issue: Model fails to converge or has poor performance</h4>
                      <p className="text-gray-600 mb-2">Solution:</p>
                      <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                        The model is showing poor performance. Please try normalizing all the feature columns before fitting the model. Also, check for outliers in the dataset and consider removing extreme values that might be skewing the results.
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-vibePurple mb-2">Issue: Correlation heatmap is hard to read</h4>
                      <p className="text-gray-600 mb-2">Solution:</p>
                      <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                        The correlation heatmap is difficult to interpret. Please adjust the figure size to (12, 10), use a different color scheme like 'coolwarm', and add text annotations with the correlation values rounded to 2 decimal places. Also, consider reordering the features to group similar ones together.
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-vibePurple mb-2">Issue: Feature importance not clear</h4>
                      <p className="text-gray-600 mb-2">Solution:</p>
                      <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                        I'd like to better understand which features are most important. Instead of just using the regression coefficients, could you implement a random forest model and show the feature importance scores from that? Please visualize these in a horizontal bar chart, sorted from most to least important.
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
                      I'd like to go beyond linear models for the wine quality prediction. Please implement a gradient boosting model (like XGBoost or LightGBM) to predict wine quality. Compare its performance metrics with our earlier linear regression model in a table. Then create a partial dependence plot showing how the 3 most important features affect the predicted quality.
                    </div>
                    
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                      Create a comprehensive dashboard for exploring red wine quality. Include: 1) A scatter plot matrix of the 4 most important features colored by quality, 2) A parallel coordinates plot showing all features with lines colored by quality category, 3) A table of average chemical properties for each quality level, and 4) A radar chart comparing chemical profiles of low vs high quality wines. Use a consistent and professional color scheme.
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">Research Paper Tips</h3>
                  <p className="text-gray-600 mb-3">
                    When preparing figures and tables for a research paper:
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Always set high DPI for publication-quality images (at least 300 DPI)</li>
                    <li>Use a consistent color scheme throughout all visualizations</li>
                    <li>Include error bars or confidence intervals when applicable</li>
                    <li>Format tables with clear headers and consistent decimal places</li>
                    <li>Add concise but descriptive captions for all figures and tables</li>
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

export default WineProject;
