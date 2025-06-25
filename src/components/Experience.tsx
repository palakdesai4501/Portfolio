'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import { useTheme } from '../app/context/ThemeContext'

const Experience = () => {
  const { theme } = useTheme()
  
  // Theme-aware particle colors
  const getParticleColor = () => theme === 'light' ? '#1F6FEB' : '#58A6FF'
  const experiences = [
    {
      company: 'Opreto Corporation',
      role: 'Software Developer Co-op',
      duration: 'Jan 2025 – Apr 2025',
      location: 'Windsor, Canada',
      description: 'Worked on AI-driven desktop applications and optimized React.js components. Led development of innovative solutions using cutting-edge technologies and modern development practices.',
      technologies: ['Electron.js', 'React.js', 'TypeScript', 'NestJS', 'TanStack Query', 'OpenAI API', 'Deepgram', 'Jest', 'AWS', 'Pulumi']
    },
    {
      company: 'Adaptable Services',
      role: 'Software Developer',
      duration: 'Dec 2022 – Dec 2023',
      location: 'Gujarat, India',
      description: 'Full-stack development role focused on converting designs to responsive components and backend optimization. Implemented CI/CD practices and containerization for improved deployment processes.',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'GitHub Actions', 'CI/CD', 'Figma']
    },
    {
      company: 'Digital Strikers',
      role: 'Full Stack Developer Intern',
      duration: 'Jan 2022 – Oct 2022',
      location: 'Gujarat, India',
      description: 'Intern position focusing on admin portal redesign and REST API development. Gained experience in Angular, Java Spring Boot, and database optimization while working on microservice architectures.',
      technologies: ['Angular', 'Java', 'Spring Boot', 'Microsoft SQL Server', 'REST APIs', 'Microservices', 'Reactive Forms']
    }
  ]

  return (
    <section 
      id="experience" 
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundColor: 'var(--bg-primary)' }} />
      <div className="absolute inset-0 bg-[url('/circuit.svg')] bg-center opacity-5" />
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large particles */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute rounded-full"
            style={{ 
              width: '15px',
              height: '15px',
              backgroundColor: getParticleColor(), 
              opacity: 0.12
            }}
            initial={{
              x: `${20 + i * 60}vw`,
              y: `${15 + i * 50}vh`,
            }}
            animate={{
              x: [`${20 + i * 60}vw`, `${30 + i * 60}vw`, `${20 + i * 60}vw`],
              y: [`${15 + i * 50}vh`, `${25 + i * 50}vh`, `${15 + i * 50}vh`],
            }}
            transition={{
              duration: 10 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}
        
        {/* Medium particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`medium-${i}`}
            className="absolute rounded-full"
            style={{ 
              width: '8px',
              height: '8px',
              backgroundColor: getParticleColor(), 
              opacity: 0.2
            }}
            initial={{
              x: `${10 + i * 25}vw`,
              y: `${25 + (i % 2) * 35}vh`,
            }}
            animate={{
              x: [`${10 + i * 25}vw`, `${20 + i * 25}vw`, `${10 + i * 25}vw`],
              y: [`${25 + (i % 2) * 35}vh`, `${35 + (i % 2) * 35}vh`, `${25 + (i % 2) * 35}vh`],
            }}
            transition={{
              duration: 7 + i * 1.2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8
            }}
          />
        ))}
        
        {/* Small particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute rounded-full"
            style={{ 
              width: '4px',
              height: '4px',
              backgroundColor: getParticleColor(), 
              opacity: 0.35
            }}
            initial={{
              x: `${15 + i * 18}vw`,
              y: `${40 + (i % 3) * 15}vh`,
            }}
            animate={{
              x: [`${15 + i * 18}vw`, `${25 + i * 18}vw`, `${15 + i * 18}vw`],
              y: [`${40 + (i % 3) * 15}vh`, `${50 + (i % 3) * 15}vh`, `${40 + (i % 3) * 15}vh`],
            }}
            transition={{
              duration: 5 + i * 1,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.6
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            Professional{' '}
            <span className="gradient-text">
              Experience
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
            My journey through various roles, contributing to innovative projects and delivering 
            impactful solutions across different organizations and technologies.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-hover)]" />

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-hover)] rounded-full border-4 z-10" 
                     style={{ borderColor: 'var(--bg-primary)' }} />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="group relative"
                  >
                    {/* Card Background Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-hover)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    <div className="relative backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 github-card">
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mb-2" style={{ color: 'var(--accent-primary)' }}>
                          <div className="flex items-center gap-2">
                            <ExternalLink size={16} />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.1 }}
                              className="px-3 py-1 rounded-full text-sm transition-all duration-200 cursor-pointer border hover:bg-[var(--bg-tertiary)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
                              style={{ 
                                backgroundColor: 'var(--bg-primary)',
                                borderColor: 'var(--border-primary)',
                                color: 'var(--accent-primary)'
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-300 github-btn-primary"
            style={{
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))',
              color: 'white',
              textDecoration: 'none'
            }}
          >
            Let's Work Together
            <ExternalLink size={20} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 