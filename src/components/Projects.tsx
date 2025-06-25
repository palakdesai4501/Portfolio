'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from '../app/context/ThemeContext'

const Projects = () => {
  const { theme } = useTheme()
  
  // Theme-aware particle colors
  const getParticleColor = () => theme === 'light' ? '#1F6FEB' : '#58A6FF'
  const projects = [
    {
      title: 'GoTravel France',
      description: 'A mobile travel companion app offering AI-driven recommendations, interactive scavenger hunts, and real-time itinerary planning for tourists exploring France.',
      image: '/api/placeholder/400/300',
      github: 'https://github.com/palakdesai4501/travel-france',
      technologies: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Expo'],
    },
    {
      title: 'Phone Intellect',
      description: 'A microservices-based platform to compare real-time mobile plans from major telecom providers using automated scraping and optimized data processing.',
      image: '/api/placeholder/400/300',
      github: 'https://github.com/palakdesai4501/MobilePlanPriceAnalysis',
      technologies: ['Java', 'Spring Boot', 'React', 'Selenium'],
    },
    {
      title: 'OptiPrice',
      description: 'A web application that helps vendors set optimal product prices using machine learning models and sentiment analysis of customer reviews.',
      image: '/api/placeholder/400/300',
      github: 'https://github.com/palakdesai4501/optiPrice',
      technologies: ['Angular', 'Python', 'Flask', 'MongoDB', 'Scikit-learn'],
    },
    {
      title: 'EcoWave',
      description: 'A sustainable e-commerce platform with real-time environmental impact tracking and secure Stripe-powered transactions.',
      image: '/api/placeholder/400/300',
      github: 'https://github.com/palakdesai4501/EcoWave_Project',
      technologies: ['Python', 'Django', 'JavaScript', 'SQLite', 'Chart.js'],
    },
    {
      title: 'Nestlé Chatbot',
      description: 'An AI-powered chatbot combining vector search and graph databases to provide smart, contextual recipe recommendations from the Nestlé website.',
      image: '/api/placeholder/400/300',
      github: 'https://github.com/palakdesai4501/AI-Based-Chatbot',
      technologies: ['FastAPI', 'Python', 'Chroma DB', 'Neo4j', 'Vertex AI', 'OpenAI'],
    },
    {
      title: 'ViewTube',
      description: 'A responsive YouTube clone with real-time video search, playback, and channel browsing using the Rapid API and React.js.',
      image: '/api/placeholder/400/300',
      github: 'https://github.com/palakdesai4501/ViewTube',
      technologies: ['React.js', 'Rapid API', 'Axios', 'Vite'],
    }
  ]

  return (
    <section 
      id="projects" 
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundColor: 'var(--bg-primary)' }} />
      <div className="absolute inset-0 bg-[url('/dots.svg')] bg-center opacity-5" />
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large particles */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute rounded-full"
            style={{ 
              width: '10px',
              height: '10px',
              backgroundColor: getParticleColor(), 
              opacity: 0.18
            }}
            initial={{
              x: `${25 + i * 50}vw`,
              y: `${20 + i * 45}vh`,
            }}
            animate={{
              x: [`${25 + i * 50}vw`, `${35 + i * 50}vw`, `${25 + i * 50}vw`],
              y: [`${20 + i * 45}vh`, `${30 + i * 45}vh`, `${20 + i * 45}vh`],
            }}
            transition={{
              duration: 9 + i * 2.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.2
            }}
          />
        ))}
        
        {/* Medium particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`medium-${i}`}
            className="absolute rounded-full"
            style={{ 
              width: '7px',
              height: '7px',
              backgroundColor: getParticleColor(), 
              opacity: 0.25
            }}
            initial={{
              x: `${15 + i * 30}vw`,
              y: `${30 + i * 20}vh`,
            }}
            animate={{
              x: [`${15 + i * 30}vw`, `${25 + i * 30}vw`, `${15 + i * 30}vw`],
              y: [`${30 + i * 20}vh`, `${40 + i * 20}vh`, `${30 + i * 20}vh`],
            }}
            transition={{
              duration: 6.5 + i * 1.3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.9
            }}
          />
        ))}
        
        {/* Small particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute rounded-full"
            style={{ 
              width: '4px',
              height: '4px',
              backgroundColor: getParticleColor(), 
              opacity: 0.4
            }}
            initial={{
              x: `${20 + i * 20}vw`,
              y: `${50 + (i % 2) * 20}vh`,
            }}
            animate={{
              x: [`${20 + i * 20}vw`, `${30 + i * 20}vw`, `${20 + i * 20}vw`],
              y: [`${50 + (i % 2) * 20}vh`, `${60 + (i % 2) * 20}vh`, `${50 + (i % 2) * 20}vh`],
            }}
            transition={{
              duration: 4.8 + i * 0.8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.6
            }}
          />
        ))}
      </div>

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
            Featured{' '}
            <span className="gradient-text">
              Projects
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
            Here are some of my recent projects that showcase my skills in full-stack development, 
            AI integration, and modern web technologies.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              className="group relative"
            >

              {/* Card Background Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-hover)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              
              <div className="relative backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 github-card">
                {/* Project Image Placeholder */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, rgba(31, 111, 235, 0.1), rgba(88, 166, 255, 0.1))' }}
                  />
                  <div 
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--bg-primary)' }}
                  >
                    <div className="text-center">
                      <div 
                        className="w-16 h-16 mx-auto mb-2 rounded-lg flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))' }}
                      >
                        <span className="text-2xl font-bold text-white">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Project Preview</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 backdrop-blur-sm rounded-full transition-all duration-200 hover:bg-[var(--accent-primary)] hover:bg-opacity-20"
                        style={{ 
                          backgroundColor: 'var(--bg-secondary)',
                          color: 'var(--text-primary)'
                        }}
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--accent-primary)] group-hover:to-[var(--accent-hover)] transition-colors duration-200"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {project.title}
                  </h3>
                  
                  <p className="mb-4 text-sm leading-relaxed line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md text-xs border"
                        style={{ 
                          backgroundColor: 'var(--bg-primary)',
                          borderColor: 'var(--border-primary)',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/palakdesai4501"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg border github-btn"
          >
            <Github size={20} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 