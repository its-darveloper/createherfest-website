// src/pages/landing/components/UpcomingWorkshops.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Timer, ChevronDown } from 'lucide-react';
import { getRecentWorkshops, urlFor } from '@/lib/sanity';
import { format, parseISO } from 'date-fns';
import type { Workshop } from '@/types/sanity';
import { PortableText } from '@portabletext/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface StatusBadgeProps {
  date: string;
  duration: number;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ date, duration }) => {
  const isFuture = new Date(date) > new Date();
  
  return (
    <div className={`px-4 py-2 rounded-full text-sm ${
      isFuture ? 'bg-[#473DC6]/20 text-[#CAA3D6]' : 'bg-white/10 text-white/70'
    }`}>
      <div className="flex flex-wrap justify-center items-center gap-4 py-2 section-tag">
        <span className="flex items-center gap-2">
          <Calendar className="w-4 h-4 mr-2" />
          {format(parseISO(date), 'MMMM d, yyyy')}
        </span>
        <span className="flex items-center gap-2">
          <Clock className="w-4 h-4 mr-2" />
          {format(parseISO(date), 'h:mm a')} ET {/* Added ET timezone */}
        </span>
        <span className="flex items-center gap-2">
          <Timer className="w-4 h-4 mr-2" />
          {duration} mins
        </span>
      </div>
    </div>
  );
};

const SpeakerBio: React.FC<{ bio: any; name: string }> = ({ bio, name }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full">
      <Button
        variant="ghost"
        className="w-full lg:hidden flex items-center justify-between text-white/70 hover:text-white py-2 mb-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-sm font-medium">About {name}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </Button>

      <AnimatePresence>
        {(isExpanded || window.innerWidth >= 1024) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="text-white/70 text-sm pt-2 lg:pt-0">
              {typeof bio === 'string' ? (
                <p>{bio}</p>
              ) : (
                bio && <PortableText value={bio} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WorkshopSpeakers: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const data = await getRecentWorkshops();
        setWorkshops(data);
      } catch (error) {
        console.error('Error fetching workshops:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorkshops();
  }, []);

  const isFutureWorkshop = (date: string) => new Date(date) > new Date();

  if (isLoading) {
    return (
      <section className="relative w-full bg-[#150E60] py-24 overflow-hidden agenda-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-block bg-white/5 px-4 py-2 rounded-full mb-6 animate-pulse w-40 h-8" />
            <div className="h-12 bg-white/5 rounded-lg mb-6 animate-pulse" />
            <div className="h-6 bg-white/5 rounded-lg animate-pulse max-w-2xl mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  const activeWorkshop = workshops[activeIndex];

  return (
    <section className="relative w-full bg-[#150E60] py-24 overflow-hidden agenda-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-[#473DC6]/20 px-4 py-2 rounded-full mb-6 section-tag-container">
            <span className="text-[#CAA3D6] text-xs uppercase tracking-widest section-tag">
              Upcoming Workshops
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 section-title">
            Agenda & Speakers
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto section-description">
            Dive into transformative workshops led by industry pioneers who are reshaping technology and empowering women in tech.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Timeline Navigation */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-4 min-w-max px-4">
            {workshops.map((workshop, index) => (
  <button
    key={workshop._id}
    onClick={() => setActiveIndex(index)}
    className={`date-info flex flex-col items-center p-4 rounded-xl transition-all
      ${activeIndex === index 
        ? 'bg-[#473DC6]/30 border-[#CAA3D6]' 
        : 'bg-white/5 hover:bg-white/10 border-transparent'
      } border`}
  >
    <span className="text-[#CAA3D6] text-sm">
      {format(parseISO(workshop.date), 'MMM d')}
    </span>
    <span className="text-white text-xs mt-1">
      {format(parseISO(workshop.date), 'h:mm a')} ET {/* Added ET timezone */}
    </span>
  </button>
))}
            </div>
          </div>

          {/* Workshop Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Speaker Info */}
            <div className="lg:col-span-1">
              <motion.div
                key={`speaker-${activeIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 rounded-2xl p-6 lg:sticky lg:top-24 speaker-card"
              >
                {activeWorkshop.speaker?.image && (
                  <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-6">
                    <img 
                      src={urlFor(activeWorkshop.speaker.image).width(400).height(400).url()} 
                      alt={activeWorkshop.speaker.name}
                      className="rounded-full w-full h-full object-cover ring-2 ring-white/10"
                    />
                  </div>
                )}
                <h3 className="text-xl lg:text-2xl font-bold text-white text-center mb-2">
                  {activeWorkshop.speaker?.name}
                </h3>
                <p className="text-[#CAA3D6] text-center mb-4">
                  {activeWorkshop.speaker?.title} 
                  {activeWorkshop.speaker?.company && ` @ ${activeWorkshop.speaker.company}`}
                </p>
                <SpeakerBio 
                  bio={activeWorkshop.speaker?.bio} 
                  name={activeWorkshop.speaker?.name || 'Speaker'}
                />
              </motion.div>
            </div>

            {/* Workshop Details */}
            <div className="lg:col-span-2">
              <motion.div
                key={`workshop-${activeIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 rounded-2xl p-6 lg:p-8 upcoming-workspace-card"
              >
                {activeWorkshop.date && (
                  <div className="mb-6 upcoming-workshop-status">
                    <StatusBadge 
                      date={activeWorkshop.date} 
                      duration={activeWorkshop.duration} 
                    />
                  </div>
                )}
                
                <h2 className="text-3xl font-bold text-white mb-4 upcoming-workshop-title">
                  {activeWorkshop.title}
                </h2>
                
                <p className="text-white/80 mb-8 upcoming-workshop-description">
                  {activeWorkshop.description}
                </p>

                <div className="">
                  {isFutureWorkshop(activeWorkshop.date) ? (
                    
                    <Button 
                      className="flex-1 bg-[#473dc6] hover:bg-[#CAA3D6]/80 text-white
                               transition-all duration-300 register-button"
                    >
                      <Link to={activeWorkshop.workshopUrl} target='_blank'>Register Now</Link>
                      
                    </Button>
                    
                  ) : (
                    <Button 
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white
                               transition-all duration-300"
                    >
                      Watch Recording
                    </Button>
                  )}
                  {/* <Button 
                    variant="outline" 
                    className="flex-1 border-white/20 text-white hover:bg-white/10
                             transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Add to Calendar
                  </Button> */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section
        <div className="text-center mt-16 flex justify-center space-x-6">
          <Button 
            asChild
            className="bg-[#473DC6] hover:bg-[#CAA3D6] text-white px-8 py-4
                     transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <motion.a 
              href="/schedule" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              See Full Agenda
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </Button>

          <Button 
            asChild
            variant="outline"
            className="border-2 border-white/20 hover:border-[#CAA3D6] text-white 
                     hover:bg-white/10 px-8 py-4 transition-all duration-300"
          >
            <motion.a 
              href="/speakers" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              See All Speakers
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default WorkshopSpeakers;