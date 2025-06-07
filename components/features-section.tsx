"use client";
import { useInView } from "react-intersection-observer";
import {
  Activity,
  AlertTriangle,
  BarChart,
  Clock,
  Map,
  Shield,
} from "lucide-react";
import StaggeredChildren from "@/components/staggered-children";
import FadeInSection from "@/components/fade-in-section";
import HoverCard from "@/components/hover-card";

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Map className="w-10 h-10 text-blue-300" />,
      title: "Interactive Road Maps",
      description:
        "View real-time road quality data on interactive maps with color-coded indicators for different issues.",
    },
    {
      icon: <AlertTriangle className="w-10 h-10 text-yellow-300" />,
      title: "Hazard Alerts",
      description:
        "Receive instant notifications about dangerous road conditions along your route.",
    },
    {
      icon: <Clock className="w-10 h-10 text-cyan-300" />,
      title: "Smart ETA",
      description:
        "Get accurate travel time estimates based on current road conditions and traffic patterns.",
    },
    {
      icon: <Activity className="w-10 h-10 text-green-300" />,
      title: "Vibration Analysis",
      description:
        "Advanced sensors detect road irregularities through vehicle vibration patterns.",
    },
    {
      icon: <BarChart className="w-10 h-10 text-purple-300" />,
      title: "Data Analytics",
      description:
        "Track road quality trends over time with comprehensive and detailed analytics dashboards.",
    },
    {
      icon: <Shield className="w-10 h-10 text-red-300" />,
      title: "Privacy Protection",
      description:
        "Your location data is anonymized and securely processed with industry-leading encryption.",
    },
  ];

  return (
    <section className="py-20 bg-blue-900/20">
      <div className="container mx-auto px-4">
        <FadeInSection
          delay={0.1}
          duration={0.7}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-secondary">
            Powerful Features for Safer Roads
          </h2>
          <p className="text-lg text-slate-200 max-w-3xl mx-auto">
            Our comprehensive suite of features helps you navigate with
            confidence while contributing to better road infrastructure for
            everyone.
          </p>
        </FadeInSection>

        <StaggeredChildren
          containerClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          staggerDelay={0.1}
          childrenDelay={0.2}
          direction="up"
          distance={30}
        >
          {features.map((feature, index) => (
            <HoverCard
              key={index}
              className="bg-blue-900/30 p-6 rounded-xl border border-blue-800/50 hover:border-blue-700 transition-all group shadow-lg hover:shadow-xl flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="mb-4 p-3 rounded-full bg-blue-900/70 inline-block group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-slate-200">{feature.description}</p>
            </HoverCard>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  );
}
