import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Privacy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-12">
          <img src="/logo.png" alt="Flamma" className="w-12 h-12 object-contain mb-6" />
          <h1 className="font-display text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: February 2026</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300 leading-relaxed">
            At FlammaLabs Inc. ("Flamma", "we", "us", or "our"), we are committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
            you use our website (goflamma.ai), platform, and services (collectively, the "Services").
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            This Privacy Policy applies to all users of our Services, including advertisers, marketers, and 
            visitors to our website. By using our Services, you consent to the data practices described in 
            this Privacy Policy.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">1. Information We Collect</h2>
          
          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">1.1 Information You Provide</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong>Account Information:</strong> Name, email address, company name, job title, phone number, and password when you create an account.</li>
            <li><strong>Payment Information:</strong> Credit card details, billing address, and transaction history processed through our secure payment providers (Stripe).</li>
            <li><strong>Content Data:</strong> Video files, images, audio files, and creative assets you upload to our platform.</li>
            <li><strong>Campaign Data:</strong> Advertising performance metrics, targeting parameters, audience segments, and campaign settings.</li>
            <li><strong>Communication Data:</strong> Messages, support requests, feedback, and survey responses.</li>
          </ul>

          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">1.2 Information Collected Automatically</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            When you access our Services, we automatically collect:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers, and hardware model.</li>
            <li><strong>Usage Data:</strong> Pages visited, features used, time spent on pages, click patterns, and navigation paths.</li>
            <li><strong>Log Data:</strong> Access times, error logs, referring URLs, and search queries.</li>
            <li><strong>Location Data:</strong> General geographic location based on IP address.</li>
          </ul>

          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">1.3 Information from Third Parties</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            We may receive information from third parties, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong>Advertising Platforms:</strong> Campaign performance data from Meta (Facebook/Instagram), Google Ads, TikTok, and other connected platforms.</li>
            <li><strong>Analytics Providers:</strong> Website traffic and user behavior data.</li>
            <li><strong>Business Partners:</strong> Lead information from marketing partners with your consent.</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">2. How We Use Your Information</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong>Service Delivery:</strong> Provide, maintain, and improve our AI-powered creative generation and optimization Services.</li>
            <li><strong>Account Management:</strong> Create and manage your account, authenticate users, and provide customer support.</li>
            <li><strong>Payment Processing:</strong> Process transactions, send invoices, and manage billing.</li>
            <li><strong>AI Training:</strong> Train and improve our AI models for better creative generation (with safeguards to protect proprietary content).</li>
            <li><strong>Personalization:</strong> Customize your experience and deliver relevant content and recommendations.</li>
            <li><strong>Communication:</strong> Send transactional emails, product updates, security alerts, and marketing communications (with opt-out options).</li>
            <li><strong>Analytics:</strong> Monitor and analyze usage patterns, trends, and platform performance.</li>
            <li><strong>Security:</strong> Detect, prevent, and address fraud, abuse, and security issues.</li>
            <li><strong>Legal Compliance:</strong> Comply with legal obligations, enforce our terms, and protect our rights.</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">3. Cookies and Tracking Technologies</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to collect and store information. These include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., session management, authentication).</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (e.g., Google Analytics).</li>
            <li><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness.</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            You can control cookies through your browser settings. However, disabling certain cookies may limit 
            your ability to use some features of our Services.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">4. Information Sharing and Disclosure</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>We do not sell your personal information.</strong> We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, including:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Cloud hosting (Amazon Web Services)</li>
                <li>Payment processing (Stripe)</li>
                <li>Analytics (Google Analytics, Mixpanel)</li>
                <li>Customer support tools</li>
                <li>Email delivery services</li>
              </ul>
            </li>
            <li><strong>Advertising Platforms:</strong> When you connect your accounts or publish content through our platform to Meta, Google, TikTok, Snapchat, or other ad networks, we share necessary data to enable those integrations.</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, subpoena, or government request.</li>
            <li><strong>Safety and Security:</strong> To protect the rights, property, or safety of Flamma, our users, or the public.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, reorganization, or sale of assets, your information may be transferred as a business asset.</li>
            <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information.</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">5. AI Model Training</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Your content may be used to train and improve our AI models. We implement the following safeguards:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Proprietary content is never exposed to other users or used to generate content for competitors.</li>
            <li>Aggregated, anonymized data may be used to improve our algorithms and creative generation capabilities.</li>
            <li>You can opt-out of AI training by contacting us at privacy@goflamma.ai.</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">6. Data Security</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We implement industry-standard security measures to protect your information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Encryption of data in transit (TLS/SSL) and at rest (AES-256)</li>
            <li>Secure data centers with physical access controls</li>
            <li>Regular security audits and penetration testing</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Employee security training and background checks</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute 
            security, and you transmit data at your own risk.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">7. Data Retention</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We retain your information for as long as:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Your account is active</li>
            <li>Needed to provide our Services</li>
            <li>Required by legal, accounting, or regulatory obligations</li>
            <li>Necessary to resolve disputes or enforce agreements</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            You may request deletion of your account and associated data at any time. Upon account deletion, 
            we will remove your personal data within 30 days, except where retention is required by law.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">8. Your Privacy Rights</h2>
          
          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">8.1 General Rights</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong>Access:</strong> Request a copy of your personal data.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data ("right to be forgotten").</li>
            <li><strong>Portability:</strong> Request a copy of your data in a machine-readable format.</li>
            <li><strong>Objection:</strong> Object to certain processing activities.</li>
            <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances.</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent.</li>
            <li><strong>Opt-Out:</strong> Opt-out of marketing communications at any time.</li>
          </ul>

          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">8.2 California Residents (CCPA/CPRA)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            California residents have additional rights under the California Consumer Privacy Act (CCPA) and 
            California Privacy Rights Act (CPRA):
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Right to know what personal information is collected, used, shared, or sold</li>
            <li>Right to delete personal information</li>
            <li>Right to opt-out of the sale or sharing of personal information</li>
            <li>Right to non-discrimination for exercising privacy rights</li>
            <li>Right to correct inaccurate personal information</li>
            <li>Right to limit use of sensitive personal information</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            We do not sell personal information. To exercise your rights, contact us at privacy@goflamma.ai.
          </p>

          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">8.3 European Economic Area (GDPR)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            If you are in the EEA, UK, or Switzerland, you have rights under the General Data Protection 
            Regulation (GDPR):
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>All rights listed above in Section 8.1</li>
            <li>Right to lodge a complaint with a supervisory authority</li>
            <li>Right to withdraw consent at any time</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            <strong>Legal Basis for Processing:</strong> We process your data based on: (a) your consent, 
            (b) performance of a contract, (c) compliance with legal obligations, and (d) our legitimate 
            business interests.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">9. International Data Transfers</h2>
          <p className="text-gray-300 leading-relaxed">
            Your information may be transferred to and processed in countries other than your country of 
            residence, including the United States. These countries may have different data protection laws. 
            We implement appropriate safeguards (such as Standard Contractual Clauses) to ensure your data 
            is protected in accordance with this Privacy Policy.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">10. Children's Privacy</h2>
          <p className="text-gray-300 leading-relaxed">
            Our Services are not intended for children under 16 years of age. We do not knowingly collect 
            personal information from children under 16. If you are a parent or guardian and believe your 
            child has provided us with personal information, please contact us immediately at privacy@goflamma.ai. 
            If we discover that we have collected personal information from a child under 16, we will delete 
            that information promptly.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">11. Third-Party Links and Services</h2>
          <p className="text-gray-300 leading-relaxed">
            Our Services may contain links to third-party websites, services, or advertising platforms 
            (including Meta, Google, TikTok, and others). We are not responsible for the privacy practices 
            of these third parties. We encourage you to read the privacy policies of any third-party services 
            you use.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">12. Do Not Track Signals</h2>
          <p className="text-gray-300 leading-relaxed">
            Some browsers offer a "Do Not Track" (DNT) feature. Our website does not currently respond to 
            DNT signals. However, you can manage your tracking preferences through cookie settings and 
            opt-out tools provided by advertising networks.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">13. Changes to This Privacy Policy</h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any material changes 
            by posting the new policy on this page, updating the "Last updated" date, and sending you an 
            email notification (for registered users). Your continued use of the Services after changes 
            constitutes acceptance of the updated Privacy Policy.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">14. Contact Us</h2>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
            practices, please contact us at:
          </p>
          <div className="bg-white/5 rounded-lg p-6 mt-4">
            <p className="text-gray-300">
              <strong>FlammaLabs Inc.</strong><br />
              <strong>Email:</strong> privacy@goflamma.ai
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 FlammaLabs Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
