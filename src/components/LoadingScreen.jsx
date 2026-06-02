import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    setTimeout(() => setShowText(true), 500);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="text-center">
        <div className="loading-spinner mb-8"></div>
        
        {showText && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-accent-400 animate-pulse">
              Nadir El Moutaouakil
            </h2>
            <p className="text-gray-300">Portfolio se charge...</p>
            
            <div className="w-64 bg-gray-700 rounded-full h-2 mt-6">
              <div 
                className="bg-gradient-to-r from-accent-500 to-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <p className="text-sm text-gray-400">{progress}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;