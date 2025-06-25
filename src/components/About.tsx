'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { useTheme } from '../app/context/ThemeContext'
import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'

// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const About = () => {
  const { theme } = useTheme()

  // Theme-aware particle colors
  const getParticleColor = () => (theme === 'light' ? '#1F6FEB' : '#58A6FF')

  // Technical skills radar chart data
  const skillsData = {
    labels: [
      'JavaScript',
      'TypeScript',
      'Java',
      'C',
      'Python',
      'SQL',
      'HTML5',
      'CSS3/Tailwind CSS',
      'Spring Boot',
      'React.js',
      'React Native',
      'Angular',
      'Node.js',
      'NestJS',
      'Flask',
      'MongoDB/MySQL/PostgreSQL',
      'Selenium/JUnit/Jest/Postman',
      'Docker/Kubernetes/AWS',
      'Git/CI-CD/Agile/Design Patterns',
    ],
    datasets: [
      {
        label: 'Technical Proficiency',
        data: [90, 80, 70, 60, 70, 85, 95, 95, 75, 95, 75, 50, 90, 65, 60, 85, 75, 70, 70],
        backgroundColor:
          theme === 'light' ? 'rgba(31, 111, 235, 0.15)' : 'rgba(88, 166, 255, 0.15)',
        borderColor: theme === 'light' ? '#1F6FEB' : '#58A6FF',
        borderWidth: 3,
        pointBackgroundColor: theme === 'light' ? '#1F6FEB' : '#58A6FF',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: theme === 'light' ? '#1F6FEB' : '#58A6FF',
        pointHoverRadius: 8,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.95)',
        titleColor: theme === 'light' ? '#fff' : '#000',
        bodyColor: theme === 'light' ? '#fff' : '#000',
        borderColor: theme === 'light' ? '#1F6FEB' : '#58A6FF',
        borderWidth: 2,
        padding: 12,
        titleFont: { size: 14, weight: 'bold' as const },
        bodyFont: { size: 13 },
        callbacks: {
          title: function (context: unknown[]) {
            return (context[0] as { label: string }).label
          },
          label: function (context: { parsed: { r: number } }) {
            return `Proficiency: ${context.parsed.r}%`
          },
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: theme === 'light' ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)',
          lineWidth: 1,
        },
        grid: {
          color: theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
          lineWidth: 1,
        },
        pointLabels: {
          color: theme === 'light' ? '#24292E' : '#C9D1D9',
          font: { size: 13, weight: 600 },
          padding: 20,
        },
        ticks: {
          display: true,
          stepSize: 25,
          color: theme === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)',
          font: { size: 10 },
          backdropColor: 'transparent',
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  } as const

  const education = [
    {
      degree: 'Master of Applied Computing',
      specialization: 'Artificial Intelligence Stream',
      university: 'University of Windsor',
      period: 'Jan 2024 - Apr 2025',
      location: 'Windsor, Canada',
    },
    {
      degree: 'Bachelor of Computer Science and Engineering',
      university: 'Gujarat Technological University',
      period: 'Jul 2019 - Jun 2023',
      location: 'Gujarat, India',
    },
  ]

  return (
    <section
      id='about'
      className='py-24 px-6 relative overflow-hidden'
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Elements */}
      <div className='absolute inset-0' style={{ backgroundColor: 'var(--bg-primary)' }} />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      {/* Enhanced floating particles */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className='absolute rounded-full'
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: getParticleColor(),
              opacity: 0.15,
            }}
            initial={{ x: `${15 + i * 35}vw`, y: `${20 + i * 25}vh` }}
            animate={{
              x: [`${15 + i * 35}vw`, `${25 + i * 35}vw`, `${15 + i * 35}vw`],
              y: [`${20 + i * 25}vh`, `${30 + i * 25}vh`, `${20 + i * 25}vh`],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1,
            }}
          />
        ))}
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <motion.h2
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8'
            style={{ color: 'var(--text-primary)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About <span className='gradient-text'>Me</span>
          </motion.h2>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-24'
        >
          <div className='text-center mb-16'>
            <h3
              className='text-3xl md:text-4xl font-bold mb-6'
              style={{ color: 'var(--text-primary)' }}
            >
              Education
            </h3>
            <p className='text-lg max-w-2xl mx-auto' style={{ color: 'var(--text-secondary)' }}>
              My academic journey in computer science and artificial intelligence
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className='group h-full'
              >
                <motion.div whileHover={{ y: -8 }} className='relative h-full'>
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-hover)] rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500' />

                  <div
                    className='relative backdrop-blur-sm border rounded-3xl p-8 h-full transition-all duration-300 overflow-hidden'
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-primary)',
                    }}
                  >
                    <div className='flex items-start justify-between mb-6'>
                      <div
                        className='w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shrink-0'
                        style={{
                          background:
                            'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))',
                        }}
                      >
                        <GraduationCap size={20} className='text-white' />
                      </div>

                      <div
                        className='px-3 py-1 rounded-full text-xs font-medium border'
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          borderColor: 'var(--accent-primary)',
                          color: 'var(--accent-primary)',
                        }}
                      >
                        {index === 0 ? 'Graduate' : 'Undergraduate'}
                      </div>
                    </div>

                    <div className='space-y-4'>
                      <div>
                        <h4
                          className='text-xl font-bold leading-tight mb-2'
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {edu.degree}
                        </h4>
                        {edu.specialization && (
                          <div
                            className='inline-block px-3 py-1 rounded-lg text-sm font-medium mb-3'
                            style={{
                              backgroundColor: 'var(--accent-primary)',
                              color: 'white',
                            }}
                          >
                            {edu.specialization}
                          </div>
                        )}
                      </div>

                      <p
                        className='text-lg font-semibold mb-3'
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {edu.university}
                      </p>

                      <div
                        className='space-y-4 pt-4 border-t'
                        style={{ borderColor: 'var(--border-primary)' }}
                      >
                        <div className='flex items-center space-x-3'>
                          <div
                            className='w-8 h-8 rounded-lg flex items-center justify-center'
                            style={{ backgroundColor: 'var(--bg-primary)' }}
                          >
                            <Calendar size={14} style={{ color: 'var(--accent-primary)' }} />
                          </div>
                          <span
                            className='text-sm font-medium'
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            {edu.period}
                          </span>
                        </div>

                        <div className='flex items-center space-x-3'>
                          <div
                            className='w-8 h-8 rounded-lg flex items-center justify-center'
                            style={{ backgroundColor: 'var(--bg-primary)' }}
                          >
                            <MapPin size={14} style={{ color: 'var(--accent-primary)' }} />
                          </div>
                          <span
                            className='text-sm font-medium'
                            style={{ color: 'var(--text-secondary)' }}
                          >
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

        {/* Technical Skills Radar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-20'
        >
          <div className='text-center mb-16'>
            <h3
              className='text-3xl md:text-4xl font-bold mb-6'
              style={{ color: 'var(--text-primary)' }}
            >
              Technical Expertise
            </h3>
            <p className='text-lg max-w-2xl mx-auto' style={{ color: 'var(--text-secondary)' }}>
              Interactive visualization of my technical skills and proficiency levels
            </p>
          </div>

          {/* Large Comprehensive Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className='relative max-w-4xl mx-auto'
          >
            <div className='h-[600px] w-full'>
              <Radar data={skillsData} options={chartOptions} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
