"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function TermsContent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const handleSectionClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Highlight the section
      setHighlightedId(id);
      // Remove highlight after 1.5 seconds
      setTimeout(() => {
        setHighlightedId(null);
      }, 1500);
    }
  };

  const sections = [
    {
      id: "acceptance-of-terms",
      title: "1. Acceptance of Terms",
      content: `By downloading, installing, or using the PATHLY application ("App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our App or services. PATHLY reserves the right to modify these terms at any time, and such modifications shall be effective immediately upon posting. Your continued use of the App after any modifications indicates your acceptance of the modified terms.`,
    },
    {
      id: "description-of-service",
      title: "2. Description of Service",
      content: `PATHLY is an IoT-powered road quality monitoring system that provides real-time information about road conditions and estimated travel times. The App collects data through sensors and user devices to detect road issues such as potholes, cracks, and uneven surfaces, and provides this information to users and relevant authorities.`,
    },
    {
      id: "user-accounts",
      title: "3. User Accounts",
      content: `3.1. Registration: To use certain features of the App, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process.\n\n3.2. Account Security: You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify PATHLY immediately of any unauthorized use of your account.`,
    },
    {
      id: "user-conduct",
      title: "4. User Conduct",
      content: `4.1. You agree not to use the App for any illegal purpose or in violation of any local, state, national, or international law.\n\n4.2. You agree not to interfere with or disrupt the App or servers or networks connected to the App.\n\n4.3. You agree not to attempt to gain unauthorized access to any portion of the App or any other accounts, computer systems, or networks connected to the App.`,
    },
    {
      id: "data-collection-privacy",
      title: "5. Data Collection and Privacy",
      content: `5.1. By using the App, you consent to the collection and use of certain information as described in our Privacy Policy.\n\n5.2. The App collects location data, device information, and road condition data to provide its services. This data is used to improve road quality monitoring and travel time estimation.\n\n5.3. We may share anonymized and aggregated data with road authorities and other third parties to improve road infrastructure.`,
    },
    {
      id: "intellectual-property",
      title: "6. Intellectual Property",
      content: `6.1. The App and its original content, features, and functionality are owned by PATHLY and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.\n\n6.2. You may not modify, reproduce, distribute, create derivative works or adaptations of, publicly display or in any way exploit the App in whole or in part except as expressly authorized by PATHLY.`,
    },
    {
      id: "disclaimer-of-warranties",
      title: "7. Disclaimer of Warranties",
      content: `7.1. The App is provided on an "as is" and "as available" basis without warranties of any kind.\n\n7.2. PATHLY does not guarantee the accuracy, reliability, or completeness of any road condition or travel time data.\n\n7.3. PATHLY does not warrant that the App will be uninterrupted, timely, secure, or error-free.`,
    },
    {
      id: "limitation-of-liability",
      title: "8. Limitation of Liability",
      content: `8.1. In no event shall PATHLY be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.\n\n8.2. PATHLY shall not be liable for any damages or injuries resulting from your use of the App while driving. Users should always prioritize road safety and follow traffic laws.`,
    },
    {
      id: "indemnification",
      title: "9. Indemnification",
      content: `You agree to defend, indemnify, and hold harmless PATHLY and its licensors, service providers, and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Service or your use of the App.`,
    },
    {
      id: "termination",
      title: "10. Termination",
      content: `10.1. PATHLY may terminate or suspend your account and access to the App immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service.\n\n10.2. Upon termination, your right to use the App will immediately cease.`,
    },
    {
      id: "governing-law",
      title: "11. Governing Law",
      content: `These Terms shall be governed by and construed in accordance with the laws of Egypt, without regard to its conflict of law provisions.`,
    },
    {
      id: "contact-information",
      title: "12. Contact Information",
      content: `If you have any questions about these Terms, please contact us at `,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-secondary">
              Terms of Service
            </h1>
            <p className="text-lg text-slate-200">Last Updated: May 20, 2025</p>
          </div>

          <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-800/50 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">
              Table of Contents
            </h2>
            <ul className="list-disc list-inside text-slate-200">
              {sections.map((section, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleSectionClick(section.id)}
                    className="hover:underline text-left"
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-900/30 p-8 rounded-xl border border-blue-800/50 mb-8">
            <p className="text-slate-200">
              Please read these Terms of Service carefully before using the
              PATHLY application. These terms govern your use of our application
              and services. By using PATHLY, you agree to these terms in their
              entirety.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.05 * (index + 1) }}
                id={section.id}
                className={`p-4 rounded-lg transition-colors duration-500 ${
                  highlightedId === section.id
                    ? "bg-yellow-300/20 border border-yellow-400"
                    : ""
                }`}
              >
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-blue-300">
                  {section.title}
                </h2>
                <div className="text-slate-300 whitespace-pre-line">
                  {section.id === "contact-information" ? (
                    <>
                      {section.content}
                      <a
                        href="mailto:pathly.app@gmail.com"
                        className="text-blue-400 underline"
                      >
                        pathly.app@gmail.com
                      </a>
                    </>
                  ) : (
                    section.content
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
