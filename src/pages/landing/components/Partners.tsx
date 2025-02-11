import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getPartners, urlFor } from '@/lib/sanity';
import type { Partner } from '@/types/sanity';

const PartnersSection = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const data = await getPartners();
        setPartners(data);
      } catch (error) {
        console.error('Error fetching partners:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPartners();
  }, []);

  // Extend partners array for continuous scrolling
  const extendedPartners = [...partners, ...partners, ...partners, ...partners];

  if (isLoading) {
    return (
      <section className="relative w-full bg-[#150E60] overflow-hidden partners-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <div className="animate-pulse bg-white/10 w-32 h-8 mx-auto rounded-full mb-6" />
            <div className="animate-pulse bg-white/10 w-96 h-12 mx-auto rounded mb-6" />
            <div className="animate-pulse bg-white/10 w-80 h-6 mx-auto rounded" />
          </div>
          <div className="flex justify-center space-x-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse bg-white/10 w-40 h-32 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-[#150E60] overflow-hidden partners-section section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-[#473DC6]/20 px-4 py-2 rounded-full mb-6 section-tag-container">
            <span className="text-[#CAA3D6] text-xs uppercase tracking-widest section-tag">
              Our Partners
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 section-title">
            Supported by Innovative Leaders
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto section-description">
            Collaborating with forward-thinking organizations to bridge the gender gap in emerging tech fields
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="relative w-full overflow-hidden mb-24">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#150E60] via-[#150E60]/90 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#150E60] via-[#150E60]/90 to-transparent z-10" />

          <motion.div
            className="flex"
            animate={{
              x: [0, `-${partners.length * 50}%`],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            <div className="flex">
              {extendedPartners.map((partner, index) => (
                <div 
                  key={`${partner._id}-${index}`}
                  className="flex items-center justify-center mx-8 md:mx-16 w-40 md:w-[200px] h-32 
                    bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm 
                    transition-all duration-300 hover:bg-white/10 hover:border-white/20 partner-logo"
                >
                  {partner.website ? (
                    <a 
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center"
                      aria-label={`Visit ${partner.name}'s website`}
                    >
                      <img
                        src={urlFor(partner.logo).width(160).height(80).url()}
                        alt={partner.name}
                        className="w-auto h-12 object-contain brightness-0 invert opacity-60 
                                 transition-opacity duration-300 hover:opacity-100"
                      />
                    </a>
                  ) : (
                    <img
                      src={urlFor(partner.logo).width(160).height(80).url()}
                      alt={partner.name}
                      className="w-auto h-12 object-contain brightness-0 invert opacity-60"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-white/70 mb-6 text-lg partner-cta">
            Interested in shaping the future of tech?
          </p>
          <a 
            href="https://tally.so/r/nrdyaN" 
            className="inline-flex items-center group text-white text-xl hover:text-[#CAA3D6] transition-all duration-300"
          >
            <span className="border-b-2 border-white/30 group-hover:border-[#CAA3D6] 
              pb-1 transition-all duration-300 mr-3">
              Explore Partnership Opportunities
            </span>
            <span className="transform group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;