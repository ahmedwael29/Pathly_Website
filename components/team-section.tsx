"use client";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Palette,
  Database,
  Smartphone,
  Github,
  Linkedin,
} from "lucide-react";
import { FaBehance } from "react-icons/fa";
import { motion } from "framer-motion";

export default function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Esraa Gamal",
      role: "UI - UX Designer",
      image: "/Esraa_Gamal.jpg",
      description:
        "Creative designer crafting our visual identity and user experience across platforms.",
      icon: <Palette className="w-5 h-5" />,
      social: {
        behance: "https://www.behance.net/esraagamal65",
        linkedin:
          "https://www.linkedin.com/in/esraa-gamal-89022a268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Ahmed Wael",
      role: "Frontend Developer",
      image: "/Waael.jpg",
      description:
        "Skilled in building scalable web apps using React and Next.js with focus on performance and usability.",
      icon: <Code className="w-5 h-5" />,
      social: {
        github: "https://github.com/ahmedwael29",
        linkedin: "https://www.linkedin.com/in/ahmedwael29/",
      },
    },
    {
      name: "Reem Badea",
      role: "Frontend Developer",
      image: "/Reem.jpg",
      description:
        "Experienced in creating responsive layouts and interactive UI components that deliver smooth user experiences.",
      icon: <Code className="w-5 h-5" />,
      social: {
        github: "https://github.com/reembade3",
        linkedin: "#",
      },
    },
    {
      name: "Ahmed Ezzat",
      role: "Backend Developer",
      image: "/Sedo.jpg",
      description:
        "Architect of our scalable API infrastructure and real-time data processing.",
      icon: <Database className="w-5 h-5" />,
      social: {
        github: "#",
        linkedin: "#",
      },
    },
    {
      name: "Rewan Mahmoud",
      role: "Backend Developer",
      image: "/Rewan.jpg",
      description:
        "Focused on database design and optimization to ensure smooth storage and retrieval of project data.",
      icon: <Database className="w-5 h-5" />,
      social: {
        github: "https://github.com/rawanii8",
        linkedin:
          "https://www.linkedin.com/in/rawan-abuelnaga-2a2369289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    },
    {
      name: "Rana Reda",
      role: "Backend Developer",
      image: "/Rana.jpg",
      description:
        "Handles backend logic and integrates sensor data to power real-time features in our system.",
      icon: <Database className="w-5 h-5" />,
      social: {
        github: "https://github.com/ranareda66",
        linkedin:
          "https://www.linkedin.com/in/rana-reda-3983b3240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Alaa Ahmed",
      role: "Flutter Developer",
      image: "/Alaa.jpg",
      description:
        "Develops cross-platform mobile apps ensuring smooth UI and reliable performance on Android and iOS.",
      icon: <Smartphone className="w-5 h-5" />,
      social: {
        github: "https://github.com/AlaaSharshera",
        linkedin:
          "https://www.linkedin.com/in/alaasharshera?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    },
    {
      name: "Esraa Mohamed",
      role: "Flutter Developer",
      image: "/Esraa_Mohamed.jpg",
      description:
        "Focuses on integrating GPS and real-time notifications to enhance mobile app functionality.",
      icon: <Smartphone className="w-5 h-5" />,
      social: {
        github: "https://github.com/ESRAA7751",
        linkedin: "https://www.linkedin.com/in/esraa-elsherbini-80785b254",
      },
    },
    {
      name: "Ahmed Salem",
      role: "AI Developer",
      image: "/Salem.jpg",
      description:
        "Specializes in deep learning techniques to analyze and predict road conditions using AI models.",
      icon: <Code className="w-5 h-5" />,
      social: {
        github: "https://github.com/A7mad-Salem",
        linkedin: "https://www.linkedin.com/in/ahmed-salem-001967280/",
      },
    },
    {
      name: "Asmaa Yassin",
      role: "AI Developer",
      image: "/Asmaa.jpg",
      description:
        "Works on developing predictive algorithms and time estimation models to improve project accuracy.",
      icon: <Code className="w-5 h-5" />,
      social: {
        github: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-secondary">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              We're a diverse group of students passionate about technology and
              innovation, working together to create a solution that makes roads
              safer for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
                className="bg-blue-900/30 rounded-xl overflow-hidden border border-blue-800/50 group hover:border-blue-700 transition-all duration-300 h-full"
              >
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto aspect-[3/3] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={member.image || "/Place_holder.jpg"}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="p-1 bg-blue-800/50 rounded-full text-blue-300">
                        {member.icon}
                      </span>
                      <p className="text-slate-200">{member.role}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-slate-300 mb-4">{member.description}</p>
                  <div className="flex space-x-3">
                    {member.name === "Esraa Gamal" ? (
                      <a
                        href={member.social.behance}
                        className="p-2 bg-blue-900/50 rounded-full text-slate-300 hover:text-blue-300 transition-colors"
                        aria-label={`${member.name}'s Behance`}
                        target="_blank"
                      >
                        <FaBehance size={18} />
                      </a>
                    ) : (
                      <a
                        href={member.social.github}
                        className="p-2 bg-blue-900/50 rounded-full text-slate-300 hover:text-blue-300 transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                        target="_blank"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-blue-900/50 rounded-full text-slate-300 hover:text-blue-300 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                      target="_blank"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
