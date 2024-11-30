"use client";
import { useEffect, useRef } from 'react';
import { FaUser, FaUpload, FaCog, FaLaptop, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

// Define types for steps and refs
type Step = {
  title: string;
  description: string;
  icon: JSX.Element;
}

const HowItWorks = () => {
  const steps: Step[] = [
    {
      title: 'Profile Setup',
      description: "Start by answering a few questions to help personalize your exams according to your academic level and interests.",
      icon: <FaUser />
    },
    {
      title: 'Content Upload', 
      description: "Upload study materials like PDFs, topics, and videos, or choose from pre-existing content.",
      icon: <FaUpload />
    },
    {
      title: 'Exam Customization',
      description: "Select question types, set difficulty levels, and personalize exam parameters.",
      icon: <FaCog />
    },
    {
      title: 'Take AI-Powered Exam',
      description: "Start your exam in a responsive, interactive format powered by Examinie AI.",
      icon: <FaLaptop />
    },
    {
      title: 'Real-Time Grading & Feedback',
      description: "Complete the exam and receive instant feedback with areas to improve upon.",
      icon: <FaCheckCircle />
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 py-20">
      <h2 className="text-center text-3xl font-bold text-green-600 mb-10 animate-fade-in">How It Works</h2>
      <div className="flex justify-center items-center relative max-w-4xl mx-auto">
        {/* Animated Path using border gradient */}
        <div className="absolute w-full h-1 bg-gradient-to-r from-green-500 to-green-600 transform -translate-y-1/2 top-1/2 animate-expand" />

        <div className="flex gap-8 relative z-10 items-center overflow-x-auto px-4">
          {steps.map((step, index) => (
            <div className="flex items-center" key={index}>
              <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg w-48 transform hover:scale-105 transition-transform duration-300 animate-fade-slide-up" style={{animationDelay: `${index * 200}ms`}}>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white text-2xl font-bold mb-4 hover:bg-green-600 transition-colors duration-300 animate-pulse">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-700">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>

              {/* Add arrow icon except for the last item */}
              {index < steps.length - 1 && (
                <FaArrowRight className="text-green-500 text-2xl mx-4 animate-bounce" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add required keyframes */}
      <style jsx>{`
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes fade-slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-expand {
          animation: expand 1.5s ease-out forwards;
        }
        .animate-fade-slide-up {
          opacity: 0;
          animation: fade-slide-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;
