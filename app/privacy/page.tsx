"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const privacyContent = [
  {
    id: 1,
    title: "1. Information We Collect",
    content:
      "We collect information that you provide directly to us, such as your name, email address, and usage data. We also gather data through our sensors and app to enhance your experience.",
  },
  {
    id: 2,
    title: "2. How We Use Your Information",
    content:
      "Your data helps us improve our services, personalize your experience, and ensure road safety. We do not sell your personal information to third parties.",
  },
  {
    id: 3,
    title: "3. Data Security",
    content:
      "We implement robust security measures to protect your data from unauthorized access, disclosure, or alteration.",
  },
  {
    id: 4,
    title: "4. Your Rights",
    content:
      "You have the right to access, update, or delete your personal information. You can also opt out of certain data collection practices.",
  },
  {
    id: 5,
    title: "5. Contact Us",
    content: (
      <>
        If you have any questions or concerns about our privacy practices,
        please contact us at{" "}
        <a href="mailto:support@pathly.com" className="text-blue-400 underline">
          support@pathly.com
        </a>
        .
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 gradient-text-secondary text-center">
          Privacy Policy
        </h1>
        <p className="text-xl text-center text-slate-300 mb-12">
          Learn about how we collect, use, and protect your data when you use
          PATHLY.
        </p>

        <section className="space-y-8 text-slate-300">
          {privacyContent.map(({ id, title, content }) => (
            <article key={id}>
              <h2 className="text-2xl text-blue-300 font-semibold mb-3">{title}</h2>
              <p className="text-slate-300">{content}</p>
            </article>
          ))}
        </section>
      </div>
      <Footer />
    </main>
  );
}
