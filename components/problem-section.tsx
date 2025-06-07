"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import FadeInSection from "@/components/fade-in-section"
import StaggeredChildren from "@/components/staggered-children"

export default function ProblemSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-blue-900/20">
      <div className="container mx-auto px-4">
        <FadeInSection delay={0.1} duration={0.5} className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            The Road Quality Problem We're Tackling
          </h2>

          <div className="p-6 bg-blue-900/30 rounded-xl border border-blue-800/50 shadow-lg">
            <p className="text-lg text-slate-200 leading-relaxed">
              In today's urban environments, people face poor road conditions, inaccurate travel time estimates, and
              lack of real-time monitoring. Traditional infrastructure fails to provide smart feedback, leading to
              inefficiencies, traffic delays, and higher maintenance costs. Our solution aims to bring intelligence and
              automation to road quality assessment, helping cities make better, faster decisions.
            </p>
          </div>

          <StaggeredChildren
            containerClassName="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            staggerDelay={0.1}
            childrenDelay={0.2}
          >
            {[
              {
                title: "Poor Road Quality",
                description: "Damaged or uneven roads reduce safety and comfort",
                color: "from-blue-500 to-blue-700",
              },
              {
                title: "Lack of Real-Time Monitoring",
                description: "Authorities lack up-to-date data to act quickly",
                color: "from-purple-500 to-purple-700",
              },
              {
                title: "Inaccurate Travel Time",
                description: "No reliable estimate for commuters and emergency services",
                color: "from-cyan-500 to-cyan-700",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="p-6 rounded-lg border border-blue-800/50 bg-blue-900/30 hover:bg-blue-900/40 transition-all h-full"
              >
                <div
                  className={`w-12 h-12 mb-4 rounded-full bg-gradient-to-r ${item.color} mx-auto flex items-center justify-center`}
                >
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-slate-200">{item.description}</p>
              </motion.div>
            ))}
          </StaggeredChildren>
        </FadeInSection>
      </div>
    </section>
  )
}
