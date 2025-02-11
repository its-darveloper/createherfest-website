import { Seo } from "@/components/Seo";

const CodeOfConduct = () => {
  const guidelines = [
    {
      title: "Our ultimate goal",
      content: "CreateHER Fest is dedicated to empowering women and non-binary individuals in technology, fostering innovation, collaboration, and inclusion. We exist to create a safe enviornment, fostering inclusivity and access while encouraging collaboration and learning. We are committed to creating an excellent experience for everyone, regardless of gender identity and expression, sexual orientation, disabilities, neurodiversity, physical appearance, body size, ethnicity, nationality, race, age, religion, or other protected category. We expect all attendees, speakers, sponsors, and organizers to uphold the values of respect, diversity, and inclusion."
    },
    {
      title: "Treat everyone with respect",
      content: "Participate while acknowledging that everyone deserves to be here. Each of us has the right to enjoy our experience without fear of harassment, discrimination, or condescension, whether blatant or via micro-aggressions."
    },
    {
      title: "Be mindful of your words",
      content: "Avoid discriminatory, offensive, or harmful language, including microaggressions. Please be considerate of cultural differences and sensitivities. Jokes shouldn't demean others. Consider what you are saying and how it would feel if it were said to or about you."
    },
    {
      title: "Respect personal boundaries",
      content: "Always ask for consent before sharing private information, or taking photos of other participants. Honor requests for privacy and confidentiality."
    },
    {
      title: "Support and uplift others",
      content: "This event is about collaboration over competition. Offer constructive feedback, mentor fellow participants, and create an environment where everyone can grow, innovate, and succeed."
    },
    {
      title: "Share knowledge freely",
      content: "Workshops, discussions, and presentations are opportunities to learn and share insights. Encourage the exchange of ideas and support participants who may need help understanding new concepts."
    },
    {
      title: "Inclusive technology and design",
      content: "Be mindful of designing and coding solutions that are accessible to people with disabilities or from marginalized communities. Strive to create technology that empowers and benefits all."
    }
  ];

  return (
    <>
    <Seo title="Code of Conduct" description="Our commitment to creating a safe, inclusive, and respectful environment for all participants at CreateHER Fest." />
    <div className="min-h-screen bg-[#150e60] conduct">
      {/* Header - adjusted padding and spacing */}
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider conduct-title">
          CODE OF CONDUCT
        </h1>
      </div>

      {/* Main Content - adjusted max width and padding */}
      <div className="container mx-auto px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Guidelines Grid - adjusted grid and spacing */}
          <div className="space-y-16">
            {guidelines.map((guideline, index) => (
              <div 
                key={index}
                className="grid lg:grid-cols-12 gap-6 lg:gap-16 items-start guideline"
              >
                <div className="lg:col-span-3">
                  <h2 className="text-xl font-medium text-white lg:text-right">
                    {guideline.title}
                  </h2>
                </div>
                <div className="lg:col-span-9">
                  <p className="text-lg text-white/80 leading-relaxed">
                    {guideline.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Sections - adjusted spacing and styling */}
          <div className="mt-24 space-y-16">
            {/* Zero Tolerance Section */}
            <div className="rounded-3xl p-10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Zero Tolerance for Harassment
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Harassment of any kind, including but not limited to verbal abuse, discriminatory jokes, unwanted sexual attention, and physical intimidation, is strictly prohibited. This applies to all forms of communication and interactions, online platforms, or messaging apps.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Harassment includes, but is not limited to:
                </h3>
                <ul className="list-disc list-inside text-lg text-white/80 space-y-3 leading-relaxed">
                  <li>Verbal language that reinforces social structures of domination</li>
                  <li>Sexual imagery in public spaces</li>
                  <li>Deliberate intimidation, stalking, or following</li>
                  <li>Harassing photography or recording</li>
                  <li>Sustained disruption of talks or other events</li>
                  <li>Offensive verbal language</li>
                  <li>Inappropriate physical contact</li>
                  <li>Unwelcome sexual attention</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-[#473DC6]/20 rounded-3xl p-10 privacy-contact">
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                If you have any concerns or need to report a violation, please contact us at{' '}
                <a 
                  href="mailto:info@createherfest.com" 
                  className="text-[#CAA3D6] hover:text-white transition-colors"
                >
                  info@createherfest.com
                </a>
                {' '}or approach one of the event moderators in person or on the event platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CodeOfConduct;