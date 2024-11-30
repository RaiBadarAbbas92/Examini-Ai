
"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaUser, FaUpload, FaCog, FaLaptop, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

// Define types for steps and refs
type Step = {
  title: string;
  description: string;
  icon: JSX.Element;
}

const HowItWorks = () => {
  const svgPathRef = useRef<SVGPathElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate SVG path
    if (svgPathRef.current) {
      gsap.fromTo(
        svgPathRef.current,
        { strokeDasharray: 500, strokeDashoffset: 500 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: svgPathRef.current,
            start: 'top 75%',
            end: 'bottom 25%',
            scrub: true,
          },
        }
      );
    }

    // Animate steps
    stepsRef.current.forEach((step: HTMLDivElement | null) => {
      if (step) {
        gsap.fromTo(step,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
              once: true
            }
          }
        );
      }
    });

    // Animate icons
    iconsRef.current.forEach((icon: HTMLDivElement | null) => {
      if (icon) {
        gsap.to(icon, {
          scale: 1.2,
          duration: 0.5,
          repeat: -1,
          yoyo: true
        });
      }
    });
  }, []);

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
      <h2 className="text-center text-3xl font-bold text-green-600 mb-10">How It Works</h2>
      <div className="flex justify-center items-center relative max-w-4xl mx-auto">
        {/* Animated Path */}
        <svg width="100%" height="100" className="absolute">
          <path
            ref={svgPathRef}
            d="M20,50 C150,0 300,100 450,50 S600,100 750,50"
            stroke="green"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <div className="flex gap-8 relative z-10 items-center">
          {steps.map((step, index) => (
            <div className="flex items-center" key={index}>
              <div
                ref={el => stepsRef.current[index] = el}
                className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg w-48"
              >
                <div
                  ref={el => iconsRef.current[index] = el}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white text-2xl font-bold mb-4"
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-700">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>

              {/* Add arrow icon except for the last item */}
              {index < steps.length - 1 && (
                <FaArrowRight className="text-green-500 text-2xl mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
