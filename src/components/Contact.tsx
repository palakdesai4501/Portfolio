'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { useTheme } from '../app/context/ThemeContext'

const Contact = () => {
  const { theme } = useTheme()

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
      value: '4376690174',
      href: 'tel:+14376690174'
    }
  ]

  return (
    <section 
      id="contact" 
      className="py-24 px-6"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
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
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Have a project in mind? I'd love to hear from you and discuss how we can work together.
          </motion.p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
              Contact Information
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-6 rounded-lg transition-all duration-300 group github-card cursor-pointer"
                >
                  <div 
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: 'var(--bg-primary)' }}
                  >
                    <info.icon size={28} style={{ color: 'var(--accent-primary)' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                      {info.label}
                    </h4>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 