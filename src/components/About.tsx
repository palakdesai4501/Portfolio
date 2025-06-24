'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, TestTube, GraduationCap, MapPin, Calendar } from 'lucide-react'

const About = () => {
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

        {/* Main Content - Summary and Education */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
          {/* Personal Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6 leading-relaxed text-lg" style={{ color: 'var(--text-secondary)' }}>
              <p>
                I'm a software developer with a focus on building clean, reliable systems that scale. My background spans full-stack development, cloud infrastructure, 
                and AI-powered tools, with hands-on experience across web, mobile, and desktop platforms.
              </p>
              <p>
                I've worked on everything from live transcription apps using OpenAI and Electron to cross-platform mobile projects that shipped to real users. 
                I like working close to the product, collaborating with teams, and writing code that's easy to reason about six months down the line.
              </p>
              <p>
                I care about the details—how an interface feels, how an API responds, how a system holds up under real-world load. 
                My goal isn't just to ship features; it's to build tools that people trust and enjoy using.
              </p>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Education
              </h3>
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                My academic journey in computer science and artificial intelligence
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-hover)]"></div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex items-start space-x-6"
                  >
                    {/* Timeline Dot */}
                    <div className="relative flex-shrink-0">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                        style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))' }}
                      >
                        <GraduationCap size={24} className="text-white" />
                      </div>
                    </div>

                    {/* Education Card */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex-1 group github-card"
                    >
                      <div className="backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 github-card">
                        <div className="mb-4">
                          <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                            {edu.degree}
                          </h4>
                          {edu.specialization && (
                            <p className="text-base font-medium mb-2" style={{ color: 'var(--accent-primary)' }}>
                              {edu.specialization}
                            </p>
                          )}
                          <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                            {edu.university}
                          </p>
                        </div>
                        
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-2" style={{ color: 'var(--text-muted)' }}>
                            <Calendar size={14} />
                            <span className="text-sm">{edu.period}</span>
                          </div>
                          <div className="flex items-center space-x-2" style={{ color: 'var(--text-muted)' }}>
                            <MapPin size={14} />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

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
            {['C', 'SQL', 'HTML5', 'CSS3', 'Shell Scripting', 'React Native', 'Flask', 'REST APIs', 'JSON', 'Design Patterns', 'OOP'].map((tech) => (
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