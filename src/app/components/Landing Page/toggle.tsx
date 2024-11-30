"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";

const BenefitsCard = ({
  title,
  benefits,
  icon,
  hoverIcon,
  hoverText
}: {
  title: string;
  benefits: string[];
  icon: string;
  hoverIcon: string;
  hoverText: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-5 bg-white rounded-lg shadow-md border border-green-300 w-full sm:w-96 opacity-100 transform transition-all duration-500 ease-in-out">
      <div className="flex items-center gap-3 mb-5">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white transition-all duration-300 ${
            isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
          }`}
        >
          <span className="text-xl">{hoverIcon}</span>
        </div>
        <h3 className="text-2xl font-semibold text-green-600">{title}</h3>
      </div>
      <ul className="list-disc pl-6 space-y-3 text-gray-700">
        {benefits.map((benefit, index) => (
          <li 
            key={index}
            className="opacity-100 transition-opacity duration-300 ease-in"
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {benefit}
          </li>
        ))}
      </ul>

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`mt-4 text-center text-sm text-gray-500 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {hoverText}
      </div>
    </div>
  );
};

const RoleCards: React.FC = () => {
  const studentBenefits = [
    "Access to personalized learning resources",
    "Interactive study materials and practice tests", 
    "Time management tips and productivity tools",
    "Peer collaborations and study groups",
  ];

  const teacherBenefits = [
    "AI-powered insights into student performance",
    "Customizable lesson plans and teaching tools",
    "Access to a variety of teaching resources", 
    "Ability to track student progress and feedback",
  ];

  return (
    <div className="flex flex-col items-center gap-8 py-10 px-5 bg-gray-50 h-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Benefits for Students & Teachers</h2>

      <div className="flex flex-wrap gap-8 justify-center">
        <BenefitsCard
          title="Benefits for Students"
          benefits={studentBenefits}
          icon="👨‍🎓"
          hoverIcon="📚"
          hoverText="Unlock your learning potential with personalized resources."
        />

        <BenefitsCard
          title="Benefits for Teachers"
          benefits={teacherBenefits}
          icon="👩‍🏫"
          hoverIcon="📝"
          hoverText="Empower your teaching with tools and insights."
        />
      </div>
    </div>
  );
};

export default RoleCards;
