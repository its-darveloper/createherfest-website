import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Calendar, Users, BookOpen } from 'lucide-react';

const WorkshopHero = () => {
  return (
    <section className="relative w-screen min-h-screen bg-gradient-to-b from-[#473dc6] via-[#4238b8] to-[#372dc6] overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(202,163,214,0.3)_0%,rgba(71,61,198,0)_60%)"
        style={{
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent)'
        }}
      />

      {/* Blob-like floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { 
            size: 'w-[500px] h-[500px]', 
            position: '-top-24 -left-24', 
            opacity: 'opacity-[0.07]',
            blur: 'blur-3xl',
            shape: `path('M259.5 42.5C338.1 42.5 401 105 401 183.5C401 262 334.5 328.5 256 328.5C177.5 328.5 115 262 115 183.5C115 105 180.9 42.5 259.5 42.5Z')`
          },
          { 
            size: 'w-[600px] h-[600px]', 
            position: 'top-1/4 -right-32', 
            opacity: 'opacity-[0.05]',
            blur: 'blur-2xl',
            shape: `path('M321.5 94.5C400.1 94.5 463 157 463 235.5C463 314 396.5 380.5 318 380.5C239.5 380.5 177 314 177 235.5C177 157 242.9 94.5 321.5 94.5Z')`
          },
          { 
            size: 'w-[700px] h-[700px]', 
            position: 'bottom-0 left-1/3', 
            opacity: 'opacity-[0.06]',
            blur: 'blur-3xl',
            shape: `path('M383.5 156.5C462.1 156.5 525 219 525 297.5C525 376 458.5 442.5 380 442.5C301.5 442.5 239 376 239 297.5C239 219 304.9 156.5 383.5 156.5Z')`
          }
        ].map((blob, index) => (
          <motion.div
            key={index}
            className={`absolute ${blob.size} ${blob.position} ${blob.opacity} ${blob.blur}
                       bg-gradient-to-br from-white to-[#caa3d6]/50`}
            initial="initial"
            animate="animate"
            variants={{
              initial: { 
                scale: 0.8,
                rotate: 0,
                opacity: 0
              },
              animate: {
                scale: [0.8, 1.1, 0.9],
                rotate: [0, 10, -10, 0],
                opacity: 1,
                transition: {
                  duration: 12 + index * 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }
            }}
            style={{
              clipPath: blob.shape
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(90deg, white 1px, transparent 0), linear-gradient(white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center py-32">
        <div className="w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
          {/* Partnership Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6 mb-24"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 blur-xl rounded-full" />
              <img 
                src="/google-women-techmakers.svg" 
                alt="Google Women Techmakers"
                className="relative h-10 mb-4"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full 
                          px-8 py-4 shadow-2xl hover:shadow-white/5 transition-shadow duration-300">
              <span className="text-white/90 text-sm font-medium">
                In Partnership with Google's Women Techmakers
              </span>
            </div>
          </motion.div>

          {/* Title Section */}
          <motion.div
            className="text-center mb-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-96 h-96 
                            bg-[#caa3d6] rounded-full opacity-20 blur-[100px]" />
              <h1 className="relative text-6xl md:text-8xl font-bold mb-12 tracking-tight">
                <span className="text-white drop-shadow-2xl">Workshop</span>
                <br />
                <span className="text-[#caa3d6] drop-shadow-2xl">Schedule</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Dive into transformative learning experiences designed to empower and inspire women in technology.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex items-center gap-8 mb-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              asChild
              className="group bg-white/90 hover:bg-white text-[#473dc6] 
                       font-medium rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]
                       hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]
                       transition-all duration-300 hover:scale-105
                       px-12 py-7 text-lg min-w-[180px]"
            >
              <Link to="https://form.jotform.com/243616450118149" className="flex items-center justify-center">
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="group bg-white/5 backdrop-blur-md border-2 border-white/20 text-white 
                       hover:bg-white/10 hover:border-white/30
                       font-medium rounded-full 
                       px-12 py-7 text-lg min-w-[180px]
                       transition-all duration-300 hover:scale-105
                       shadow-[0_0_20px_rgba(255,255,255,0.1)]
                       hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Learn More
              <Star className="ml-2 h-5 w-5 opacity-0 transition-all group-hover:opacity-100 group-hover:rotate-12" />
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            className="grid grid-cols-3 gap-16 md:gap-32 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { 
                icon: Calendar, 
                number: "20+", 
                label: "Workshops" 
              },
              { 
                icon: Users, 
                number: "30+", 
                label: "Speakers" 
              },
              { 
                icon: BookOpen, 
                number: "3", 
                label: "Tracks" 
              }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent 
                                rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col items-center">
                    <stat.icon className="w-10 h-10 text-white/70 mb-4" />
                    <div className="text-6xl font-bold text-white mb-4 
                                  bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                      {stat.number}
                    </div>
                    <div className="text-white/70 text-base font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopHero;