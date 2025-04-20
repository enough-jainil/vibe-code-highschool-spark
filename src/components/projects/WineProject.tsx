
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
            Red Wine Quality Analysis
          </h1>
          
          <div className="w-28"></div> {/* Spacer to balance the layout */}
        </div>
        
        <div className="mb-8 flex justify-center">
          <VibeMascot 
            message="Excellent choice! Let's discover what makes a high-quality red wine."
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
                    First, you'll need to download the Red Wine Quality Dataset from Kaggle.
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
                    For this advanced project, we recommend:
                  </p>
                  <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-600">
                    <li>
                      <strong>Google Colab</strong> - This project involves machine learning models that run best in notebook environments.
                    </li>
                    <li>
                      <strong>ChatGPT</strong> - You can still use ChatGPT, but you'll need to break down complex tasks into manageable steps.
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
                    This dataset contains various physicochemical properties of red wines, along with a quality rating:
                  </p>
                  <ul className="list-disc pl-5 mb-4 grid grid-cols-2 gap-x-4 text-gray-600">
                    <li>Fixed acidity</li>
                    <li>Volatile acidity</li>
                    <li>Citric acid</li>
                    <li>Residual sugar</li>
                    <li>Chlorides</li>
                    <li>Free sulfur dioxide</li>
                    <li>Total sulfur dioxide</li>
                    <li>Density</li>
                    <li>pH</li>
                    <li>Sulphates</li>
                    <li>Alcohol</li>
                    <li>Quality (score between 0 and 10)</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    Our goal is to analyze which properties influence wine quality the most and build predictive models.
                  </p>
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
                    <h3 className="font-semibold text-lg text-gray-700">Figure 1: Histogram of Quality Scores</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT after uploading your dataset:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      I've uploaded a red wine quality dataset. Please create a histogram showing the distribution of wine quality scores. Add appropriate labels, a title, and customize the appearance to make it visually appealing. Also include summary statistics (mean, median, min, max) and a brief interpretation of the distribution.
                    </div>
                    
                    <div className="flex items-start gap-2 mb-4">
                      <div className="w-5 h-5 rounded-full bg-vibePurple text-white flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs">+</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        For a better visualization, add: "Use a color gradient for the bars where darker colors represent higher quality scores, and add a vertical line showing the mean quality score."
                      </p>
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A histogram showing how wine quality scores are distributed, revealing whether they follow a normal distribution or are skewed.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Image className="w-5 h-5 text-vibePurple mt-1" />
                    <h3 className="font-semibold text-lg text-gray-700">Figure 2: Scatter Plot of Alcohol vs. Quality</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Using the red wine dataset, create a scatter plot showing the relationship between alcohol content (x-axis) and quality score (y-axis). Color the points by quality score to make the relationship more visible. Add a trend line, appropriate labels, a title, and grid lines for better readability. Also calculate and display the correlation coefficient, and provide a brief interpretation of the relationship shown.
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A scatter plot showing whether wines with higher alcohol content tend to have higher quality ratings.
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
                      Create a heatmap of Pearson correlations among all physicochemical properties and quality in the red wine dataset. Use a diverging color palette (e.g., blue to red) to clearly show positive and negative correlations. Add correlation values in each cell, and sort the variables to group similar ones together if possible. Also provide a brief analysis of which features correlate most strongly with quality and with each other.
                    </div>
                    
                    <div className="flex items-start gap-2 mb-4">
                      <div className="w-5 h-5 rounded-full bg-vibePurple text-white flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs">+</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        To enhance readability: "Please use a mask to show only the lower triangle of the correlation matrix to avoid redundancy, and adjust the figure size to make it easy to read."
                      </p>
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A correlation heatmap showing which wine properties are strongly related to quality and to each other.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Image className="w-5 h-5 text-vibePurple mt-1" />
                    <h3 className="font-semibold text-lg text-gray-700">Figure 4: Feature Importance Chart</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Using the red wine dataset, build a Random Forest model to predict wine quality based on all physicochemical properties. Then create a horizontal bar chart showing feature importance scores from this model, ranking which chemical properties have the greatest influence on wine quality. Sort the bars from most to least important. Add appropriate labels, a title, and use color to emphasize the most important features. Also provide a brief interpretation of the top 3-5 most important features.
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A bar chart ranking wine properties by their importance in predicting quality, showing which chemical characteristics matter most.
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
                    <h3 className="font-semibold text-lg text-gray-700">Table 1: Regression Model Metrics</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Using the red wine dataset, build several regression models to predict wine quality score based on all physicochemical properties. Train and evaluate the following models: Linear Regression, Ridge Regression, Random Forest Regressor, and Gradient Boosting Regressor. Create a table comparing these models with the following metrics: MAE, MSE, RMSE, and R². Use cross-validation for more robust results. Also provide a brief interpretation of which model performs best and why.
                    </div>
                    
                    <div className="flex items-start gap-2 mb-4">
                      <div className="w-5 h-5 rounded-full bg-vibeBlue text-white flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs">+</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        For more detailed results: "Please also include the standard deviation of each metric across cross-validation folds to show how consistent each model is."
                      </p>
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A table comparing how accurately different models can predict wine quality scores, showing which approach works best.
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
                      Using the red wine dataset, create a binary classification task by categorizing wines as "high quality" (score ≥ 7) or "standard quality" (score < 7). Build several classification models: Logistic Regression, Random Forest, and Gradient Boosting. Create a table comparing these models with the following metrics: Precision, Recall, F1-score, Accuracy, and AUC-ROC. Use cross-validation and include both class-specific metrics and weighted averages. Also provide a brief interpretation focusing on which model best identifies high-quality wines.
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A table showing how well different models can distinguish between high-quality and standard-quality wines.
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
                      Using the red wine dataset, fit a standardized linear regression model (with features scaled to have mean=0 and std=1) to predict wine quality. Create a table showing each feature's coefficient, standard error, t-statistic, p-value, and significance level (* for p<0.05, ** for p<0.01, *** for p<0.001). Sort the table by absolute coefficient value (largest to smallest). Also provide a brief interpretation explaining which features have the strongest positive and negative effects on wine quality, and which effects are statistically significant.
                    </div>
                    
                    <div className="flex items-start gap-2 mb-4">
                      <div className="w-5 h-5 rounded-full bg-vibeBlue text-white flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs">+</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        For a more robust analysis: "Please also include standardized beta coefficients to show the relative importance of each feature on a common scale."
                      </p>
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A table showing how much each chemical property increases or decreases predicted wine quality, with statistical significance indicators.
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
                      <h4 className="font-medium text-vibePurple mb-2">Issue: Model performance seems too good (potential data leakage)</h4>
                      <p className="text-gray-600 mb-2">Solution:</p>
                      <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                        The model's performance seems suspiciously high. Let's check for data leakage. Please ensure you're splitting the data into training and test sets before any preprocessing steps. Also, make sure cross-validation is implemented correctly, with the preprocessing steps applied separately within each fold.
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-vibePurple mb-2">Issue: Imbalanced classes for high-quality wines</h4>
                      <p className="text-gray-600 mb-2">Solution:</p>
                      <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                        We have an imbalanced dataset with few high-quality wines. Please revise the classification approach to handle this imbalance by either: 1) Using class weights in the model, 2) Applying SMOTE or another oversampling technique, or 3) Using stratified sampling in the cross-validation to maintain class proportions.
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-vibePurple mb-2">Issue: Correlation heatmap is hard to interpret</h4>
                      <p className="text-gray-600 mb-2">Solution:</p>
                      <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                        The correlation heatmap is too crowded. Please simplify it by: 1) Using a mask to show only correlations with absolute values above 0.2, 2) Focusing on correlations with the quality variable specifically, or 3) Creating a separate bar chart showing only correlations between each feature and quality, sorted from strongest to weakest.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">Advanced Analysis Prompts</h3>
                  <p className="text-gray-600 mb-3">
                    Ready for more sophisticated analysis? Try these advanced prompts:
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                      Using the red wine dataset, perform a principal component analysis (PCA) to reduce the dimensionality of the physicochemical properties. Create a scatterplot of the first two principal components, coloring points by wine quality. Then analyze how the original variables load onto these principal components, explaining which chemical properties contribute most to each PC. Finally, build a model using these principal components to predict quality and compare its performance to models using the original features.
                    </div>
                    
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                      Create an ensemble model for predicting wine quality that combines predictions from different model types (linear regression, random forest, and gradient boosting). Compare this ensemble's performance to individual models. Then provide a breakdown of how reliable the model predictions are across different parts of the quality spectrum (e.g., is it better at predicting mid-range qualities than extremes?). Finally, create a plot showing predicted vs. actual quality with confidence intervals.
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">Presentation Tips</h3>
                  <p className="text-gray-600 mb-3">
                    For a publication-quality research paper, consider these tips:
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Create a consistent color scheme across all visualizations</li>
                    <li>Use descriptive titles that highlight key findings (e.g., "Alcohol Content Shows Strongest Positive Correlation with Wine Quality")</li>
                    <li>Include error bars or confidence intervals in your plots when possible</li>
                    <li>Add annotations to highlight particularly interesting data points</li>
                    <li>Consider creating a final "dashboard" figure that summarizes all key findings in one visual</li>
                    <li>Convert decimal values to percentages where appropriate for easier interpretation</li>
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
