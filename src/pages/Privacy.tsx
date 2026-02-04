import { ArrowLeft } from 'lucide-react';

export function Privacy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <a href="#/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-12">
          <img src="/logo.png" alt="Flamma" className="w-12 h-12 object-contain mb-6" />
          <h1 className="font-display text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: January 2025</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300 leading-relaxed">
            At FlammaLabs Inc. ("Flamma", "we", "us", or "our"), we are committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
            you use our website, platform, and services (collectively, the "Services").
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">1. Information We Collect</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong>Account Information:</strong> Name, email address, company name, and password when you create an account.</li>
            <li><strong>Payment Information:</strong> Credit card details and billing address processed through our secure payment providers.</li>
            <li><strong>Content Data:</strong> Video files, images, and creative assets you upload to our platform.</li>
            <li><strong>Campaign Data:</strong> Advertising performance metrics, targeting parameters, and campaign settings.</li>
            <li><strong>Communication Data:</strong> Messages, support requests, and feedback you send us.</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">2. How We Use Your Information</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Provide, maintain, and improve our Services</li>
            <li>Process transactions and send related information</li>
            <li>Train and improve our AI models for better creative generation</li>
            <li>Personalize your experience and deliver customized content</li>
            <li>Communicate with you about updates, security alerts, and support</li>
            <li>Monitor and analyze usage patterns and trends</li>
            <li>Detect, prevent, and address technical issues and fraud</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">3. AI Model Training</h2>
          <p className="text-gray-300 leading-relaxed">
            Your content may be used to train and improve our AI models. We implement strict safeguards 
            to ensure your proprietary content is not exposed to other users. Aggregated, anonymized data 
            may be used to improve our algorithms and creative generation capabilities.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">4. Information Sharing</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (e.g., cloud hosting, payment processing, analytics).</li>
            <li><strong>Advertising Platforms:</strong> When you choose to publish content through our platform to Meta, Google, TikTok, or other ad networks.</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or government request.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">5. Data Security</h2>
          <p className="text-gray-300 leading-relaxed">
            We implement industry-standard security measures to protect your information, including encryption 
            at rest and in transit, access controls, and regular security audits. However, no method of 
            transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">6. Your Rights</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Access, correct, or delete your personal information</li>
            <li>Object to or restrict certain processing activities</li>
            <li>Request a copy of your data in a portable format</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">7. Data Retention</h2>
          <p className="text-gray-300 leading-relaxed">
            We retain your information for as long as your account is active or as needed to provide our Services. 
            You may request deletion of your account and associated data at any time. Some information may be 
            retained for legal, accounting, or security purposes.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">8. Children's Privacy</h2>
          <p className="text-gray-300 leading-relaxed">
            Our Services are not intended for children under 13. We do not knowingly collect personal information 
            from children under 13. If you believe we have collected information from a child under 13, please 
            contact us immediately.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">9. Changes to This Policy</h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any material changes 
            by posting the new policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">10. Contact Us</h2>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-300 mt-2">
            <strong>Email:</strong> privacy@flamma.ai<br />
            <strong>Address:</strong> FlammaLabs Inc., San Francisco, CA
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gray-600 text-sm text-center">
            © 2025 FlammaLabs Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
