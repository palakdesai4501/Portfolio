'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

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
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
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
        scrolled ? 'backdrop-blur-md shadow-lg' : ''
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-primary)' : 'none',
        opacity: scrolled ? 0.95 : 1,
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='text-2xl font-bold cursor-pointer'
            style={{ color: 'var(--text-primary)' }}
            onClick={() => scrollToSection('#home')}
          >
            <span className='gradient-text'>PD</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <div className='flex items-center space-x-8'>
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className='transition-all duration-200 font-medium px-4 py-2 rounded-lg cursor-pointer hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className='md:hidden flex items-center space-x-3'>
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className='p-2 rounded-lg transition-all duration-200 cursor-pointer hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
              style={{
                color: 'var(--text-secondary)',
                backgroundColor: isOpen ? 'var(--bg-secondary)' : 'transparent',
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
          className='md:hidden backdrop-blur-md border-t'
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderColor: 'var(--border-primary)',
            opacity: 0.95,
          }}
        >
          <div className='px-2 pt-2 pb-3 space-y-1'>
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className='block w-full text-left px-3 py-2 rounded-md transition-all duration-200 font-medium cursor-pointer hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
                style={{ color: 'var(--text-secondary)' }}
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
