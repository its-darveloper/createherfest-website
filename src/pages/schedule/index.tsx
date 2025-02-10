import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format, parseISO, differenceInDays } from 'date-fns';
import { 
  Search, 
  X, 
  ChevronDown, 
  ChevronUp,
  Clock,
  Timer,
  Calendar,
  Play
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

import { getWorkshops, urlFor } from '@/lib/sanity';
import { Workshop } from '@/types/sanity';
import WorkshopHero from './components/WorkshopHero';

// Workshop Card Component
const WorkshopCard: React.FC<{ workshop: Workshop }> = ({ workshop }) => {
  // Check if workshop is in the past
  const isPast = new Date(workshop.date) < new Date();
  
  // Format time until workshop
  const getTimeStatus = () => {
    const now = new Date();
    const workshopDate = parseISO(workshop.date);
    const diffInDays = differenceInDays(workshopDate, now);
    
    if (isPast) return 'Past Event';
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Tomorrow';
    if (diffInDays < 7) return `In ${diffInDays} days`;
    return format(workshopDate, 'MMM d');
  };

  return (
    <motion.div
      layout
      className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden
                 hover:border-white/30 transition-all duration-300 relative workshop-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Status Badge */}
      <div className="absolute top-3 right-3 z-10">
        <div className={`is-past px-2 py-1 rounded-full text-xs font-medium ${
          isPast ? 'bg-white/10 text-white/70' : 'bg-[#CAA3D6]/20 text-[#CAA3D6]'
        }`}>
          {getTimeStatus()}
        </div>
      </div>

      {/* Track Badge */}
      <div className="absolute top-3 left-3 z-10 workshop-track-badge">
        <div className="bg-[#473DC6]/30 text-white/90 px-2 py-1 rounded-full text-xs workshop-track">
          {workshop.track ? workshop.track.replace('-', ' ').toUpperCase() : 'Workshop'}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 pt-14">
        <div className="space-y-4 workshop-content">
          {/* Title */}
          <h3 className="text-lg font-semibold text-white leading-tight workshop-title">
            {workshop.title}
          </h3>
          
          {/* Speaker Info */}
          {workshop.speaker && (
            <div className="flex items-center space-x-3 speaker-info">
              {workshop.speaker.image ? (
                <img 
                  src={urlFor(workshop.speaker.image).width(40).height(40).url()} 
                  alt={workshop.speaker.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#473DC6]/30 flex items-center justify-center">
                  <span className="text-white/70 text-sm">{workshop.speaker.name[0]}</span>
                </div>
              )}
              <div>
                <p className="text-white/90 text-sm font-medium">
                  {workshop.speaker.name}
                </p>
                <p className="text-white/60 text-xs">
                  {workshop.speaker.title} {workshop.speaker.company && `@ ${workshop.speaker.company}`}
                </p>
              </div>
            </div>
          )}

          {/* Time & Duration */}
          <div className="flex items-center justify-between text-sm text-white/70 workshop-meta">
            <div className="flex items-center space-x-2 workshop-time">
              <Clock className="w-4 h-4" />
              <span>{format(parseISO(workshop.date), 'h:mm a')}</span>
            </div>
            <div className="flex items-center space-x-2 workshop-duration">
              <Timer className="w-4 h-4" />
              <span>{workshop.duration} mins</span>
            </div>
          </div>

          {/* Description */}
          <div className="border-t border-white/10 pt-4 workshop-description">
            <p className="text-white/80 text-sm leading-relaxed">
              {workshop.description}
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            className={`w-full h-10 ${
              isPast 
                ? 'bg-white/10 hover:bg-white/20 text-white' 
                : 'bg-[#473DC6] hover:bg-[#473DC6]/90 text-white'
            }`}
          >
            {isPast ? (
              <div className="flex items-center justify-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Watch Recording</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Register Now</span>
              </div>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

// Main Workshop Schedule Page
const WorkshopSchedulePage: React.FC = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');

  // Fetch workshops on component mount
  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const fetchedWorkshops = await getWorkshops();
        setWorkshops(fetchedWorkshops);
      } catch (error) {
        console.error('Error fetching workshops:', error);
      }
    };

    fetchWorkshops();
  }, []);

  // Tracks from workshop data
  const tracks = ['ai-ml', 'blockchain', 'ar-vr'];

  // Filtered and sorted workshops
  const filteredWorkshops = useMemo(() => {
    return workshops
      .filter(workshop => 
        (selectedTrack === 'all' || workshop.track === selectedTrack) &&
        (searchTerm 
          ? workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (workshop.speaker?.name.toLowerCase().includes(searchTerm.toLowerCase()) || false)
          : true)
      )
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [workshops, selectedTrack, searchTerm]);

  return (
    <div className="bg-gradient-to-br from-[#150E60] to-[#4037B5] min-h-screen">
      {/* Hero Section */}
      <WorkshopHero />

      {/* Workshop Schedule */}
      <div className="container mx-auto px-4 py-16 max-w-7xl" id="workshops">
        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <input 
              type="text"
              placeholder="Search workshops by title or speaker"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-full 
                         bg-white/10 backdrop-blur-sm 
                         border border-white/20 
                         text-white placeholder-white/50
                         focus:outline-none focus:ring-2 focus:ring-[#CAA3D6]"
            />
            {searchTerm ? (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                <X className="text-white/50 w-5 h-5" />
              </button>
            ) : (
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50" />
            )}
          </div>

          {/* Track Filter */}
          <Select 
            value={selectedTrack}
            onValueChange={(value) => setSelectedTrack(value)}
          >
            <SelectTrigger className="w-full bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <SelectValue placeholder="Filter by Track" />
            </SelectTrigger>
            <SelectContent className="bg-[#4037B5] border-white/20 text-white">
              <SelectItem value="all">All Tracks</SelectItem>
              {tracks.map(track => (
                <SelectItem key={track} value={track}>
                  {track.replace('-', ' ').toUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Workshops Grid */}
        {filteredWorkshops.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredWorkshops.map(workshop => (
              <WorkshopCard 
                key={workshop._id}
                workshop={workshop}
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center text-white/70 py-12">
            No workshops found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkshopSchedulePage;