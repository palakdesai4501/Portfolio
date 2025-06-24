'use client'

import { useState, useRef, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

// 3D Animated Sphere with GitHub theme
function AnimatedSphere() {
  const sphereRef = useRef<any>(null)

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#58A6FF"
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
      color: '#C9D1D9'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/palakdesai4501',
      color: '#58A6FF'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:desai1j@uwindsor.ca',
      color: '#58A6FF'
    }
  ]

  return (
    <section 
      id="contact" 
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: '#0D1117' }}
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundColor: '#0D1117' }} />
      
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
            style={{ color: '#C9D1D9' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58A6FF] to-[#1F6FEB]">
              Connect
            </span>
          </motion.h2>
          <motion.p
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: '#8B949E' }}
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
            <div className="absolute -inset-1 bg-gradient-to-r from-[#58A6FF] to-[#1F6FEB] rounded-2xl blur opacity-20" />
            
            <div 
              className="relative backdrop-blur-sm border rounded-2xl p-8"
              style={{ 
                backgroundColor: '#161B22',
                borderColor: '#30363D'
              }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#C9D1D9' }}>
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
                    color: '#238636'
                  }}
                >
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium" style={{ color: '#8B949E' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-20"
                      style={{ 
                        backgroundColor: '#0D1117',
                        borderColor: '#30363D',
                        color: '#C9D1D9'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#58A6FF'
                        e.currentTarget.style.boxShadow = '0 0 0 2px rgba(88, 166, 255, 0.2)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#30363D'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium" style={{ color: '#8B949E' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-20"
                      style={{ 
                        backgroundColor: '#0D1117',
                        borderColor: '#30363D',
                        color: '#C9D1D9'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#58A6FF'
                        e.currentTarget.style.boxShadow = '0 0 0 2px rgba(88, 166, 255, 0.2)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#30363D'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium" style={{ color: '#8B949E' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-20"
                    style={{ 
                      backgroundColor: '#0D1117',
                      borderColor: '#30363D',
                      color: '#C9D1D9'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#58A6FF'
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(88, 166, 255, 0.2)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#30363D'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium" style={{ color: '#8B949E' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-20 resize-none"
                    style={{ 
                      backgroundColor: '#0D1117',
                      borderColor: '#30363D',
                      color: '#C9D1D9'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#58A6FF'
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(88, 166, 255, 0.2)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#30363D'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'
                  }`}
                  style={{ 
                    background: isSubmitting 
                      ? 'linear-gradient(135deg, #30363D, #21262D)' 
                      : 'linear-gradient(135deg, #58A6FF, #1F6FEB)',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-1px)'
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(88, 166, 255, 0.3)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }
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
            <div className="relative h-64 rounded-2xl overflow-hidden" style={{ backgroundColor: '#161B22' }}>
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                  <AnimatedSphere />
                </Suspense>
              </Canvas>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#C9D1D9' }}>
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
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group ${
                    info.href === '#' ? 'cursor-default' : 'cursor-pointer'
                  }`}
                  style={{ 
                    backgroundColor: '#161B22',
                    border: '1px solid #30363D'
                  }}
                  onMouseEnter={(e) => {
                    if (info.href !== '#') {
                      e.currentTarget.style.borderColor = '#58A6FF'
                      e.currentTarget.style.backgroundColor = '#1C2128'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (info.href !== '#') {
                      e.currentTarget.style.borderColor = '#30363D'
                      e.currentTarget.style.backgroundColor = '#161B22'
                    }
                  }}
                >
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: '#0D1117' }}
                  >
                    <info.icon size={24} style={{ color: '#58A6FF' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: '#C9D1D9' }}>{info.label}</h4>
                    <p style={{ color: '#8B949E' }}>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold" style={{ color: '#C9D1D9' }}>Follow Me</h4>
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
                    className="p-3 rounded-lg transition-all duration-300"
                    style={{ 
                      backgroundColor: '#161B22',
                      border: '1px solid #30363D',
                      color: social.color
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#58A6FF'
                      e.currentTarget.style.backgroundColor = '#1C2128'
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(88, 166, 255, 0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#30363D'
                      e.currentTarget.style.backgroundColor = '#161B22'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
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