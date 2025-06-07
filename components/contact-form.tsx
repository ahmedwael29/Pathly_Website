"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin } from "lucide-react"
import { Facebook, Twitter, Instagram, TiktokIcon } from "@/components/social-icons"
import FadeInSection from "@/components/fade-in-section"
import ButtonWithHover from "@/components/button-with-hover"

export default function ContactForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <FadeInSection delay={0.1} duration={0.7} className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Got questions about our app? Want to share your feedback or suggest a new feature? We're all ears and
              excited to hear from you to make things even better!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FadeInSection delay={0.3} duration={0.5} direction="left">
              <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800 h-full">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="mr-4 p-3 bg-blue-500/10 rounded-full text-blue-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Email</h4>
                      <p className="text-slate-400">pathly.app@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="mr-4 p-3 bg-purple-500/10 rounded-full text-purple-400">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Phone</h4>
                      <p className="text-slate-400">+20 1093570059</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="mr-4 p-3 bg-cyan-500/10 rounded-full text-cyan-400">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Office</h4>
                      <p className="text-slate-400">
                        Mansoura
                        <br />
                        Egypt, Dakahlia
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-10">
                  <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <motion.a
                      href="#"
                      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-all hover:bg-blue-600"
                      aria-label="Facebook"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Facebook className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-all hover:bg-blue-400"
                      aria-label="Twitter"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-all hover:instagram-gradient"
                      aria-label="Instagram"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-all hover:tiktok-gradient"
                      aria-label="TikTok"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <TiktokIcon className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4} duration={0.5} direction="right">
              <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
                <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center"
                    >
                      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                    <p className="text-slate-300">Thank you for your message. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ahmed Wael"
                        required
                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ahmed@gmail.com"
                        required
                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 min-h-[150px] focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <ButtonWithHover
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white relative"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block animate-pulse">Sending...</span>
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          </span>
                        </>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </ButtonWithHover>
                  </form>
                )}
              </div>
            </FadeInSection>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
