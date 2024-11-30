"use client";
import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { FaUser } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const styles = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-fadeIn {
    animation: fadeIn 1s ease-in-out forwards;
  }
  .animate-gradient {
    animation: gradientBG 15s ease infinite;
    background-size: 400% 400%;
  }
  .delay-200 {
    animation-delay: 0.2s;
  }
  .delay-400 {
    animation-delay: 0.4s;
  }
`;

const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Check if user is logged in
    const token = localStorage.getItem('access_token');
    setIsLoggedIn(!!token);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative text-white min-h-screen">
      <style>{styles}</style>

      {/* Animated Background */}
      <div className="fixed inset-0 animate-gradient" style={{
        background: "linear-gradient(-45deg, #1a5f2e, #2d8a46, #1e6934, #3da55d)",
        zIndex: -2
      }}></div>

      {/* Background Image with Dynamic Blur and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-1000"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D')",
          opacity: 0.6
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-sm"></div>

      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 transform ${scrolled ? 'bg-green-900/90 backdrop-blur-md' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center transition-transform duration-200 hover:scale-105">
                <img className="h-10 w-10" src="https://cdn-icons-png.flaticon.com/128/23/23358.png" alt="Logo" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">
                  ExaminAI
                </span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {["Home", "About", "Features", "Contact"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-white hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {isLoggedIn ? (
                  <button onClick={() => window.location.href = '/Profile'} className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-300">
                    <FaUser className="text-white" />
                  </button>
                ) : (
                  <button onClick={() => window.location.href = '/Login'} className="bg-green-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-105">
                    Login
                  </button>
                )}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-500 focus:outline-none transition-colors duration-200"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden transition-all duration-200 transform">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-900/90 backdrop-blur-md">
              {["Home", "About", "Features", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:bg-green-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              {isLoggedIn ? (
                <button onClick={() => window.location.href = '/Profile'} className="w-full flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors duration-200">
                  <FaUser className="mr-2" /> Profile
                </button>
              ) : (
                <button onClick={() => window.location.href = '/login'} className="w-full text-center bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors duration-200">
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10 max-w-6xl pt-20">
        {/* Text Section */}
        <div className="text-center lg:text-left max-w-3xl animate-fadeIn">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-snug tracking-tight">
            Revolutionize Exam Generation & Grading with ExaminieAI
          </h1>
          <h2 className="text-xl lg:text-3xl text-green-200 mt-4 delay-200 font-semibold leading-snug">
            AI-powered Personalized Exams with Instant Feedback
          </h2>
          <p className="text-base lg:text-lg mt-6 max-w-lg">
            Examinie AI offers intelligent exam generation and instant, insightful feedback, tailored to each student's unique academic strengths, interests, and growth areas. 
          </p>

          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            {isLoggedIn ? (
              <button onClick={() => window.location.href = '/Dashboard'} className="bg-green-500 text-white py-3 px-8 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-105">
                Go to Dashboard
              </button>
            ) : (
              <>
                <button className="bg-green-500 text-white py-3 px-8 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-105">
                  Signup As Student
                </button>
                <button className="bg-green-500 text-white py-3 px-8 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-105">
                  Signup As Teacher
                </button>
              </>
            )}
          </div>
        </div>

        {/* Dots and Image Section */}
        <div className="relative mt-8 lg:mt-0 lg:ml-8 animate-fadeIn delay-400 w-1/3">
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="grid grid-cols-12 gap-2 w-full h-1/2 lg:h-full animate-float">
              {Array.from({ length: 96 }).map((_, index) => (
                <div 
                  key={index} 
                  className="w-2 h-2 bg-white rounded-full"
                />
              ))}
            </div>
          </div>
          
          <img
            src="/asd.png"
            alt="Illustration of ExaminieAI"
            className="h-auto max-w-sm rounded-lg shadow-lg relative z-10 transition-transform duration-200 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), {
  ssr: false
});
