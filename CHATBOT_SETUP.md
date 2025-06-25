# AI Chatbot Setup Guide

## Overview

Your portfolio now includes a personalized AI chatbot powered by Google's Gemini API. The chatbot is designed to only answer questions about you (Palak Desai) and your professional background.

## Setup Instructions

### 1. Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### 2. Configure Environment Variables

1. Create a `.env.local` file in your project root (portfolio/)
2. Add your API key:

```
GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Test the Chatbot

1. Start your development server: `npm run dev`
2. Look for the floating chat button in the bottom-right corner
3. Click it to open the chat interface
4. Try asking questions like:
   - "Tell me about Palak's experience"
   - "What are Palak's technical skills?"
   - "What projects has Palak worked on?"
   - "Where did Palak study?"

## Features

### ✅ Personalized Responses

- Only answers questions about Palak Desai
- Refuses to answer unrelated questions
- Redirects users to ask about your background

### ✅ Professional Knowledge Base

- Education: University of Windsor (Master's), Gujarat Technological University (Bachelor's)
- Experience: Opreto Corporation, Adaptable Services, Digital Strikers
- Skills: All your technical proficiencies with exact percentages
- Projects: All 6 major projects with details and GitHub links

### ✅ Modern UI/UX

- Floating chat button with smooth animations
- Theme-aware design (light/dark mode)
- Typing indicators and smooth message animations
- Mobile-responsive design

### ✅ Smart Conversation Handling

- Remembers conversation context
- Professional and friendly tone
- Error handling for API failures
- Loading states and user feedback

## How It Works

1. **Knowledge Base**: Comprehensive information about you is stored in `src/data/personalKnowledge.ts`
2. **API Route**: `/api/chat` processes messages and calls Gemini API
3. **Component**: `Chatbot.tsx` provides the interactive UI
4. **Personalization**: Strict prompts ensure responses stay focused on you

## Customization

### Update Your Information

Edit `src/data/personalKnowledge.ts` to:

- Add new projects or experience
- Update skill levels
- Modify personal information
- Add new achievements

### Styling

The chatbot automatically adapts to your portfolio's theme using CSS custom properties.

## API Usage Optimization

### Free Tier Limits

- Gemini API provides generous free usage
- Rate limiting is handled automatically
- Error handling for quota exceeded

### Cost-Effective Features

- Focused knowledge base reduces token usage
- Short, relevant prompts
- Client-side caching of conversation history

## Security

- API key is stored securely in environment variables
- No sensitive data exposed to client-side
- Conversation history is not stored server-side

## Troubleshooting

### Common Issues

1. **"API key not configured"**: Check your `.env.local` file
2. **No responses**: Verify your API key is valid
3. **Quota exceeded**: Check your API usage in Google AI Studio

### Testing

- Test with both on-topic and off-topic questions
- Verify theme switching works correctly
- Check mobile responsiveness

## Example Conversations

**Good Questions:**

- "What is Palak's background?"
- "Tell me about the GoTravel France project"
- "What technologies does Palak know?"
- "Where has Palak worked?"

**Redirected Questions:**

- "What's the weather?" → "I can only answer questions about Palak..."
- "How to code in Python?" → "I'm here to tell you about Palak's skills..."

Your personalized AI assistant is now ready to showcase your professional background! 🚀
