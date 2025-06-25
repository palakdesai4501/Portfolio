'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Palak's AI assistant 🤖 Ask me about her experience, skills, projects, or anything else you'd like to know about her!",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

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
          message: inputValue,
          conversationHistory: messages,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        const botMessage: Message = {
          id: `bot-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          text: data.response,
          isUser: false,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
      } else {
        throw new Error(data.error || 'Failed to get response')
      }
    } catch {
      const errorMessage: Message = {
        id: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        text: 'Sorry, I encountered an error. Please try again later.',
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg z-40 flex items-center justify-center transition-all duration-300 cursor-pointer ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-hover))',
          boxShadow: '0 8px 32px rgba(31, 111, 235, 0.3)',
        }}
      >
        <MessageCircle size={20} className='text-white sm:w-6 sm:h-6' />
      </motion.button>

      {/* Chat Interface */}
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
            {/* Header */}
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

            {/* Messages */}
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

            {/* Input */}
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
