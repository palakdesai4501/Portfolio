/**
 * Chatbot Component
 *
 * An interactive AI-powered chatbot that provides information about the portfolio owner.
 * Features:
 * - Animated floating button with pulsing effects
 * - Full-screen chat interface on mobile, floating window on desktop
 * - Real-time conversation with Google Gemini API
 * - Message history and typing indicators
 * - Theme-aware styling and responsive design
 */

'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

/**
 * Interface defining the structure of a chat message
 */
interface Message {
  id: string // Unique identifier for the message
  text: string // Message content
  isUser: boolean // Whether the message is from the user (true) or bot (false)
  timestamp: Date // When the message was created
}

/**
 * Main Chatbot Component
 *
 * Manages the complete chatbot functionality including state, API calls, and UI
 */
const Chatbot = () => {
  // Component state management
  const [isOpen, setIsOpen] = useState(false) // Controls chat window visibility
  const [messages, setMessages] = useState<Message[]>([
    // Stores conversation history
    {
      id: '1',
      text: "Hi! I'm Palak's AI assistant 🤖 Ask me about her experience, skills, projects, or anything else you'd like to know about her!",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('') // Current user input
  const [isLoading, setIsLoading] = useState(false) // API request loading state
  const messagesEndRef = useRef<HTMLDivElement>(null) // Reference for auto-scrolling

  /**
   * Automatically scrolls to the bottom of the messages container
   * Used to show the latest message when new ones are added
   */
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Auto-scroll to bottom whenever new messages are added
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Pre-warm only in production to avoid dev conflicts
  useEffect(() => {
    const warmUpAPI = async () => {
      try {
        // Only pre-warm in production to avoid development conflicts
        if (window.location.hostname !== 'localhost') {
          await fetch('/api/chat', { method: 'GET' })
        }
      } catch {
        // Silently fail
      }
    }
    
    const timer = setTimeout(warmUpAPI, 2000) // Longer delay for stability
    return () => clearTimeout(timer)
  }, [])

    /**
   * Sends a user message to the AI and processes the response
   * Simple, reliable implementation
   */
  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    const currentInput = inputValue
    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentInput,
          conversationHistory: messages,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()

      const botMessage: Message = {
        id: `bot-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        text: data.response || 'Sorry, I received an empty response.',
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])

    } catch (error) {
      console.error('Chat error:', error)
      
      let errorText = 'Sorry, I encountered an error. Please try again.'
      
      if (error instanceof Error) {
        if (error.message.includes('fetch') || error.message.includes('Failed to fetch')) {
          errorText = 'Connection failed. Please check your internet and try again.'
        } else if (error.message.includes('500')) {
          errorText = 'Server error. The chatbot might be starting up, please try again.'
        }
      }

      const errorMessage: Message = {
        id: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        text: errorText,
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * Handles keyboard shortcuts in the input field
   * Enter key sends message, Shift+Enter adds new line
   */
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Animated floating chat button with attention-grabbing effects */}
      <div
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        {/* Multiple pulsing ring animations for visibility */}
        <div className='absolute inset-0 w-14 h-14 sm:w-16 sm:h-16'>
          <div className='absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-hover)] opacity-75 animate-ping' />
          <div className='absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-hover)] opacity-50 animate-pulse' />
        </div>

        {/* Main chat button with multiple animation effects */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            scale: { duration: 0.5 },
            rotate: {
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'easeInOut',
            },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className='relative w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer'
          style={{
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))',
            boxShadow: '0 8px 32px rgba(31, 111, 235, 0.4)',
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <MessageCircle size={20} className='text-white sm:w-6 sm:h-6' />
          </motion.div>

          {/* Animated notification dot to suggest interactivity */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'easeInOut',
            }}
            className='absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full border-2 border-white'
          />
        </motion.button>
      </div>

      {/* Main chat interface - responsive modal window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className='fixed inset-4 sm:bottom-6 sm:right-6 sm:inset-auto sm:w-96 sm:h-[500px] w-auto h-auto max-h-[calc(100vh-2rem)] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden backdrop-blur-sm'
            style={{
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-primary)',
            }}
          >
            {/* Chat window header with branding and close button */}
            <div
              className='p-3 sm:p-4 flex items-center justify-between border-b'
              style={{
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))',
                borderColor: 'var(--border-primary)',
              }}
            >
              <div className='flex items-center space-x-2 sm:space-x-3'>
                <div className='w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center'>
                  <Bot size={16} className='text-white sm:w-[18px] sm:h-[18px]' />
                </div>
                <div>
                  <h3 className='text-sm sm:text-base font-semibold text-white'>
                    Palak&apos;s AI Assistant
                  </h3>
                  <p className='text-xs text-white/80'>Ask me about Palak!</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className='p-1 rounded-full hover:bg-white/20 transition-colors'
              >
                <X size={18} className='text-white sm:w-5 sm:h-5' />
              </motion.button>
            </div>

            {/* Messages container with auto-scroll */}
            <div className='flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4'>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] p-2.5 sm:p-3 rounded-2xl ${
                      message.isUser
                        ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-hover)] text-white'
                        : 'border'
                    }`}
                    style={{
                      backgroundColor: message.isUser ? undefined : 'var(--bg-secondary)',
                      borderColor: message.isUser ? undefined : 'var(--border-primary)',
                      color: message.isUser ? undefined : 'var(--text-primary)',
                    }}
                  >
                    <div className='flex items-start space-x-1.5 sm:space-x-2'>
                      {!message.isUser && (
                        <Bot
                          size={14}
                          className='mt-1 flex-shrink-0 sm:w-4 sm:h-4'
                          style={{ color: 'var(--accent-primary)' }}
                        />
                      )}
                      {message.isUser && (
                        <User size={14} className='mt-1 flex-shrink-0 text-white sm:w-4 sm:h-4' />
                      )}
                      <p className='text-xs sm:text-sm leading-relaxed'>{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator animation while AI is responding */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex justify-start'
                >
                  <div
                    className='p-2.5 sm:p-3 rounded-2xl border flex items-center space-x-1.5 sm:space-x-2'
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-primary)',
                    }}
                  >
                    <Bot
                      size={14}
                      className='sm:w-4 sm:h-4'
                      style={{ color: 'var(--accent-primary)' }}
                    />
                    <div className='flex space-x-1'>
                      <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--accent-primary)] rounded-full animate-bounce' />
                      <div
                        className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--accent-primary)] rounded-full animate-bounce'
                        style={{ animationDelay: '0.1s' }}
                      />
                      <div
                        className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--accent-primary)] rounded-full animate-bounce'
                        style={{ animationDelay: '0.2s' }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Message input area with send button */}
            <div className='p-3 sm:p-4 border-t' style={{ borderColor: 'var(--border-primary)' }}>
              <div className='flex items-center space-x-2'>
                <div className='flex-1'>
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder='Ask me about Palak'
                    className='w-full p-2.5 sm:p-3 rounded-xl items-center border resize-none focus:outline-none focus:ring-2 transition-all text-sm'
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-primary)',
                      color: 'var(--text-primary)',
                    }}
                    rows={1}
                    disabled={isLoading}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className='p-2.5 sm:p-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed h-10 sm:h-12 flex items-center justify-center cursor-pointer'
                  style={{
                    background:
                      inputValue.trim() && !isLoading
                        ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))'
                        : 'var(--bg-tertiary)',
                    color: inputValue.trim() && !isLoading ? 'white' : 'var(--text-secondary)',
                  }}
                >
                  <Send size={16} className='sm:w-[18px] sm:h-[18px]' />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot
