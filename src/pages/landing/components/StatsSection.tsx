// src/pages/landing/components/StatsSection.tsx
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

interface Stat {
  number: number;
  label: string;
  suffix: string;
}

const stats: Stat[] = [
  { number: 400, label: "Women & allies registered", suffix: "+" },
  { number: 70, label: "Countries represented", suffix: "+" },
  { number: 30, label: "Social impressions", suffix: "k+" }
];

const Counter: React.FC<CounterProps> = ({ value, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalDuration = duration * 1000;
      const incrementTime = totalDuration / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#150E60] py-32 stats-section border-y border-white/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block bg-[#473DC6]/20 px-4 py-2 rounded-full mb-6 section-tag-container"
          >
            <span className="text-[#CAA3D6] text-xs uppercase tracking-widest section-tag">
              Our Impact
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 section-title"
          >
            Making Global Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 max-w-3xl mx-auto section-description"
          >
            Join a growing community of tech innovators and change-makers from around the world
          </motion.p>
        </div>

        {/* Stats Container */}
        <div className="flex flex-wrap justify-center items-stretch gap-8 md:gap-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex-1 text-center group relative"
            >
              <div className="relative p-8 rounded-2xl bg-[#473DC6]/10 border border-[#473DC6]/20 
                           hover:bg-[#473DC6]/20 hover:border-[#473DC6]/30 
                           transition-all duration-300 transform hover:-translate-y-1
                           flex flex-col justify-center min-h-[200px]"
              >
                <motion.div
                  className="relative mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-5xl md:text-6xl font-bold text-white mb-4">
                    <Counter value={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/70 text-base md:text-lg font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;