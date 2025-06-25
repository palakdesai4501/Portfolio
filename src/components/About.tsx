'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, TestTube, GraduationCap, MapPin, Calendar } from 'lucide-react'
import { useTheme } from '../app/context/ThemeContext'

const About = () => {
  const { theme } = useTheme()
  
  // Theme-aware particle colors
  const getParticleColor = () => theme === 'light' ? '#1F6FEB' : '#58A6FF'
  const skills = [
    {
      icon: Code,
      title: 'Programming & Frameworks',
      description: 'Full-stack development with modern languages and frameworks',
      technologies: ['Java', 'JavaScript', 'Python', 'TypeScript', 'React.js', 'Spring Boot', 'Node.js', 'Angular']
    },
    {
      icon: Database,
      title: 'Databases & Backend',
      description: 'Database design and backend architecture expertise',
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL Server', 'Firebase', 'Express.js', 'NestJS']
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Cloud deployment and CI/CD pipeline management',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Maven']
    },
    {
      icon: TestTube,
      title: 'Testing & Tools',
      description: 'Comprehensive testing and development tools',
      technologies: ['Jest', 'JUnit', 'Selenium', 'Mockito', 'Postman', 'JIRA', 'Git', 'Agile/Scrum']
    }
  ]

  const education = [
    {
      degree: 'Master of Applied Computing',
      specialization: 'Artificial Intelligence Stream',
      university: 'University of Windsor',
      period: 'Jan 2024 - Apr 2025',
      location: 'Windsor, Canada',
      isOngoing: false
    },
    {
      degree: 'Bachelor of Computer Science and Engineering',
      university: 'Gujarat Technological University',
      period: 'Jul 2019 - Jun 2023',
      location: 'Gujarat, India',
      isOngoing: false
    }
  ]

  return (
    <section 
      id="about" 
      className="py-24 px-6 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0" style={{ backgroundColor: 'var(--bg-primary)' }} />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute rounded-full"
            style={{ 
              width: '12px',
              height: '12px',
              backgroundColor: getParticleColor(), 
              opacity: 0.15
            }}
            initial={{
              x: `${15 + i * 35}vw`,
              y: `${20 + i * 25}vh`,
            }}
            animate={{
              x: [`${15 + i * 35}vw`, `${25 + i * 35}vw`, `${15 + i * 35}vw`],
              y: [`${20 + i * 25}vh`, `${30 + i * 25}vh`, `${20 + i * 25}vh`],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1
            }}
          />
        ))}
        
        {/* Medium particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`medium-${i}`}
            className="absolute rounded-full"
            style={{ 
              width: '6px',
              height: '6px',
              backgroundColor: getParticleColor(), 
              opacity: 0.25
            }}
            initial={{
              x: `${25 + i * 20}vw`,
              y: `${35 + i * 15}vh`,
            }}
            animate={{
              x: [`${25 + i * 20}vw`, `${35 + i * 20}vw`, `${25 + i * 20}vw`],
              y: [`${35 + i * 15}vh`, `${25 + i * 15}vh`, `${35 + i * 15}vh`],
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.7
            }}
          />
        ))}
        
        {/* Small particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute rounded-full"
            style={{ 
              width: '3px',
              height: '3px',
              backgroundColor: getParticleColor(), 
              opacity: 0.4
            }}
            initial={{
              x: `${10 + i * 15}vw`,
              y: `${45 + (i % 3) * 10}vh`,
            }}
            animate={{
              x: [`${10 + i * 15}vw`, `${20 + i * 15}vw`, `${10 + i * 15}vw`],
              y: [`${45 + (i % 3) * 10}vh`, `${55 + (i % 3) * 10}vh`, `${45 + (i % 3) * 10}vh`],
            }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
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
            About{' '}
            <span className="gradient-text">
              Me
            </span>
          </motion.h2>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Education
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              My academic journey in computer science and artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative h-full"
                >
                  {/* Gradient Background */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-hover)] rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Main Card */}
                  <div className="relative backdrop-blur-sm border rounded-3xl p-8 h-full transition-all duration-300 overflow-hidden" style={{ 
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-primary)'
                  }}>
                    {/* Decorative Element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--accent-primary)] to-transparent opacity-5 rounded-full -translate-y-16 translate-x-16" />
                    
                    {/* Header with Icon and Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shrink-0"
                        style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))' }}
                      >
                        <GraduationCap size={20} className="text-white" />
                      </div>
                      
                      {/* Level Badge */}
                      <div 
                        className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{ 
                          backgroundColor: 'var(--bg-primary)',
                          borderColor: 'var(--accent-primary)',
                          color: 'var(--accent-primary)'
                        }}
                      >
                        {index === 0 ? 'Graduate' : 'Undergraduate'}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-bold leading-tight mb-2" style={{ color: 'var(--text-primary)' }}>
                          {edu.degree}
                        </h4>
                        {edu.specialization && (
                          <div 
                            className="inline-block px-3 py-1 rounded-lg text-sm font-medium mb-3"
                            style={{ 
                              backgroundColor: 'var(--accent-primary)', 
                              color: 'white'
                            }}
                          >
                            {edu.specialization}
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <p className="text-lg font-semibold mb-3 " style={{ color: 'var(--text-secondary)' }}>
                          {edu.university}
                        </p>
                      </div>
                      
                      {/* Info Grid */}
                      <div className="space-y-4 pt-4 border-t" style={{ borderColor: 'var(--border-primary)' }}>
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: 'var(--bg-primary)' }}
                          >
                            <Calendar size={14} style={{ color: 'var(--accent-primary)' }} />
                          </div>
                          <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                            {edu.period}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: 'var(--bg-primary)' }}
                          >
                            <MapPin size={14} style={{ color: 'var(--accent-primary)' }} />
                          </div>
                          <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Technical Expertise
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A comprehensive toolkit for building modern applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-hover)] rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                
                <div className="relative backdrop-blur-sm border rounded-2xl p-8 h-full transition-all duration-300 github-card">
                  <div 
                    className="mb-6 p-4 rounded-2xl w-fit"
                    style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))' }}
                  >
                    <skill.icon size={28} className="text-white" />
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                    {skill.title}
                  </h4>
                  <p className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {skill.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs transition-all duration-200 cursor-pointer border hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]"
                        style={{ 
                          backgroundColor: 'var(--bg-primary)',
                          color: 'var(--text-secondary)',
                          borderColor: 'var(--border-primary)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h4 className="text-2xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
            Additional Technologies
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {['C', 'SQL', 'HTML5', 'CSS3', 'React Native', 'Flask', 'REST APIs', 'JSON', 'Design Patterns', 'OOP'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 rounded-full text-sm transition-all duration-200 cursor-pointer border hover:border-[var(--accent-primary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"
                style={{ 
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-primary)',
                  color: 'var(--accent-primary)'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 