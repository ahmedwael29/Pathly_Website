"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HelpPage() {
  const faqs = [
    {
      id: 1,
      question: "How do I create an account on PATHLY?",
      answer:
        "To create an account, click on the Sign Up button at the top right corner and fill in your details. You’ll receive a confirmation email to activate your account.",
    },
    {
      id: 2,
      question: "Can I use PATHLY without installing the app?",
      answer:
        "Yes, you can access PATHLY features through our web platform, but installing the app provides better real-time updates and notifications.",
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
