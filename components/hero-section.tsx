"use client";
import { useEffect, useState } from "react";
import { Download, Info } from "lucide-react";
import Link from "next/link";
import FadeInSection from "@/components/fade-in-section";
import TextReveal from "@/components/text-reveal";
import FloatingElement from "@/components/floating-element";
import ButtonWithHover from "@/components/button-with-hover";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <FadeInSection delay={0.1} duration={0.7}>
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium text-blue-300 mb-4">
              IoT Road Quality System
            </span>
            <TextReveal
              text="Drive Smart, Stay Safe!"
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
              delay={0.3}
              duration={0.1}
              staggerChildren={0.04}
            />
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how our IoT-powered system monitors road quality and
              estimates travel time to make every journey safer and more
              efficient.
            </p>
          </FadeInSection>

          <FadeInSection
            delay={0.5}
            duration={0.7}
            direction="up"
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <div className="w-full sm:w-auto">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <ButtonWithHover className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-6 text-lg flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" /> Download Now
                </ButtonWithHover>
              </a>
            </div>
            <div className="w-full sm:w-auto">
              <Link href="/about" className="block w-full">
                <ButtonWithHover
                  variant="outline"
                  className="w-full sm:w-auto border-blue-500 bg-blue-500/10 text-blue-400 hover:text-white hover:bg-blue-500/10 px-8 py-6 text-lg flex items-center justify-center"
                >
                  <Info className="mr-2 h-5 w-5" /> Learn More
                </ButtonWithHover>
              </Link>
            </div>
          </FadeInSection>

          <FloatingElement
            amplitude={15}
            duration={8}
            delay={0.2}
            className="mt-16 relative"
          >
            <div className="relative border border-slate-800 rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-center gap-4 p-2 h-auto md:h-[500px]">
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:h-full overflow-hidden rounded-2xl">
                <img
                  src="/main_banner.png"
                  alt="Main Banner"
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:h-full overflow-hidden rounded-2xl">
                <img
                  src="/main_banner2.png"
                  alt="Main Banner"
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
            </div>
          </FloatingElement>
        </div>
      </div>
    </section>
  );
}
