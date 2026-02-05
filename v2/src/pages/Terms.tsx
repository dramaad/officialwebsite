import { ArrowLeft } from 'lucide-react';

export function Terms() {
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
          <h1 className="font-display text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-500">Last updated: January 2025</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300 leading-relaxed">
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using 
            the Flamma platform and services (the "Service") operated by FlammaLabs Inc. ("us", "we", 
            or "our"). By accessing or using the Service, you agree to be bound by these Terms.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">1. Acceptance of Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            By creating an account, accessing, or using our Service, you acknowledge that you have read, 
            understood, and agree to be bound by these Terms. If you do not agree to these Terms, you 
            may not access or use the Service.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">2. Description of Service</h2>
          <p className="text-gray-300 leading-relaxed">
            Flamma is an AI-powered creative generation and optimization platform designed for performance 
            marketing teams. Our Service includes tools for video generation, creative analysis, campaign 
            optimization, and integration with advertising platforms.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">3. Account Registration</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            To use certain features of the Service, you must register for an account. You agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your password secure and confidential</li>
            <li>Notify us immediately of any unauthorized access or security breach</li>
            <li>Be responsible for all activities that occur under your account</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">4. Subscription and Payment</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Some features of the Service require a paid subscription. By subscribing:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>You agree to pay all fees associated with your selected plan</li>
            <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
            <li>You may upgrade, downgrade, or cancel your subscription at any time</li>
            <li>Refunds are provided in accordance with our refund policy</li>
            <li>We reserve the right to change pricing with 30 days notice</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">5. Content and Intellectual Property</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Your Content:</strong> You retain all rights to the content you upload to our platform. 
            By uploading content, you grant us a license to use, process, and store your content solely 
            for the purpose of providing and improving our Service.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>Generated Content:</strong> You own all rights to the creative assets generated using 
            our Service, subject to our underlying intellectual property rights in the platform and AI models.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong>Our Intellectual Property:</strong> The Service, including all software, algorithms, 
            designs, and trademarks, is owned by FlammaLabs Inc. and protected by intellectual property laws.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">6. Acceptable Use</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            You agree not to use the Service to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on the intellectual property rights of others</li>
            <li>Generate content that is illegal, harmful, threatening, abusive, or discriminatory</li>
            <li>Create deepfakes or misleading content without proper disclosure</li>
            <li>Attempt to reverse engineer, decompile, or hack the Service</li>
            <li>Interfere with or disrupt the Service or servers</li>
            <li>Use the Service to send unsolicited communications (spam)</li>
            <li>Impersonate any person or entity</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">7. Advertising Platform Compliance</h2>
          <p className="text-gray-300 leading-relaxed">
            When using our Service to create content for advertising platforms (Meta, Google, TikTok, etc.), 
            you are responsible for ensuring compliance with each platform's advertising policies. While 
            our AI attempts to generate compliant content, we do not guarantee approval by third-party platforms.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">8. Limitation of Liability</h2>
          <p className="text-gray-300 leading-relaxed">
            To the maximum extent permitted by law, FlammaLabs Inc. shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages, including lost profits, data loss, 
            or business interruption, arising out of or relating to your use of the Service.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">9. Disclaimer of Warranties</h2>
          <p className="text-gray-300 leading-relaxed">
            The Service is provided "as is" and "as available" without warranties of any kind, either 
            express or implied. We do not warrant that the Service will be uninterrupted, secure, or 
            error-free, or that any generated content will achieve specific performance metrics.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">10. Indemnification</h2>
          <p className="text-gray-300 leading-relaxed">
            You agree to indemnify and hold harmless FlammaLabs Inc. and its officers, directors, 
            employees, and agents from any claims, damages, losses, liabilities, and expenses arising 
            out of your use of the Service or violation of these Terms.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">11. Termination</h2>
          <p className="text-gray-300 leading-relaxed">
            We may terminate or suspend your account and access to the Service immediately, without 
            prior notice, for any reason, including violation of these Terms. Upon termination, your 
            right to use the Service will immediately cease.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">12. Governing Law</h2>
          <p className="text-gray-300 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of the State 
            of California, without regard to its conflict of law provisions. Any disputes arising under 
            these Terms shall be subject to the exclusive jurisdiction of the courts located in San 
            Francisco, California.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">13. Changes to Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            We reserve the right to modify or replace these Terms at any time. We will provide notice 
            of significant changes by posting the updated Terms on our website and updating the 
            "Last updated" date. Your continued use of the Service after changes constitutes acceptance.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">14. Contact Information</h2>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-gray-300 mt-2">
            <strong>Email:</strong> legal@flamma.ai<br />
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
