
import { Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#150e60] privacy-section">
      {/* Header Section */}
      <div className="relative pt-24 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 privacy-title">
            Privacy Policy
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto privacy-description">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-24 privacy-content">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-6 md:p-8 space-y-8">
            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#CAA3D6] mb-2">
                    Personal Information
                  </h3>
                  <p className="text-white/70">
                    We may collect personal information such as your name, email address, and contact details when you register for our events, subscribe to our newsletters, or engage in community activities.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#CAA3D6] mb-2">
                    Usage Data
                  </h3>
                  <p className="text-white/70">
                    We collect data on how you interact with our website or event platforms, such as pages visited, links clicked, and the duration of participation.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                <li>To facilitate your participation in CreateHER Fest events.</li>
                <li>To send you relevant information about upcoming events, workshops, and opportunities.</li>
                <li>For internal analytics to improve our services and events.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            {/* Data Sharing and Disclosure */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Data Sharing and Disclosure
              </h2>
              <p className="text-white/70 mb-4">
                We will not sell or rent your personal information to third parties. However, we may share your information with:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#CAA3D6] mb-2">
                    Service Providers
                  </h3>
                  <p className="text-white/70">
                    To help us deliver services (e.g., payment processing, email marketing).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#CAA3D6] mb-2">
                    Sponsors and Partners
                  </h3>
                  <p className="text-white/70">
                    With your consent, we may share your information with sponsors who provide resources or opportunities related to the event.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#CAA3D6] mb-2">
                    Legal Compliance
                  </h3>
                  <p className="text-white/70">
                    We may disclose your information if required by law or to protect the rights and safety of our community.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Data Security
              </h2>
              <p className="text-white/70">
                We prioritize the security of your personal data and apply appropriate technical and organizational measures to safeguard it in accordance with GDPR requirements. While we strive to protect your information, no system is entirely immune to risks, and therefore we cannot guarantee the complete security of your data.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Your Rights
              </h2>
              <p className="text-white/70 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/70">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt out of marketing communications.</li>
                <li>Request that we stop using your data for specific purposes.</li>
              </ul>
              <p className="text-white/70 mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:info@createherfest.com" className="text-[#CAA3D6] hover:text-[#473DC6] transition-colors">
                  info@createherfest.com
                </a>
              </p>
            </section>

            {/* Updates to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Updates to This Policy
              </h2>
              <p className="text-white/70">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-[#473DC6]/20 rounded-xl p-6 privacy-contact">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#CAA3D6]" />
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Questions?
                  </h2>
                  <p className="text-white/70">
                    For questions regarding this Privacy Policy, contact us at{' '}
                    <a href="mailto:info@createherfest.com" className="text-[#CAA3D6] hover:text-[#473DC6] transition-colors">
                      info@createherfest.com
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;