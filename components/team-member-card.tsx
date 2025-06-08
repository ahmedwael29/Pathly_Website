"use client"
import type React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin } from "lucide-react"

interface TeamMemberCardProps {
  member: {
    name: string
    role: string
    image: string
    description: string
    icon: React.ReactNode
    social: {
      github: string
      linkedin: string
    }
  }
  index: number
  inView: boolean
}

export default function TeamMemberCard({ member, index, inView }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
      className="bg-blue-900/30 rounded-xl overflow-hidden border border-blue-800/50 group hover:border-blue-700 transition-all duration-300 h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <div className="flex items-center space-x-2">
            <span className="p-1 bg-blue-800/50 rounded-full text-blue-300">{member.icon}</span>
            <p className="text-slate-200">{member.role}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-300 mb-4">{member.description}</p>
        <div className="flex space-x-3">
          <a
            href={member.social.github}
            className="p-2 bg-blue-900/50 rounded-full text-slate-300 hover:text-blue-300 transition-colors"
            aria-label={`${member.name}'s GitHub`}
          >
            <Github size={18} />
          </a>
          <a
            href={member.social.linkedin}
            className="p-2 bg-blue-900/50 rounded-full text-slate-300 hover:text-blue-300 transition-colors"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
