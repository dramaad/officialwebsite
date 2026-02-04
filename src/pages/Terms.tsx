import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Terms() {
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
          <h1 className="font-display text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-500">Last updated: February 2026</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300 leading-relaxed">
            Please read these Terms of Service ("Terms", "Terms of Service", "Agreement") carefully before using 
            the Flamma platform, website (goflamma.ai), and services (collectively, the "Service") operated by 
            FlammaLabs Inc. ("Flamma", "Company", "us", "we", or "our").
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            By accessing or using the Service, you ("User", "you", or "your") agree to be bound by these Terms. 
            If you are using the Service on behalf of an organization, you represent that you have authority to 
            bind that organization to these Terms.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">1. Acceptance of Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            By creating an account, accessing, or using our Service, you acknowledge that you have read, 
            understood, and agree to be bound by these Terms and our Privacy Policy (available at 
            goflamma.ai/privacy). If you do not agree to these Terms, you may not access or use the Service. 
            You must be at least 18 years old and have the legal capacity to enter into this Agreement.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">2. Description of Service</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Flamma is an AI-powered creative generation and optimization platform designed for performance 
            marketing teams, advertisers, and agencies. Our Service includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>AI-powered video and creative asset generation</li>
            <li>Creative performance analysis and optimization</li>
            <li>Campaign management and automation tools</li>
            <li>Integration with advertising platforms (Meta, Google, TikTok, Snapchat, etc.)</li>
            <li>Analytics and reporting dashboards</li>
            <li>API access for enterprise customers</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time 
            with or without notice.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">3. Account Registration and Security</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            To use certain features of the Service, you must register for an account. By registering, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your password secure and confidential</li>
            <li>Use strong passwords and enable two-factor authentication when available</li>
            <li>Notify us immediately of any unauthorized access or security breach</li>
            <li>Be responsible for all activities that occur under your account</li>
            <li>Not share your account credentials with others</li>
            <li>Not create multiple accounts for the purpose of abusing promotions or service limits</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            We reserve the right to suspend or terminate accounts that violate these requirements or are 
            suspected of fraudulent activity.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">4. Subscription, Payment, and Billing</h2>
          
          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">4.1 Subscription Plans</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Service offers various subscription plans with different features and pricing. By subscribing 
            to a paid plan, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Pay all fees associated with your selected plan</li>
            <li>Provide valid payment information</li>
            <li>Authorize us to charge your payment method for recurring fees</li>
          </ul>

          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">4.2 Billing and Renewal</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Subscriptions automatically renew at the end of each billing period unless cancelled</li>
            <li>You will be charged on the same day of each billing cycle</li>
            <li>Prices are exclusive of taxes, which will be added where applicable</li>
            <li>We reserve the right to change pricing with 30 days advance notice</li>
            <li>Price changes will take effect at the start of your next billing cycle</li>
          </ul>

          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">4.3 Cancellation and Refunds</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>You may cancel your subscription at any time through your account settings</li>
            <li>Cancellation takes effect at the end of the current billing period</li>
            <li>No refunds are provided for partial billing periods</li>
            <li>Refund requests for annual plans may be considered within 14 days of purchase</li>
            <li>Credits or usage-based charges are non-refundable</li>
          </ul>

          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">4.4 Free Trials</h3>
          <p className="text-gray-300 leading-relaxed">
            We may offer free trials at our discretion. At the end of a free trial, your account will 
            automatically convert to a paid subscription unless you cancel before the trial ends. You 
            are responsible for remembering your trial end date.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">5. Content and Intellectual Property</h2>
          
          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">5.1 Your Content</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            You retain all intellectual property rights to the content you upload to our platform ("User Content"). 
            By uploading User Content, you grant us a worldwide, non-exclusive, royalty-free license to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Use, process, store, and display your content to provide the Service</li>
            <li>Create derivative works (such as AI-generated variations) as part of the Service</li>
            <li>Use anonymized, aggregated data to improve our AI models and Service</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            You represent and warrant that you own or have the necessary rights to all User Content you upload, 
            and that your content does not infringe on any third-party intellectual property rights.
          </p>

          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">5.2 Generated Content</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Subject to your compliance with these Terms and payment of applicable fees:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>You own the rights to creative assets generated using our Service ("Generated Content")</li>
            <li>You may use Generated Content for commercial purposes, including advertising</li>
            <li>We retain rights to our underlying AI models, algorithms, and platform technology</li>
            <li>Generated Content may not be used to train competing AI services</li>
          </ul>

          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">5.3 Our Intellectual Property</h3>
          <p className="text-gray-300 leading-relaxed">
            The Service, including all software, algorithms, machine learning models, user interface designs, 
            trademarks, logos, and documentation, is owned by FlammaLabs Inc. and protected by intellectual 
            property laws. You may not copy, modify, distribute, sell, or lease any part of our Service without 
            our written permission.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">6. Acceptable Use Policy</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            You agree to use the Service only for lawful purposes. You must not use the Service to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Violate any applicable local, state, national, or international laws or regulations</li>
            <li>Infringe on the intellectual property rights, privacy, or publicity rights of others</li>
            <li>Generate, distribute, or promote content that is:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Illegal, harmful, threatening, abusive, harassing, or defamatory</li>
                <li>Discriminatory based on race, gender, religion, nationality, disability, or sexual orientation</li>
                <li>Sexually explicit, pornographic, or obscene</li>
                <li>Violent, promoting violence, or glorifying self-harm</li>
                <li>Related to illegal drugs, weapons, or dangerous activities</li>
                <li>Fraudulent, deceptive, or misleading</li>
              </ul>
            </li>
            <li>Create deepfakes or synthetic media of real individuals without their consent</li>
            <li>Generate content that violates advertising platform policies (Meta, Google, TikTok, etc.)</li>
            <li>Attempt to reverse engineer, decompile, disassemble, or hack the Service</li>
            <li>Interfere with or disrupt the Service, servers, or networks</li>
            <li>Circumvent usage limits, security measures, or access controls</li>
            <li>Use the Service to send spam or unsolicited communications</li>
            <li>Impersonate any person, entity, or falsely represent your affiliation</li>
            <li>Use automated tools (bots, scrapers) to access the Service without permission</li>
            <li>Resell, sublicense, or provide access to the Service without authorization</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            We reserve the right to remove any content and suspend or terminate accounts that violate this 
            Acceptable Use Policy.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">7. Advertising Platform Compliance</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            When using our Service to create content for third-party advertising platforms:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>You are solely responsible for ensuring compliance with each platform's advertising policies, 
                including Meta (Facebook/Instagram), Google Ads, TikTok, Snapchat, and others</li>
            <li>While our AI attempts to generate policy-compliant content, we do not guarantee approval by 
                any third-party platform</li>
            <li>You must review and verify all Generated Content before submission to advertising platforms</li>
            <li>We are not liable for ad rejections, account suspensions, or policy violations on third-party platforms</li>
            <li>You must comply with all applicable advertising laws, including FTC guidelines on disclosures 
                and endorsements</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">8. Data and Privacy</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Your privacy is important to us. Our collection and use of personal data is governed by our 
            Privacy Policy at goflamma.ai/privacy. By using the Service, you consent to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Our collection and processing of data as described in the Privacy Policy</li>
            <li>Use of anonymized, aggregated data to improve our AI models</li>
            <li>Sharing of data with third-party advertising platforms when you use integrations</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            If you process personal data of end users through our Service, you are responsible for complying 
            with applicable data protection laws (GDPR, CCPA, etc.) and obtaining necessary consents.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">9. Third-Party Services and Integrations</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Our Service integrates with third-party platforms and services. By using these integrations:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>You agree to comply with the terms and policies of those third-party services</li>
            <li>You authorize us to access and interact with your accounts on those platforms</li>
            <li>You acknowledge that third-party services are not controlled by us and we are not responsible 
                for their availability, content, or practices</li>
            <li>You may revoke access to third-party integrations at any time through your account settings</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">10. Disclaimer of Warranties</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER 
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT</li>
            <li>WARRANTIES THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE</li>
            <li>WARRANTIES THAT GENERATED CONTENT WILL ACHIEVE SPECIFIC PERFORMANCE METRICS OR ADVERTISING RESULTS</li>
            <li>WARRANTIES REGARDING THE ACCURACY, RELIABILITY, OR QUALITY OF ANY GENERATED CONTENT</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            You acknowledge that AI-generated content may contain errors, inaccuracies, or unexpected outputs, 
            and you are responsible for reviewing all content before use.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">11. Limitation of Liability</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>FLAMMALABS INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
                OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOST REVENUE, LOST DATA, 
                BUSINESS INTERRUPTION, OR LOSS OF GOODWILL</li>
            <li>OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM THESE TERMS OR YOUR USE OF THE SERVICE 
                SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM</li>
            <li>WE ARE NOT LIABLE FOR ANY DAMAGES ARISING FROM:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your use of or inability to use the Service</li>
                <li>Ad rejections or policy violations on third-party platforms</li>
                <li>Unauthorized access to your account</li>
                <li>Errors, inaccuracies, or issues with Generated Content</li>
                <li>Actions of third-party services or integrations</li>
              </ul>
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, 
            so the above limitations may not apply to you.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">12. Indemnification</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            You agree to indemnify, defend, and hold harmless FlammaLabs Inc. and its officers, directors, 
            employees, agents, licensors, and service providers from and against any claims, damages, losses, 
            liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Your use of the Service or violation of these Terms</li>
            <li>Your User Content or Generated Content</li>
            <li>Your violation of any third-party rights, including intellectual property rights</li>
            <li>Your violation of any applicable laws or regulations</li>
            <li>Your advertising campaigns or marketing activities</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">13. Termination</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>By You:</strong> You may terminate your account at any time by contacting us or through 
            your account settings. Termination does not entitle you to a refund of prepaid fees.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            <strong>By Us:</strong> We may suspend or terminate your account and access to the Service 
            immediately, without prior notice or liability, for any reason, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Violation of these Terms or Acceptable Use Policy</li>
            <li>Fraudulent, illegal, or suspicious activity</li>
            <li>Non-payment of fees</li>
            <li>Extended period of inactivity</li>
            <li>Request by law enforcement or government agencies</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mt-4">
            <strong>Effect of Termination:</strong> Upon termination, your right to use the Service ceases 
            immediately. We may delete your account data within 30 days of termination. Provisions that by 
            their nature should survive termination shall survive (including intellectual property, 
            indemnification, limitation of liability, and dispute resolution).
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">14. Dispute Resolution</h2>
          
          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">14.1 Informal Resolution</h3>
          <p className="text-gray-300 leading-relaxed">
            Before filing any formal dispute, you agree to first contact us at legal@goflamma.ai to attempt 
            to resolve the dispute informally. We will attempt to resolve disputes within 30 days.
          </p>

          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">14.2 Arbitration Agreement</h3>
          <p className="text-gray-300 leading-relaxed">
            If informal resolution fails, any dispute arising from these Terms or the Service shall be 
            resolved by binding arbitration administered by JAMS under its Streamlined Arbitration Rules. 
            The arbitration shall be conducted in San Francisco, California, in English. The arbitrator's 
            decision shall be final and binding.
          </p>

          <h3 className="font-display text-xl font-semibold mt-6 mb-3 text-white">14.3 Class Action Waiver</h3>
          <p className="text-gray-300 leading-relaxed">
            YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS 
            AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. You waive any right to participate 
            in class actions or class-wide arbitration.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">15. Governing Law</h2>
          <p className="text-gray-300 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of the State of 
            California, United States, without regard to its conflict of law provisions. For any disputes 
            not subject to arbitration, you agree to submit to the exclusive jurisdiction of the state and 
            federal courts located in San Francisco County, California.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">16. Changes to Terms</h2>
          <p className="text-gray-300 leading-relaxed">
            We reserve the right to modify these Terms at any time. We will provide notice of material 
            changes by posting the updated Terms on our website, updating the "Last updated" date, and 
            sending email notification to registered users. Changes become effective upon posting unless 
            otherwise stated. Your continued use of the Service after changes constitutes acceptance of 
            the modified Terms. If you do not agree to the changes, you must stop using the Service and 
            may cancel your subscription.
          </p>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">17. General Provisions</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy, constitute 
                the entire agreement between you and FlammaLabs Inc. regarding the Service.</li>
            <li><strong>Severability:</strong> If any provision of these Terms is found unenforceable, the 
                remaining provisions will continue in full force and effect.</li>
            <li><strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms shall 
                not constitute a waiver of such right or provision.</li>
            <li><strong>Assignment:</strong> You may not assign or transfer these Terms without our prior 
                written consent. We may assign our rights and obligations without restriction.</li>
            <li><strong>Force Majeure:</strong> We are not liable for any failure or delay due to circumstances 
                beyond our reasonable control, including natural disasters, war, terrorism, labor disputes, 
                or internet failures.</li>
            <li><strong>Notices:</strong> We may provide notices to you via email, through the Service, or 
                by posting on our website. You may contact us at the address below.</li>
          </ul>

          <h2 className="font-display text-2xl font-semibold mt-10 mb-4 text-white">18. Contact Information</h2>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions, concerns, or feedback about these Terms or the Service, please contact us:
          </p>
          <div className="bg-white/5 rounded-lg p-6 mt-4">
            <p className="text-gray-300">
              <strong>FlammaLabs Inc.</strong><br />
              <strong>Email:</strong> legal@goflamma.ai<br />
              <strong>Support:</strong> support@goflamma.ai<br />
              <strong>Website:</strong> https://goflamma.ai<br />
              <strong>Address:</strong> San Francisco, CA, United States
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
