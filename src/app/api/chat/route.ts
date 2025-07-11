import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'
import { personalKnowledgeBase } from '../../../data/personalKnowledge'

// Initialize AI client only when needed to avoid cold start issues
let genAI: GoogleGenerativeAI | null = null

function getAIClient() {
  if (!genAI && process.env.GEMINI_API_KEY) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  }
  return genAI
}

// Simple in-memory rate limiting (for production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT = {
  MAX_REQUESTS: 20, // Increase limit to reduce conflicts
  WINDOW_MS: 60 * 60 * 1000, // 1 hour
}

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown'
  return ip
}

function checkRateLimit(key: string): boolean {
  const now = Date.now()
  const userLimit = rateLimitMap.get(key)

  if (!userLimit || now > userLimit.resetTime) {
    // Reset or create new limit
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT.WINDOW_MS,
    })
    return true
  }

  if (userLimit.count >= RATE_LIMIT.MAX_REQUESTS) {
    return false // Rate limit exceeded
  }

  userLimit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      console.error('Missing API key in environment')
      return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 500 })
    }

    // Check rate limit
    const rateLimitKey = getRateLimitKey(request)
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const { message, conversationHistory } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // Limit conversation history to save tokens
    const limitedHistory = conversationHistory ? conversationHistory.slice(-6) : []

    const aiClient = getAIClient()
    if (!aiClient) {
      console.error('AI client initialization failed')
      throw new Error('Failed to initialize AI client')
    }
    
    const model = aiClient.getGenerativeModel({ 
      model: 'gemini-1.5-flash',
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 512, // Reduce token limit for faster responses
      },
    })

    // Build conversation context
    let conversationContext = ''
    if (limitedHistory && limitedHistory.length > 0) {
      conversationContext = '\n\nConversation History:\n'
      limitedHistory.forEach((msg: { isUser: boolean; text: string }) => {
        conversationContext += `${msg.isUser ? 'User' : 'Assistant'}: ${msg.text}\n`
      })
    }

    const prompt = `${personalKnowledgeBase}${conversationContext}

Current User Question: ${message}

Instructions:
1. ANALYZE the conversation history to understand the context and what topic the user might be referring to.

2. If the user says things like "yes", "tell me more", "I want to know more", "more details", "continue", etc., look at the previous conversation to understand what they want more information about, then provide a DETAILED response (4-5 sentences) about that specific topic.

3. If it's a new question about Palak Desai, provide a SHORT, focused answer (2-3 sentences max) and ask a follow-up question.

4. After providing detailed information (when user asks for "more"), ask what other aspect they'd like to explore:
   - "What else would you like to know about this?"
   - "Are you curious about any other aspects of Palak's work?"
   - "Would you like to hear about her other projects/skills/experience?"

5. If the question is NOT about Palak Desai, politely decline and redirect them to ask about Palak instead.

6. Keep responses conversational, engaging, and contextually aware. Remember what you just talked about.

7. Use emojis sparingly but appropriately to make responses more engaging.

Examples:
- If user previously asked about skills and now says "yes" or "tell me more":
  "Great! Palak's technical expertise is quite impressive. She has 95% proficiency in React.js and has used it extensively in projects like GoTravel France and the sustainable e-commerce platform EcoWave. Her JavaScript skills (90%) have been crucial in developing full-stack applications, from mobile travel apps to AI-powered chatbots. She's also highly skilled in modern development practices, having implemented CI/CD pipelines and containerization with Docker during her time at Adaptable Services. What specific technology or project would you like to dive deeper into? 💻"

Answer:`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    if (!text || text.trim().length === 0) {
      throw new Error('Empty response from AI model')
    }

    return NextResponse.json({ response: text.trim() })
  } catch (error) {
    console.error('Chatbot API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    )
  }
}

// Add GET method for health checks and pre-warming
export async function GET() {
  try {
    // This keeps the function warm and verifies setup
    const hasApiKey = !!process.env.GEMINI_API_KEY
    const aiClient = getAIClient()
    
    return NextResponse.json({
      status: 'ready',
      hasApiKey,
      aiClientInitialized: !!aiClient,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Health check error:', error)
    return NextResponse.json(
      { status: 'error', error: String(error) },
      { status: 500 }
    )
  }
}
