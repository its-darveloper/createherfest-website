import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Heart, Users, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Immersive Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#473dc6] overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(202,163,214,0.4) 0%, rgba(71,61,198,0) 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(93,84,212,0.4) 0%, rgba(71,61,198,0) 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [-50, 0, -50],
            y: [50, 0, 50],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="relative container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-medium tracking-wider uppercase mb-6 text-white/70">
              About Us
            </span>
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              Empowering Women in Tech Through Innovation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Join us in our mission to bridge the gender gap in emerging tech fields
              through hands-on learning, collaboration, and innovation.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight className="w-8 h-8 text-white/50 rotate-90" />
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#473dc6] mb-6">Our Mission</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed">
                  To bridge the gender gap in tech by providing hands-on training in 
                  Artificial Intelligence, Blockchain, AR/VR, and other cutting-edge fields, 
                  fostering the next generation of women tech innovators.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#473dc6] mb-6">Our Vision</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed">
                  A future where the tech industry truly reflects global diversity, 
                  with women equally represented in leadership and innovation—creating 
                  a more equitable digital future for all.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#473dc6] mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide our mission</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Heart,
                title: "Inclusion",
                description: "Creating spaces where every voice matters and diverse perspectives thrive."
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Pushing boundaries and embracing emerging technologies to drive change."
              },
              {
                icon: Users,
                title: "Community",
                description: "Building strong networks of support and collaboration."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <value.icon className="w-12 h-12 text-[#473dc6] mb-6" />
                <h3 className="text-2xl font-bold text-[#473dc6] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#473dc6] mb-4">Meet Our Founders</h2>
            <p className="text-xl text-gray-600">The visionaries behind CreateHER Fest</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {[
              {
                name: "Adriann Guy",
                role: "Co-Founder",
                image: "public/speakers/amyruss.png",
                bio: "Tech innovator passionate about creating pathways for women in emerging technologies.",
                links: {
                  linkedin: "#",
                  twitter: "#"
                }
              },
              {
                name: "Darlyze Calixte",
                role: "Co-Founder",
                image: "public/speakers/amyruss.png",
                bio: "Community builder focused on fostering inclusive spaces in the tech industry.",
                links: {
                  linkedin: "#",
                  twitter: "#"
                }
              }
            ].map((founder, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative mb-8 aspect-square">
                  <div className="absolute inset-0 bg-[#473dc6] rounded-3xl rotate-6 transform 
                               group-hover:rotate-12 transition-transform duration-300" />
                  <img 
                    src={founder.image}
                    alt={founder.name}
                    className="relative z-10 w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#473dc6] mb-2">{founder.name}</h3>
                  <p className="text-[#caa3d6] font-medium mb-4">{founder.role}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{founder.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="relative py-32 bg-[#473dc6] overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("/pattern-grid.svg")',
            backgroundSize: '30px 30px'
          }}
          animate={{
            y: [0, -30],
            x: [0, 30]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-xl mb-12 text-white/90">
                Be part of the movement to transform tech. Volunteer, mentor, or partner
                with us to create more opportunities for women in emerging technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  className="bg-white text-[#473dc6] hover:bg-white/90 
                           px-8 py-6 text-lg rounded-full"
                >
                  Become a Volunteer
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 
                           px-8 py-6 text-lg rounded-full"
                >
                  Partner With Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;