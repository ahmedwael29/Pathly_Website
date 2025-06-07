"use client"
import { useInView } from "react-intersection-observer"
import FadeInSection from "@/components/fade-in-section"

export default function AboutHero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-blue-900/20">
      <div className="container mx-auto px-4">
        <FadeInSection delay={0.1} duration={0.5} className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-secondary">About PATHLY</h1>
          <p className="text-xl text-slate-200 mb-10">
            We are a team of 10 passionate students from the Faculty of Computer and Information Science at Mansoura
            University (FCIS MU), working together to revolutionize road quality monitoring through innovative IoT
            solutions.
          </p>

          <div className="bg-blue-900/30 p-8 rounded-xl border border-blue-800/50">
            <h2 className="text-2xl font-bold mb-4 gradient-text-secondary">Our Mission</h2>
            <p className="text-slate-200 mb-6">
              At PATHLY, we're committed to making roads safer and travel more efficient through cutting-edge
              technology. Our IoT-powered system detects road issues in real-time, helping authorities prioritize
              repairs and enabling drivers to choose safer routes.
            </p>
            <p className="text-slate-200">
              Founded as a graduation project, PATHLY has evolved into a comprehensive solution that combines hardware
              sensors, mobile applications, and advanced analytics to create a complete ecosystem for road quality
              management.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
