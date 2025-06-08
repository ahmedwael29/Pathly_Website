"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Apple, ArrowRight, Download } from "lucide-react";
import FadeInSection from "@/components/fade-in-section";
import ButtonWithHover from "@/components/button-with-hover";
import AnimatedCounter from "@/components/animated-counter";

export default function CtaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <FadeInSection
          delay={0.1}
          duration={0.7}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-blue-400/10 p-10 rounded-2xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <motion.div
                className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.18, 0.1],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Redefine Road Quality Monitoring?
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Be Part of the Smart Mobility Revolution. Thousands are already
                using our system to detect road issues and optimize travel time
                all in real time. Download the app now and drive into a safer,
                faster, and smarter future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <ButtonWithHover className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-6 text-lg flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Download for Android
                  </ButtonWithHover>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <ButtonWithHover className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white px-8 py-6 text-lg flex items-center justify-center gap-2">
                    <Apple className="w-5 h-5" />
                    Download for iOS
                  </ButtonWithHover>
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-800"
                    >
                      <img
                        src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                        alt={`user-${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-slate-300">
                  Joined by{" "}
                  <span className="font-bold text-white">
                    <AnimatedCounter end={10010} duration={1500} delay={400} />+
                  </span>{" "}
                  users
                </p>
              </div>

              <div className="mt-8">
                <motion.a
                  href="#"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  View success stories <ArrowRight className="ml-2 w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
