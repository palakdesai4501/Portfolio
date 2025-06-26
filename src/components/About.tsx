/**
 * About Component
 *
 * This component displays comprehensive information about the portfolio owner including:
 * - Educational background with animated cards
 * - Technical skills visualization with radar chart
 * - Skill categories arranged in satellite layout around the chart
 * - Responsive design with mobile horizontal scroll
 * - Theme-aware styling and floating particle animations
 */

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

// Register required Chart.js components for radar chart functionality
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

/**
 * Interface defining the structure of a skill category
 * Used to organize technical skills into different domains
 */
interface SkillCategory {
  category: string // Name of the skill category (e.g., "Languages", "Frameworks")
  percentage: number // Proficiency level as a percentage (0-100)
  color: string // Theme color for visual representation
  skills: string[] // Array of specific skills within this category
}

/**
 * SkillCard Component
 *
 * Displays an individual skill category with:
 * - Category icon and name
 * - Proficiency percentage with animated progress bar
 * - List of all specific skills/technologies
 * - Hover animations and theme-aware styling
 *
 * @param category - The skill category data to display
 */
const SkillCard = ({ category }: { category: SkillCategory }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    className='relative backdrop-blur-sm border rounded-xl p-3 lg:p-4 w-56 h-auto lg:h-60 shadow-lg transition-all duration-300 flex flex-col'
    style={{
      backgroundColor: 'var(--bg-secondary)',
      borderColor: 'var(--border-primary)',
    }}
  >
    {/* Header: Category icon and percentage */}
    <div className='flex items-center justify-between mb-3'>
      {/* Category icon with first letter */}
      <div
        className='w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md'
        style={{ backgroundColor: category.color }}
      >
        {category.category.charAt(0)}
      </div>
      {/* Percentage badge */}
      <div
        className='px-2 py-1 rounded-full text-xs font-bold'
        style={{
          backgroundColor: `${category.color}15`,
          color: category.color,
        }}
      >
        {category.percentage}%
      </div>
    </div>

    {/* Category title */}
    <h4 className='text-base font-bold mb-2' style={{ color: 'var(--text-primary)' }}>
      {category.category}
    </h4>

    {/* Animated progress bar showing proficiency level */}
    <div className='mb-3'>
      <div className='w-full rounded-full h-1.5' style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <motion.div
          className='h-1.5 rounded-full'
          style={{ backgroundColor: category.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${category.percentage}%` }}
          transition={{ duration: 1.2, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </div>

    {/* Skills list - displays all technologies in this category */}
    <div className='flex flex-wrap gap-1 lg:gap-1.5 flex-1 content-start overflow-hidden'>
      {category.skills.map((skill: string) => (
        <span
          key={skill}
          className='px-1.5 py-0.5 rounded-md text-xs font-medium border'
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderColor: 'var(--border-primary)',
            color: 'var(--text-secondary)',
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
)

/**
 * Main About Component
 *
 * Renders the complete About section with education and technical skills
 * Features responsive design and theme-aware styling
 */
const About = () => {
  const { theme } = useTheme()

  // Get theme-appropriate particle colors for floating animations
  const getParticleColor = () => (theme === 'light' ? '#1F6FEB' : '#58A6FF')

  // Complete skill categories data with proficiency levels and technologies
  const skillCategories = [
    {
      category: 'Languages',
      percentage: 85,
      color: theme === 'light' ? '#1F6FEB' : '#58A6FF',
      skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C'],
    },
    {
      category: 'Frameworks',
      percentage: 90,
      color: theme === 'light' ? '#1F6FEB' : '#58A6FF',
      skills: ['React.js', 'Angular', 'Node.js', 'Spring Boot', 'NestJS', 'Flask'],
    },
    {
      category: 'Databases',
      percentage: 80,
      color: theme === 'light' ? '#1F6FEB' : '#58A6FF',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
    },
    {
      category: 'Testing',
      percentage: 75,
      color: theme === 'light' ? '#1F6FEB' : '#58A6FF',
      skills: ['JUnit', 'Jest', 'Selenium', 'Postman'],
    },
    {
      category: 'DevOps & Cloud',
      percentage: 70,
      color: theme === 'light' ? '#1F6FEB' : '#58A6FF',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    },
    {
      category: 'AI Tools',
      percentage: 90,
      color: theme === 'light' ? '#1F6FEB' : '#58A6FF',
      skills: ['ChatGPT', 'Claude', 'Gemini', 'Cursor', 'Perplexity'],
    },
    {
      category: 'Others',
      percentage: 85,
      color: theme === 'light' ? '#1F6FEB' : '#58A6FF',
      skills: ['Git', 'HTML5', 'CSS3', 'Tailwind CSS', 'Agile'],
    },
  ]

  // Configure radar chart data structure for Chart.js
  const skillsData = {
    labels: skillCategories.map((cat) => cat.category),
    datasets: [
      {
        label: 'Technical Proficiency',
        data: skillCategories.map((cat) => cat.percentage),
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

  // Comprehensive chart configuration with theme-aware styling and responsive design
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
    },
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
          color: theme === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
          lineWidth: 1,
        },
        grid: {
          color: theme === 'light' ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)',
          lineWidth: 1,
        },
        pointLabels: {
          color: theme === 'light' ? '#24292E' : '#C9D1D9',
          font: { size: 10, weight: 600 },
          padding: 15,
        },
        ticks: {
          display: true,
          stepSize: 25,
          color: theme === 'light' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)',
          font: { size: 8 },
          backdropColor: 'transparent',
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  } as const

  // Education background data with detailed information
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
      className='py-16 px-6 relative overflow-hidden'
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background layers for visual depth */}
      <div className='absolute inset-0' style={{ backgroundColor: 'var(--bg-primary)' }} />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

      {/* Animated floating particles for visual interest */}
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
        {/* Main section header with animated title */}
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

        {/* Education background section with animated cards */}
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

        {/* Technical skills section with radar chart and skill cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-8 lg:mb-20 mt-16 lg:mt-48'
        >
          <div className='text-center mb-8 lg:mb-16'>
            <h3
              className='text-2xl lg:text-3xl md:text-4xl font-bold mb-4 lg:mb-6'
              style={{ color: 'var(--text-primary)' }}
            >
              Technical Expertise
            </h3>
            <p
              className='text-base lg:text-lg max-w-2xl mx-auto'
              style={{ color: 'var(--text-secondary)' }}
            >
              Comprehensive overview of my technical skills across different technology areas
            </p>
          </div>

          {/* Complex skills layout: chart in center with cards positioned around it */}
          <div className='relative w-full min-h-[400px] lg:min-h-[1000px] lg:h-[1100px] max-w-7xl mx-auto'>
            {/* Central radar chart - only shown on desktop screens */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className='hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96'
            >
              <Radar data={skillsData} options={chartOptions} />
            </motion.div>

            {/* Skill cards positioned as satellites around the central chart (desktop only) */}
            <div className='hidden lg:block absolute inset-0'>
              {/* Top position - Languages category */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='absolute top-4 left-1/2 transform -translate-x-1/2'
              >
                <SkillCard category={skillCategories[0]} />
              </motion.div>

              {/* Top left position - AI Tools category */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className='absolute top-16 left-4'
              >
                <SkillCard category={skillCategories[5]} />
              </motion.div>

              {/* Top right position - Frameworks category */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className='absolute top-16 right-4'
              >
                <SkillCard category={skillCategories[1]} />
              </motion.div>

              {/* Left position - Others category */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className='absolute top-1/2 left-4 transform -translate-y-1/2'
              >
                <SkillCard category={skillCategories[6]} />
              </motion.div>

              {/* Right position - Databases category */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className='absolute top-1/2 right-4 transform -translate-y-1/2'
              >
                <SkillCard category={skillCategories[2]} />
              </motion.div>

              {/* Bottom left position - Testing category */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className='absolute bottom-16 left-4'
              >
                <SkillCard category={skillCategories[3]} />
              </motion.div>

              {/* Bottom position - DevOps & Cloud category */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className='absolute bottom-4 left-1/2 transform -translate-x-1/2'
              >
                <SkillCard category={skillCategories[4]} />
              </motion.div>
            </div>

            {/* Mobile and tablet responsive layout */}
            <div className='lg:hidden flex flex-col items-center'>
              {/* Radar chart displayed first on mobile devices */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className='w-72 h-72 sm:w-80 sm:h-80 mb-4'
              >
                <Radar data={skillsData} options={chartOptions} />
              </motion.div>

              {/* Horizontally scrollable skill cards for mobile */}
              <div className='w-full overflow-x-auto hide-scrollbar'>
                <div className='flex space-x-3 px-4 pb-2' style={{ width: 'max-content' }}>
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={category.category}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className='flex-shrink-0'
                      style={{ width: '224px' }}
                    >
                      <SkillCard category={category} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
