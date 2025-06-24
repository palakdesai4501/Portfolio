'use client'

import { useState, useRef, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import { useTheme } from '../app/context/ThemeContext'

// 3D Animated Sphere with theme support
function AnimatedSphere({ theme }: { theme: string }) {
  const sphereRef = useRef<any>(null)
  const sphereColor = theme === 'light' ? '#1F6FEB' : '#58A6FF'

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color={sphereColor}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

const Contact = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'desai1j@uwindsor.ca',
      href: 'mailto:desai1j@uwindsor.ca'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (437) 669-0174',
      href: 'tel:+14376690174'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Windsor, Ontario, Canada',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/palakdesai4501',
      color: 'var(--text-primary)'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/palakdesai4501',
      color: 'var(--accent-primary)'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:desai1j@uwindsor.ca',
      color: 'var(--accent-primary)'
    }
  ]

  return (
    <section 
      id="contact" 
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundColor: 'var(--bg-primary)' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's{' '}
            <span className="gradient-text">
              Connect
            </span>
          </motion.h2>
          <motion.p
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Interested in collaborating on innovative projects? Looking for a passionate developer 
            with AI expertise? I'd love to hear from you and discuss how we can work together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Form Background Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-hover)] rounded-2xl blur opacity-20" />
            
            <div className="relative backdrop-blur-sm border rounded-2xl p-8 github-card">
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Send me a message
              </h3>
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg border"
                  style={{ 
                    backgroundColor: 'rgba(35, 134, 54, 0.2)',
                    borderColor: 'rgba(35, 134, 54, 0.3)',
                    color: 'var(--success)'
                  }}
                >
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-20 focus:border-[var(--accent-primary)] focus:shadow-[0_0_0_2px_rgba(31,111,235,0.2)]"
                      style={{ 
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-primary)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-20 focus:border-[var(--accent-primary)] focus:shadow-[0_0_0_2px_rgba(31,111,235,0.2)]"
                      style={{ 
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-primary)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-20 focus:border-[var(--accent-primary)] focus:shadow-[0_0_0_2px_rgba(31,111,235,0.2)]"
                    style={{ 
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-primary)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-20 resize-none focus:border-[var(--accent-primary)] focus:shadow-[0_0_0_2px_rgba(31,111,235,0.2)]"
                    style={{ 
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-primary)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 github-btn-primary ${
                    isSubmitting ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
                  }`}
                  style={{ 
                    background: isSubmitting 
                      ? 'var(--border-primary)' 
                      : 'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))',
                    color: 'white'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* 3D Scene */}
            <div className="relative h-64 rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                  <AnimatedSphere theme={theme} />
                </Suspense>
              </Canvas>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Contact Information
              </h3>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group github-card ${
                    info.href === '#' ? 'cursor-default' : 'cursor-pointer'
                  }`}
                >
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: 'var(--bg-primary)' }}
                  >
                    <info.icon size={24} style={{ color: 'var(--accent-primary)' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{info.label}</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                    className="p-3 rounded-lg transition-all duration-300 github-card glow-hover"
                    style={{ color: social.color }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 