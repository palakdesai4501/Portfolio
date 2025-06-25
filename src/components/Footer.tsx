'use client'

import { motion } from 'framer-motion'
import { Heart, Code } from 'lucide-react'

const Footer = () => {
  const technologies = ['Next.js', 'React', 'TypeScript', 'Three.js', 'Framer Motion']

  return (
    <footer
      className='relative py-8 px-6'
      style={{
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className='max-w-4xl mx-auto'>
        <div className='text-center space-y-6'>
          {/* Developer Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex items-center justify-center space-x-2 text-base'
          >
            <Code size={18} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ color: 'var(--text-secondary)' }}>Developed with</span>
            <Heart size={16} className='text-blue-500' fill='currentColor' />
            <span style={{ color: 'var(--text-secondary)' }}>by</span>
            <span className='font-bold gradient-text'>Palak Desai</span>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='space-y-3'
          >
            <h3 className='text-sm font-medium' style={{ color: 'var(--text-primary)' }}>
              Built with Modern Technologies
            </h3>
            <div className='flex flex-wrap justify-center gap-2'>
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className='px-3 py-1 rounded-full text-xs font-medium border'
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
