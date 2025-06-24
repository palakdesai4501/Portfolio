'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Opreto Corporation',
      role: 'Software Developer Co-op',
      duration: 'Jan 2025 – Apr 2025',
      location: 'Windsor, Canada',
      description: 'Currently working on AI-driven desktop applications and optimizing React.js components. Leading development of innovative solutions using cutting-edge technologies and modern development practices.',
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
      style={{ backgroundColor: '#0D1117' }}
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundColor: '#0D1117' }} />
      <div className="absolute inset-0 bg-[url('/circuit.svg')] bg-center opacity-5" />

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
            style={{ color: '#C9D1D9' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58A6FF] to-[#1F6FEB]">
              Experience
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
            My journey through various roles, contributing to innovative projects and delivering 
            impactful solutions across different organizations and technologies.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#58A6FF] to-[#1F6FEB]" />

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
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#58A6FF] to-[#1F6FEB] rounded-full border-4 z-10" 
                     style={{ borderColor: '#0D1117' }} />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="group relative"
                  >
                    {/* Card Background Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#58A6FF] to-[#1F6FEB] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    <div 
                      className="relative backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300"
                      style={{ 
                        backgroundColor: '#161B22',
                        borderColor: '#30363D'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#58A6FF'
                        e.currentTarget.style.backgroundColor = '#1C2128'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#30363D'
                        e.currentTarget.style.backgroundColor = '#161B22'
                      }}
                    >
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-3" style={{ color: '#C9D1D9' }}>
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mb-2" style={{ color: '#58A6FF' }}>
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
                      <p className="mb-6 leading-relaxed" style={{ color: '#8B949E' }}>
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: '#C9D1D9' }}>
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.1 }}
                              className="px-3 py-1 rounded-full text-sm transition-all duration-200 cursor-pointer"
                              style={{ 
                                backgroundColor: '#0D1117',
                                border: '1px solid #30363D',
                                color: '#58A6FF'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#21262D'
                                e.currentTarget.style.borderColor = '#58A6FF'
                                e.currentTarget.style.color = '#C9D1D9'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#0D1117'
                                e.currentTarget.style.borderColor = '#30363D'
                                e.currentTarget.style.color = '#58A6FF'
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #58A6FF, #1F6FEB)',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(88, 166, 255, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)'
              }}
            >
              Let's Work Together
              <ExternalLink size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 