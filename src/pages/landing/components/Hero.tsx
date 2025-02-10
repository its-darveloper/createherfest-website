// Update your Hero.tsx to remove the stats section
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-screen min-h-screen overflow-hidden hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("public/background.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1
        }}
      />

      {/* Overlay Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#473dc6]/60 via-[#4238b8]/60 to-[#372dc6]/60 z-[1]"
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] z-[3]"
        style={{
          backgroundImage: 'linear-gradient(90deg, white 1px, transparent 0), linear-gradient(white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center py-32 hero-content">
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
                className="relative h-16 md:h-20 mb-4 max-w-[280px] md:max-w-[320px] w-auto"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full 
                          px-8 py-4 shadow-2xl hover:shadow-white/5 transition-shadow duration-300 section-tag-container flex flex-wrap justify-center text-center">
              <span className="text-white/90 text-sm font-medium section-tag">
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
                <span className="text-white drop-shadow-2xl">Create</span>
                <span className="text-[#caa3d6] drop-shadow-2xl">HER</span>
                <br />
                <span className="text-white drop-shadow-2xl">Fest</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed section-description">
              Join us in bridging the gender gap in emerging tech fields through hands-on
              learning, collaboration, and innovation.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex items-center gap-8 cta-section"
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
              <Link to="/about" className="flex items-center justify-center">
                Learn More
              </Link>
              <Star className="ml-2 h-5 w-5 opacity-0 transition-all group-hover:opacity-100 group-hover:rotate-12" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;