
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VibeMascot from '../VibeMascot';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, ArrowRight, Download, FileText, Image, Table } from 'lucide-react';

interface AttendanceProjectProps {
  onBack: () => void;
}

const AttendanceProject: React.FC<AttendanceProjectProps> = ({ onBack }) => {
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
            University Attendance Patterns
          </h1>
          
          <div className="w-28"></div> {/* Spacer to balance the layout */}
        </div>
        
        <div className="mb-8 flex justify-center">
          <VibeMascot 
            message="Great choice! Let's analyze university attendance patterns to find interesting insights."
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
                    First, you'll need to download the University Attendance Dataset from Kaggle.
                  </p>
                  <Button className="flex items-center gap-2 bg-vibeBlue">
                    <Download className="w-4 h-4" />
                    <a 
                      href="https://www.kaggle.com/datasets/ahmedaliraja/attendance-sheet-data-set-for-university"
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
                    For this intermediate project, we recommend:
                  </p>
                  <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-600">
                    <li>
                      <strong>Google Colab</strong> - The time series analysis in this project works best in a notebook environment.
                    </li>
                    <li>
                      <strong>ChatGPT</strong> - You can still use ChatGPT, but you'll need to divide complex tasks into smaller steps.
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
                    This dataset contains:
                  </p>
                  <ul className="list-disc pl-5 mb-4 text-gray-600">
                    <li>Attendance records for university students</li>
                    <li>Timestamps of attendance</li>
                    <li>Course information</li>
                    <li>Department details</li>
                    <li>Day of week information</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    Our goal is to analyze patterns and potentially build a predictive model for future attendance rates.
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
                    <h3 className="font-semibold text-lg text-gray-700">Figure 1: Time Series Plot of Daily Attendance</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT after uploading your dataset:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      I've uploaded a university attendance dataset. Please create a time series plot showing the daily attendance rate over time. First, you'll need to calculate the attendance rate for each day (number of present students divided by total students). Then, plot this as a line chart with dates on the x-axis and attendance rate (%) on the y-axis. Add appropriate labels, a title, and a trend line if possible. Also provide a brief interpretation of any patterns you observe.
                    </div>
                    
                    <div className="flex items-start gap-2 mb-4">
                      <div className="w-5 h-5 rounded-full bg-vibePurple text-white flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs">+</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        For better visualization, add: "Please also add a 7-day moving average line to smooth out daily fluctuations and make the trend more visible."
                      </p>
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A line chart showing how attendance rates change over time, revealing patterns like week-to-week variations or gradual trends over the term.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Image className="w-5 h-5 text-vibePurple mt-1" />
                    <h3 className="font-semibold text-lg text-gray-700">Figure 2: Heatmap of Attendance by Weekday vs. Hour</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Using the university attendance dataset, create a heatmap showing attendance rates by day of week (y-axis) versus hour of day (x-axis). Calculate the average attendance rate for each day-hour combination, then visualize it as a heatmap with a color scale from red (low attendance) to green (high attendance). Add appropriate labels and a title. Also provide a brief analysis of which days and times have the highest and lowest attendance rates.
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A heatmap revealing patterns like whether morning classes have lower attendance than afternoon ones, or if particular weekdays show consistently lower attendance.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Image className="w-5 h-5 text-vibePurple mt-1" />
                    <h3 className="font-semibold text-lg text-gray-700">Figure 3: Box Plots of Attendance by Course/Department</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Create box plots showing the distribution of attendance rates by course or department in the university dataset. Calculate attendance rates for each course/department, then create box plots to compare their distributions. Sort them from highest to lowest median attendance rate. Add appropriate labels, a title, and make the plot visually clear (adjust figure size if needed). Also provide a brief analysis of which courses/departments have the highest and lowest attendance, and which ones show the most variability.
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: Box plots comparing attendance across different courses or departments, showing which subjects have consistently high or low attendance and which ones vary more.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Image className="w-5 h-5 text-vibePurple mt-1" />
                    <h3 className="font-semibold text-lg text-gray-700">Figure 4 (Optional): Feature Importance for Attendance Prediction</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">This is an advanced visualization. Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Using the university attendance dataset, build a random forest model to predict attendance (present/absent) based on features like day of week, time of day, course, department, etc. Then create a bar chart showing feature importance scores from this model, ranking which factors most strongly predict attendance. Make sure to handle any categorical variables appropriately, and explain which features are most important for predicting attendance and why.
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A bar chart ranking factors that influence attendance, potentially revealing insights like whether time of day matters more than the specific course, or vice versa.
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
                    <h3 className="font-semibold text-lg text-gray-700">Table 1: Attendance Prediction Model Performance</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Using the university attendance dataset, build and evaluate models to predict student attendance. First, create features from the data (day of week, hour, course, etc.). Then train several models (Logistic Regression, Random Forest, and Gradient Boosting) to predict whether a student will be present or absent. Create a table comparing these models with the following metrics: Accuracy, Precision, Recall, F1-Score, and AUC-ROC. Also include a brief interpretation of which model performs best and why.
                    </div>
                    
                    <div className="flex items-start gap-2 mb-4">
                      <div className="w-5 h-5 rounded-full bg-vibeBlue text-white flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs">+</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        To improve your results: "Please use cross-validation to make the evaluation more robust, and also show the standard deviation of each metric across folds."
                      </p>
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A table comparing how well different models can predict student attendance, showing which approach works best for this problem.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <Table className="w-5 h-5 text-vibeBlue mt-1" />
                    <h3 className="font-semibold text-lg text-gray-700">Table 2: Feature Coefficients/Importances</h3>
                  </div>
                  
                  <div className="ml-8">
                    <p className="text-gray-600 mb-3">Copy this prompt into ChatGPT:</p>
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-4">
                      Using the best-performing model from our previous analysis on the university attendance dataset, create a table showing the feature coefficients or importance scores for each predictor variable. Include the feature name, its coefficient/importance value, and the direction of effect (positive or negative impact on attendance). Sort the table by absolute importance (most to least important). Also provide a brief interpretation of the top factors that drive attendance patterns.
                    </div>
                    
                    <p className="text-gray-600 text-sm italic">
                      Expected result: A table ranking the factors that predict attendance, showing quantitatively how much each factor contributes to the prediction.
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
                      <h4 className="font-medium text-vibePurple mb-2">Issue: Date/time parsing errors</h4>
                      <p className="text-gray-600 mb-2">Solution:</p>
                      <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                        I'm getting errors with date parsing. Please show me a few example values from the timestamp column using df['timestamp_column'].head() so I can understand the format. Then provide code to properly convert these timestamps to datetime objects.
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-vibePurple mb-2">Issue: Model training takes too long</h4>
                      <p className="text-gray-600 mb-2">Solution:</p>
                      <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                        The model training is taking too long. Please simplify the approach by either: 1) Using a smaller subset of the data for demonstration, 2) Reducing the number of cross-validation folds, or 3) Using a simpler model with fewer hyperparameters to tune.
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-vibePurple mb-2">Issue: Heatmap isn't showing clear patterns</h4>
                      <p className="text-gray-600 mb-2">Solution:</p>
                      <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                        The heatmap pattern isn't very clear. Please try adjusting the color scale to enhance the contrast (e.g., using a diverging colormap centered around the mean attendance rate). Also, consider binning the hours into morning/afternoon/evening categories if there are too many individual hours making the pattern hard to see.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">Advanced Analysis Prompts</h3>
                  <p className="text-gray-600 mb-3">
                    Ready to go deeper? Try these advanced analysis prompts:
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                      Using the university attendance dataset, conduct a time series forecasting analysis to predict attendance for the next two weeks. Use methods like ARIMA or Prophet to build the model, accounting for day-of-week effects. Create a plot showing the actual attendance (training data), the model fit, and the forecasted values with confidence intervals. Also provide an evaluation of the forecast accuracy.
                    </div>
                    
                    <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono">
                      Create a comprehensive dashboard with 4 panels that tell the story of attendance patterns in this university. Include: 1) Weekly attendance trends over time, 2) Day/hour heatmap of attendance, 3) Course comparison, and 4) A forecast for the next 10 days. Use a consistent theme and color scheme, add appropriate titles and annotations, and make it publication-quality.
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-700">Time Series Analysis Tips</h3>
                  <p className="text-gray-600 mb-3">
                    Working with time series data can be challenging. Here are some tips:
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Always check for and handle missing dates in your time series</li>
                    <li>Look for seasonality at different levels (daily, weekly, monthly patterns)</li>
                    <li>Use rolling averages to smooth noisy data and identify trends</li>
                    <li>Consider lagged features (yesterday's attendance may predict today's)</li>
                    <li>Be careful about training/test splits with time series - always split chronologically</li>
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

export default AttendanceProject;
