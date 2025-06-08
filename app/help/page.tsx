"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HelpPage() {
  const faqs = [
    {
      id: 1,
      question: "What makes PATHLY different from other road quality apps?",
      answer:
        "PATHLY uses real-time sensor data combined with AI analysis to give you the most accurate road condition info and travel time estimates.",
    },
    {
      id: 2,
      question:
        "Do I need to download the PATHLY app to get accurate road updates?",
      answer:
        "Yes, the app delivers real-time updates and personalized notifications, while the website serves mainly to introduce our features and project vision.",
    },

    {
      id: 3,
      question: "How does PATHLY collect road condition data?",
      answer:
        "PATHLY uses IoT sensors installed on roads and user reports via the app to monitor and analyze road conditions in real time.",
    },
    {
      id: 4,
      question: "Is my personal data safe with PATHLY?",
      answer:
        "Absolutely. We follow strict data privacy and security protocols to protect your personal information.",
    },
    {
      id: 5,
      question: "How can I report a problem with the app?",
      answer:
        "You can report issues via the app’s support section or contact us directly at support@pathly.com.",
    },
    {
      id: 6,
      question: "Can PATHLY help me plan the fastest route for my trip?",
      answer:
        "Yes! PATHLY calculates travel time based on real-time road quality data to help you choose the quickest and safest routes.",
    },
    {
      id: 7,
      question: "Does PATHLY support both Android and iOS devices?",
      answer:
        "Absolutely. Our app is available on both Android and iOS platforms to provide seamless access for all users.",
    },
    {
      id: 8,
      question:
        "Will PATHLY notify me about sudden road issues during my journey?",
      answer:
        "Yes, the app sends instant notifications for road hazards, traffic jams, and maintenance work to keep you updated on the go.",
    },
    {
      id: 9,
      question: "Is there a cost to use PATHLY's app and features?",
      answer:
        "PATHLY offers core features for free, but to unlock advanced features like detailed analytics and personalized alerts, you’ll need to subscribe to one of our premium plans.",
    },
  ];

  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 gradient-text-secondary text-center">
          Help Center
        </h1>
        <p className="text-xl text-center text-slate-300 max-w-3xl mx-auto mb-12">
          Find answers to frequently asked questions and get support for using
          PATHLY.
        </p>

        <section className="space-y-4">
          {faqs.map(({ id, question, answer }) => (
            <div
              key={id}
              className="bg-blue-900/30 rounded-lg p-4 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => toggle(id)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{question}</h3>
                <span className="text-3xl select-none">
                  {openId === id ? "-" : "+"}
                </span>
              </div>
              <AnimatePresence initial={false}>
                {openId === id && (
                  <motion.p
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-slate-300 overflow-hidden"
                  >
                    {answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </main>
  );
}
