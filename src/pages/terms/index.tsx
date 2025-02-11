const TermsAndConditions = () => {
  const terms = [
    {
      title: "Event Participation",
      content: [
        {
          subtitle: "Registration",
          text: "You must register for CreateHER Fest to participate in workshops, the Idea-thon, and Hackathon. You agree to provide accurate and complete information during registration."
        },
        {
          subtitle: "Eligibility",
          text: "CreateHER Fest is open to individuals who meet the event's eligibility requirements. Participation may be limited based on specific event rules or sponsorship conditions."
        },
        {
          subtitle: "Code of Conduct",
          text: "All participants must follow our Code of Conduct, which promotes respect, inclusion, and professional behavior. Harassment or inappropriate conduct will not be tolerated and may result in removal from the event."
        }
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Your Content",
          text: "Any projects or materials you create during the event remain your intellectual property. However, by submitting content during the event, you grant CreateHER Fest and its partners and sponsors a non-exclusive license to showcase or promote your work."
        },
        {
          subtitle: "Event Materials",
          text: "Materials provided during the event (e.g., workshops, presentations) are the intellectual property of the respective facilitators and are for personal use only."
        }
      ]
    },
    {
      title: "Event Rules",
      content: [
        {
          subtitle: "Team Formation",
          text: "Teams may be formed during the Idea-thon or Hackathon, and all team members must be registered participants. Teams must comply with event guidelines."
        },
        {
          subtitle: "Submissions",
          text: "Projects submitted for the Hackathon must be your original work. Plagiarism or the use of copyrighted material without permission is prohibited."
        }
      ]
    },
    {
      title: "Liability",
      content: [
        {
          subtitle: "No Warranty",
          text: "CreateHER Fest is provided \"as is,\" and we make no guarantees about the availability or quality of services."
        },
        {
          subtitle: "Limitation of Liability",
          text: "CreateHER Fest and its organizers are not responsible for any damages, loss, or injury resulting from your participation in the event."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#150e60] conduct">
      {/* Header */}
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider">
          TERMS & CONDITIONS
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Terms Grid */}
          <div className="space-y-16">
            {terms.map((section, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start term-category">
                <div className="lg:col-span-3">
                  <h2 className="text-xl font-medium text-white">
                    {section.title}
                  </h2>
                </div>
                <div className="lg:col-span-9 space-y-8">
                  {section.content.map((item, i) => (
                    <div key={i}>
                      <h3 className="text-lg font-semibold text-[#CAA3D6] mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-lg text-white/80 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="mt-24 space-y-16">
            {/* Changes to the Event */}
            <div className="bg-white/5 rounded-3xl p-10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Changes to the Event
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                CreateHER Fest reserves the right to modify or cancel event schedules, sessions, or activities at any time. We will notify participants of any significant changes.
              </p>
            </div>

            {/* Governing Law */}
            <div className="bg-white/5 rounded-3xl p-10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Governing Law
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                These Terms & Conditions are governed by and construed in accordance with the laws of USA/FL.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-[#473DC6]/20 rounded-3xl p-10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                For questions regarding these Terms & Conditions, please contact us at{' '}
                <a 
                  href="mailto:info@createherfest.com" 
                  className="text-[#CAA3D6] hover:text-white transition-colors"
                >
                  info@createherfest.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;