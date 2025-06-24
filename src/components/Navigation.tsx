'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-md shadow-lg' 
          : ''
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(13, 17, 23, 0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid #30363D' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold cursor-pointer"
            style={{ color: '#C9D1D9' }}
            onClick={() => scrollToSection('#home')}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58A6FF] to-[#1F6FEB]">
              PD
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="transition-colors duration-200 font-medium px-3 py-2 rounded-lg relative group"
                  style={{ color: '#8B949E' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#C9D1D9'
                    e.currentTarget.style.backgroundColor = '#161B22'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#8B949E'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  {item.name}
                  {/* Hover underline effect */}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#58A6FF] to-[#1F6FEB] transition-all duration-300 group-hover:w-full"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ 
                color: '#8B949E',
                backgroundColor: isOpen ? '#161B22' : 'transparent' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C9D1D9'
                e.currentTarget.style.backgroundColor = '#161B22'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#8B949E'
                e.currentTarget.style.backgroundColor = isOpen ? '#161B22' : 'transparent'
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden backdrop-blur-md border-t"
          style={{ 
            backgroundColor: 'rgba(13, 17, 23, 0.95)',
            borderColor: '#30363D'
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 font-medium"
                style={{ color: '#8B949E' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#C9D1D9'
                  e.currentTarget.style.backgroundColor = '#161B22'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8B949E'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navigation 