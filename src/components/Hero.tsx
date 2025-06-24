'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Text } from '@react-three/drei'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { inSphere } from 'maath/random'

// 3D Particle Field Component with GitHub theme
function Stars(props: any) {
  const ref = useRef<any>(null)
  const sphere = inSphere(new Float32Array(5000), { radius: 1.5 })

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#58A6FF"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

// Floating 3D Text
function FloatingText() {
  const textRef = useRef<any>()

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Text
      ref={textRef}
      position={[0, 0, 0]}
      fontSize={1}
      color="#C9D1D9"
      anchorX="center"
      anchorY="middle"
    >
      PD
    </Text>
  )
}

const Hero = () => {
  const scrollToAbout = () => {
    if (typeof window !== 'undefined') {
      const element = document.querySelector('#about')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0D1117' }}
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay with GitHub theme */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: `linear-gradient(to bottom, transparent, rgba(13, 17, 23, 0.8), #0D1117)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            style={{ color: '#C9D1D9' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Palak{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#58A6FF] to-[#1F6FEB]"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Desai
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl mb-8 font-light"
            style={{ color: '#8B949E' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Software Developer & AI Enthusiast
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#8B949E' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Master's graduate in Applied Computing with AI specialization. 
            Full-stack developer passionate about building scalable applications with modern technologies 
            and integrating AI-driven solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { icon: Github, href: 'https://github.com/palakdesai4501', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/palakdesai4501', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 rounded-full backdrop-blur-sm border transition-all duration-300 group"
                style={{ 
                  backgroundColor: '#161B22',
                  borderColor: '#30363D',
                  color: '#C9D1D9'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#58A6FF'
                  e.currentTarget.style.backgroundColor = '#21262D'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(88, 166, 255, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#30363D'
                  e.currentTarget.style.backgroundColor = '#161B22'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToAbout}
            className="transition-colors duration-300 focus:outline-none"
            style={{ color: '#8B949E' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#C9D1D9'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#8B949E'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements with GitHub theme */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: '#58A6FF' }}
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1000,
            }}
            animate={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1000,
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Additional background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10" 
           style={{ background: 'linear-gradient(135deg, #58A6FF, #1F6FEB)' }} />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full opacity-5" 
           style={{ background: 'linear-gradient(135deg, #1F6FEB, #58A6FF)' }} />
    </section>
  )
}

export default Hero 