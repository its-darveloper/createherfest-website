import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Lightbulb, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FloatingElementProps {
  shape: string;
  size: string;
  position: string;
  color: string;
  delay?: number;
  duration?: number;
  scale?: number[];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  shape, 
  size, 
  position, 
  color,
  delay = 0,
  duration = 20,
  scale = [0.8, 1.2]
}) => (
  <motion.div
    className={`absolute ${size} ${position} backdrop-blur-3xl rounded-3xl`}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ 
      opacity: [0.1, 0.3, 0.1],
      scale: scale,
      rotate: [0, 180],
      y: ['0%', '-20%', '0%']
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: delay
    }}
    style={{
      clipPath: shape,
      background: `linear-gradient(to bottom right, ${color}20, ${color}05)`
    }}
  />
);

const EventSeries = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const eventPhases = [
    {
      title: "Learn-a-thon",
      dates: "DEC 9 - FEB 28",
      description: "During the Learn-a-thon, participants will learn from industry leaders in AI/ML, AR/VR, and Blockchain. The goal is to develop technical skills and learn to think like innovators, preparing for future phases.",
      icon: BookOpen,
      color: "#37D5D6",
      progressColor: "bg-gradient-to-r from-[#37D5D6] to-[#37D5D6]/50"
    },
    {
      title: "Idea-thon",
      dates: "FEB 28 - MAR 2",
      description: "A collaborative brainstorming event where participants refine ideas and develop project concepts based on skills acquired during the Learn-a-thon, focusing on real-world impact and innovation.",
      icon: Lightbulb,
      color: "#4E6BFF",
      progressColor: "bg-gradient-to-r from-[#4E6BFF] to-[#4E6BFF]/50"
    },
    {
      title: "Hackathon",
      dates: "MAR 3 - MAR 8",
      description: "Participants will bring their ideas to life by building working prototypes in a competitive hackathon format. Mentorship and resources will be provided to help teams create impactful tech solutions.",
      icon: Code,
      color: "#CAA3D6",
      progressColor: "bg-gradient-to-r from-[#CAA3D6] to-[#CAA3D6]/50"
    }
  ];

  return (
    <section className="relative w-full bg-[#150E60] py-24 overflow-hidden event-section">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Learn-a-thon themed elements */}
        <FloatingElement
          shape="polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"
          size="w-96 h-96"
          position="-top-20 -left-20"
          color="#37D5D6"
          delay={0}
        />
        <FloatingElement
          shape="circle(50% at 50% 50%)"
          size="w-32 h-32"
          position="top-1/4 left-1/4"
          color="#37D5D6"
          delay={2}
          scale={[0.9, 1.1]}
        />

        {/* Idea-thon themed elements */}
        <FloatingElement
          shape="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
          size="w-64 h-64"
          position="top-1/3 right-20"
          color="#4E6BFF"
          delay={1}
        />
        <FloatingElement
          shape="circle(50% at 50% 50%)"
          size="w-48 h-48"
          position="bottom-1/4 right-1/4"
          color="#4E6BFF"
          delay={3}
        />

        {/* Hackathon themed elements */}
        <FloatingElement
          shape="polygon(0 40%, 100% 0%, 100% 60%, 0% 100%)"
          size="w-80 h-80"
          position="bottom-20 left-20"
          color="#CAA3D6"
          delay={2}
        />
        <FloatingElement
          shape="circle(50% at 50% 50%)"
          size="w-40 h-40"
          position="top-1/2 right-1/3"
          color="#CAA3D6"
          delay={4}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-[#473DC6]/20 px-4 py-2 rounded-full mb-6 section-tag-container">
            <span className="text-[#CAA3D6] text-xs uppercase tracking-widest section-tag">
              Event Journey
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 section-title">
            Your Transformative Tech Journey
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto section-description">
            A carefully curated three-phase experience designed to turn aspiring technologists into innovative problem-solvers.
          </p>
        </div>

        {/* Event Series Container */}
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Phase Navigation */}
          <div className="flex justify-between mb-12 overflow-x-auto phase-navigation">
            {/* Mobile Tabs (Hidden on Desktop) */}
            <div className="flex w-full md:hidden justify-between gap-2 min-w-max px-2">
              {eventPhases.map((phase, index) => (
                <button
                  key={`mobile-${index}`}
                  onClick={() => setSelectedPhase(index)}
                  className={`
                    phase-button relative px-3 py-3
                    transition-all duration-300 rounded-lg
                    ${selectedPhase === index 
                      ? 'text-white bg-white/10 min-w-[130px]' 
                      : 'text-white/50 hover:text-white/70 min-w-[44px] hover:bg-white/5'
                    }
                  `}
                >
                  <div className={`
                    flex items-center
                    ${selectedPhase === index ? 'justify-start pl-2' : 'justify-center'}
                  `}>
                    <div className={`
                      transition-all duration-300 flex-shrink-0
                      ${selectedPhase === index ? '' : 'transform scale-90'}
                    `}>
                      {React.createElement(phase.icon, {
                        className: `w-6 h-6 transition-all duration-300 ${
                          selectedPhase === index ? 'opacity-100' : 'opacity-70'
                        }`,
                        strokeWidth: 1.5,
                        style: { color: phase.color }
                      })}
                    </div>
                    
                    <AnimatePresence mode="wait">
                      {selectedPhase === index && (
                        <motion.span
                          initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                          animate={{ width: "auto", opacity: 1, marginLeft: 12 }}
                          exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden whitespace-nowrap font-medium text-sm"
                        >
                          {phase.title}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {selectedPhase === index && (
                    <motion.div
                      layoutId="phase-underline-mobile"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-white/20 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop Tabs (Hidden on Mobile) */}
            <div className="hidden md:flex w-full justify-center gap-8">
              {eventPhases.map((phase, index) => (
                <button
                  key={`desktop-${index}`}
                  onClick={() => setSelectedPhase(index)}
                  className={`
                    phase-button relative px-6 py-3 min-w-[140px]
                    transition-all duration-300 rounded-lg
                    ${selectedPhase === index 
                      ? 'text-white bg-white/10' 
                      : 'text-white/50 hover:text-white/70 hover:bg-white/5'
                    }
                  `}
                >
                  <div className="flex items-center justify-center space-x-3">
                    {React.createElement(phase.icon, {
                      className: `w-6 h-6 transition-all duration-300 ${
                        selectedPhase === index ? 'opacity-100' : 'opacity-70'
                      }`,
                      strokeWidth: 1.5,
                      style: { color: phase.color }
                    })}
                    <span className="font-medium">
                      {phase.title}
                    </span>
                  </div>
                  
                  {selectedPhase === index && (
                    <motion.div
                      layoutId="phase-underline-desktop"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-white/20 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Phase Details */}
          <motion.div
            key={selectedPhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 phase-details"
          >
            <div className="flex items-center mb-8 phase-header">
              <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mr-6"
                style={{ 
                  backgroundColor: `${eventPhases[selectedPhase].color}20`, 
                  color: eventPhases[selectedPhase].color 
                }}
              >
                {React.createElement(eventPhases[selectedPhase].icon, {
                  className: "w-8 h-8 md:w-10 md:h-10",
                  strokeWidth: 1.5
                })}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {eventPhases[selectedPhase].title}
                </h3>
                <p className="text-white/60">
                  {eventPhases[selectedPhase].dates}
                </p>
              </div>
            </div>

            <p className="text-white/80 text-base md:text-lg mb-8 phase-description">
              {eventPhases[selectedPhase].description}
            </p>

            <Button 
              className="group relative inline-flex items-center justify-center p-[1px] overflow-hidden
                       rounded-lg hover:cursor-pointer register-button event-button
                       transition-all duration-300"
            >
              {/* Gradient border background */}
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-[#37D5D6] via-[#4E6BFF] to-[#CAA3D6]" />
              
              {/* Inner background with gradient shine effect */}
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center
                            rounded-lg bg-[#150E60] px-8 py-3 backdrop-blur-3xl
                            transition-all duration-500 hover:bg-[#1a1170]
                            relative group-hover:bg-opacity-90">
                <Link to="https://form.jotform.com/243616450118149" target='_blank' 
                      className="relative flex items-center gap-2 font-medium text-white">
                  Register
                </Link>
              </span>
              
              {/* Shine effect overlay */}
              <span className="absolute inset-0 rounded-lg bg-gradient-to-tr from-[#37D5D6]/20 via-transparent to-transparent
                            opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Button>

            {/* Progress Indicator */}
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-8">
              <motion.div 
                className={`h-full ${eventPhases[selectedPhase].progressColor}`}
                initial={{ width: 0 }}
                animate={{ width: `${(selectedPhase + 1) * 33.33}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventSeries;