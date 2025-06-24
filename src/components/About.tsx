'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, TestTube } from 'lucide-react'

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
      location: 'Windsor, Canada'
    },
    {
      degree: 'Bachelor of Computer Science and Engineering',
      university: 'Gujarat Technological University',
      period: 'Jul 2019 - Jun 2023',
      location: 'Gujarat, India'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

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
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Me
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A passionate software developer pursuing AI specialization, with hands-on experience in 
            full-stack development and cutting-edge technologies.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
              I’m a software developer with a focus on building clean, reliable systems that scale. My background spans full-stack development, cloud infrastructure, 
              and AI-powered tools, with hands-on experience across web, mobile, and desktop platforms.
              </p>
              <p>
              I've worked on everything from live transcription apps using OpenAI and Electron to cross-platform mobile projects that shipped to real users. 
              I like working close to the product, collaborating with teams, and writing code that’s easy to reason about six months down the line.
              </p>
              <p>
              I care about the details—how an interface feels, how an API responds, how a system holds up under real-world load. 
              My goal isn’t just to ship features; it’s to build tools that people trust and enjoy using.
              </p>
            </div>
          </motion.div>

          {/* Education & Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white mb-4">Education</h4>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                >
                  <h5 className="text-white font-semibold">{edu.degree}</h5>
                  {edu.specialization && (
                    <p className="text-purple-300 text-sm">{edu.specialization}</p>
                  )}
                  <p className="text-gray-300 text-sm">{edu.university}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-400 text-xs">{edu.period}</span>
                    <span className="text-gray-400 text-xs">{edu.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technical Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
                
                <div className="relative bg-slate-800/80 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full hover:border-purple-500/50 transition-all duration-300">
                  <div className="mb-4 p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl w-fit">
                    <skill.icon size={24} className="text-white" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-3">{skill.title}</h4>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{skill.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300"
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
          className="mt-16 text-center"
        >
          <h4 className="text-xl font-bold text-white mb-6">Additional Technologies</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['C', 'SQL', 'HTML5', 'CSS3', 'Shell Scripting', 'React Native', 'Flask', 'REST APIs', 'JSON', 'Design Patterns', 'OOP'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-200"
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