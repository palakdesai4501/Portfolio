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
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900" />
      <div className="absolute inset-0 bg-[url('/circuit.svg')] bg-center opacity-5" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Experience
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
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
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500" />

          {/* Experience Cards */}
          <div className="space-y-12">
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
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="group relative"
                  >
                    {/* Card Background Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
                    
                    <div className="relative bg-slate-800/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-purple-300 mb-2">
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
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      {/* Technologies */}
                      <div>
                        <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.1 }}
                              className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-200"
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
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
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