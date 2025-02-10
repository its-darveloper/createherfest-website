import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  Linkedin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/createherfest' },
    { icon: Facebook, url: 'https://facebook.com/createherfest' },
    { icon: Linkedin, url: 'https://linkedin.com/company/createherfest' }
  ];

  const quickLinks = {
    'CreateHER': [
      { label: 'About Us', url: '/about' },
      { label: 'Event Series', url: '/events' },
      { label: 'Our Partners', url: '/partners' },
      { label: 'Impact Report', url: '/impact' }
    ],
    'Engage': [
      { label: 'Register', url: '/register' },
      { label: 'Volunteer', url: '/volunteer' },
      { label: 'Contact Us', url: '/contact' },
      { label: 'Apply to Teach', url: '/teach' }
    ],
    'Resources': [
      { label: 'Code of Conduct', url: '/code-of-conduct' },
      { label: 'Privacy Policy', url: '/privacy' },
      { label: 'Terms of Use', url: '/terms' },
      { label: 'FAQ Center', url: '/faq' }
    ]
  };

  return (
    <footer className="bg-[#0A083D] text-white relative overflow-hidden py-8 footer">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/10" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-30 footer-content">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
                CreateHER Fest
              </span>
            </div>
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
              Bridging the gender gap in emerging technologies through innovation, learning, and empowerment.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white 
                             transition-all duration-300 
                             bg-white/5 rounded-lg p-3 
                             hover:bg-white/10
                             focus:outline-none focus:ring-2 focus:ring-purple-400"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: index % 2 === 0 ? 2 : -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Follow us on ${social.icon.displayName}`}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(quickLinks).map(([category, links]) => (
            <div key={category} className="space-y-6">
              <h4 className="text-xl font-semibold mb-4 text-purple-300 uppercase tracking-wide">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.a 
                      href={link.url} 
                      className="group flex items-center text-white/80 hover:text-white 
                                 transition-all duration-300 text-lg
                                 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:rounded-lg"
                      whileHover={{ 
                        x: 8,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {link.label} {/* Bullet point removed */}
                      <ArrowRight 
                        className="ml-2 h-4 w-4 opacity-0 
                                   group-hover:opacity-100 
                                   transition-all duration-300
                                   text-purple-300" 
                      />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 footer-bottom">
          <div className="text-center md:text-left">
            <p className="text-white/70 text-sm uppercase tracking-wider font-medium">
              Discover · Design · Deliver
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/60 text-sm text-center">
              © {new Date().getFullYear()} CreateHER Fest.<br/>
              Developed by Darveloper
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;