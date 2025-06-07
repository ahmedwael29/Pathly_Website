"use client"
import { useInView } from "react-intersection-observer"
import { Brain, Clock, Shield, Zap } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"
import StaggeredChildren from "@/components/staggered-children"
import HoverCard from "@/components/hover-card"

export default function SolutionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Brain className="w-10 h-10 text-blue-400" />,
      title: "Smart Detection",
      description: "Our system uses IoT sensors to detect potholes, cracks, and uneven surfaces automatically.",
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-400" />,
      title: "Real-time Data Analysis",
      description: "We process sensor data instantly to provide up-to-date road condition insights to decision makers.",
    },
    {
      icon: <Clock className="w-10 h-10 text-cyan-400" />,
      title: "Accurate Travel Time Estimation",
      description: "Our algorithms calculate reliable travel times based on road quality and traffic conditions.",
    },
    {
      icon: <Shield className="w-10 h-10 text-green-400" />,
      title: "Secure & Scalable",
      description: "Data is encrypted and the system is built to scale with urban infrastructure.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <FadeInSection delay={0.1} duration={0.7} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            How Our System Improves Road Quality and Travel Time
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Our smart road-monitoring system transforms how cities track road quality and estimate travel time using
            real-time data, intelligent analysis, and automated alerts.
          </p>
        </FadeInSection>

        <StaggeredChildren
          containerClassName="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          staggerDelay={0.1}
          childrenDelay={0.2}
          direction="up"
          distance={30}
        >
          {features.map((feature, index) => (
            <HoverCard
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl border border-slate-700 hover:border-slate-600 transition-all group"
            >
              <div className="mb-6 p-3 rounded-full bg-slate-800 inline-block group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </HoverCard>
          ))}
        </StaggeredChildren>

        <FadeInSection delay={0.6} duration={0.7} className="mt-16 relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-white">Experience Smarter Roads in Action</h3>
              <p className="text-slate-300 mb-6">
                Our user-friendly dashboard shows real-time road conditions and estimated travel times. The system
                adapts to different cities and routes, providing smarter insights over time.
              </p>
              <ul className="space-y-3">
                {[
                  "Interactive road dashboard",
                  "Instant alerts for road issues",
                  "Voice commands",
                  "Route-based travel time updates",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 h-64 w-full transition-transform transform hover:scale-110 duration-300">
                <img src="/Smart_Cars.jpg" alt="Smart Cars Network" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
