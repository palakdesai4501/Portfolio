# Palak Desai - Software Developer Portfolio

A modern, responsive portfolio website built with cutting-edge web technologies, featuring stunning 3D animations, smooth transitions, sleek design, and an integrated AI chatbot assistant.

## 🚀 Features

- **Modern Design**: Sleek, professional design with glassmorphism effects and gradient backgrounds
- **3D Animations**: Interactive Three.js animations and particle systems
- **Smooth Transitions**: Framer Motion animations for seamless user experience
- **AI Chatbot**: Personalized AI assistant powered by Google's Gemini API
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects, animated buttons, and dynamic content
- **Theme Toggle**: Light/dark mode support with smooth transitions
- **Navigation**: Smooth scrolling navigation with active section highlighting
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Cost-Protected API**: Rate limiting and token optimization for API usage

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **AI Integration**: Google Gemini API
- **Icons**: Lucide React
- **Language**: TypeScript
- **Math Library**: Maath (for random functions)

## 📋 Sections

### 1. Hero Section

- Animated name with gradient text
- 3D particle background using Three.js
- Social media links
- Smooth scroll indicator

### 2. Navigation

- Sticky navigation with theme toggle
- Rounded logo with "PD" branding
- Smooth scrolling to sections
- Mobile-responsive hamburger menu

### 3. About Section

- Personal introduction
- Skills showcase with icons
- Technology expertise cards with floating particles
- Profile card with professional summary

### 4. Experience Section

- Timeline layout with 3 professional experiences
- Company details, roles, and achievements
- Technology tags for each position
- Animated cards with hover effects

### 5. Projects Section

- 6 featured projects with descriptions
- GitHub and live demo links
- Technology stack badges
- Interactive hover effects and animations

### 6. Contact Section

- Contact information display
- Social media links
- Professional contact details
- Clean, minimalist design

### 7. AI Chatbot Assistant

- **Personalized AI**: Only answers questions about Palak Desai
- **Conversation Memory**: Remembers context for follow-up questions
- **Professional Knowledge**: Comprehensive information about education, experience, skills, and projects
- **Modern UI**: Floating chat button with smooth animations
- **Theme Aware**: Adapts to light/dark mode
- **Rate Limited**: 5 messages per IP per hour for cost protection
- **Mobile Optimized**: Responsive design for all devices

## 🤖 AI Chatbot Features

### ✅ Personalized Responses

- Only answers questions about Palak Desai's background
- Refuses to answer unrelated questions
- Redirects users to ask about professional experience

### ✅ Comprehensive Knowledge Base

- **Education**: University of Windsor (Master's), Gujarat Technological University (Bachelor's)
- **Experience**: Opreto Corporation, Adaptable Services, Digital Strikers
- **Skills**: 19+ technologies with exact proficiency percentages
- **Projects**: All 6 major projects with detailed descriptions and GitHub links

### ✅ Smart Conversation Handling

- Remembers conversation context
- Short initial answers with follow-up questions
- Detailed responses when users ask for more information
- Professional and friendly tone

### ✅ Cost Protection

- **Rate Limiting**: 5 messages per IP per hour
- **Token Optimization**: Limited conversation history (6 messages max)
- **Free Tier Protection**: Stays within Gemini API limits
- **Usage Monitoring**: Built-in safeguards against abuse

## 🎨 Design Features

- **Color Scheme**: Dark/light theme with blue and purple gradients
- **Typography**: Modern, readable fonts with appropriate hierarchy
- **Animations**: Staggered entrance animations, hover effects, and micro-interactions
- **Visual Effects**: Glassmorphism, backdrop blur, gradient overlays
- **3D Elements**: Particle systems, rotating geometries, and interactive meshes
- **Responsive Design**: Mobile-first approach with adaptive layouts

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn
- Google Gemini API key (for chatbot functionality)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
GEMINI_API_KEY=your_actual_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🤖 Chatbot Setup

### Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### Configure the Chatbot

- The chatbot uses a comprehensive knowledge base stored in `src/data/personalKnowledge.ts`
- API route at `/api/chat` handles all conversations
- Rate limiting and cost protection are built-in
- See `CHATBOT_SETUP.md` for detailed setup instructions

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Desktop**: Full layout with all animations and 3D effects
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Optimized mobile layout with performance considerations
- **Chatbot**: Responsive chat interface that works seamlessly across all devices

## 🎭 Animations & Interactions

- **Scroll-triggered animations**: Elements animate as they come into view
- **Hover effects**: Interactive elements respond to user interaction
- **Loading states**: Smooth loading animations and transitions
- **3D interactions**: Interactive 3D elements that respond to user input
- **Particle systems**: Dynamic background animations in multiple sections
- **Chatbot animations**: Smooth chat interface with typing indicators

## 🔧 Customization

### Adding New Projects

Edit the `projects` array in `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    github: 'https://github.com/username/repo',
    live: 'https://your-project-url.com',
    technologies: ['React', 'Next.js', 'TypeScript'],
    featured: true,
  },
  // ... more projects
]
```

### Updating Experience

Modify the `experiences` array in `src/components/Experience.tsx` with your professional experience.

### Updating Chatbot Knowledge

Edit `src/data/personalKnowledge.ts` to:

- Add new projects or experience
- Update skill levels
- Modify personal information
- Add new achievements

### Changing Contact Information

Update the contact details in `src/components/Contact.tsx`:

```typescript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'palak.desai@email.com',
    href: 'mailto:palak.desai@email.com',
  },
  // ... more contact info
]
```

## 🌟 Performance Optimizations

- **Image Optimization**: Next.js Image component for optimized loading
- **Code Splitting**: Automatic code splitting for faster loading
- **Lazy Loading**: Components load as needed
- **3D Optimization**: Efficient Three.js rendering with proper cleanup
- **Animation Performance**: Hardware-accelerated animations
- **API Optimization**: Token limiting and conversation history management
- **Rate Limiting**: Prevents excessive API usage and costs

## 💰 Cost Management

### Free Tier Usage

- **15 requests per minute**
- **1,500 requests per day**
- **1 million tokens per month**

### Built-in Protections

- Rate limiting (5 messages per IP per hour)
- Token optimization
- Conversation history limits
- Error handling for quota exceeded

## 📄 File Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── api/chat/route.ts          # Chatbot API endpoint
│   │   ├── context/ThemeContext.tsx   # Theme management
│   │   ├── layout.tsx                 # App layout
│   │   └── page.tsx                   # Main page
│   ├── components/
│   │   ├── About.tsx                  # About section
│   │   ├── Chatbot.tsx               # AI chatbot component
│   │   ├── Contact.tsx               # Contact section
│   │   ├── Experience.tsx            # Experience timeline
│   │   ├── Footer.tsx                # Footer component
│   │   ├── Hero.tsx                  # Hero section
│   │   ├── Navigation.tsx            # Navigation bar
│   │   ├── Projects.tsx              # Projects showcase
│   │   └── ThemeToggle.tsx           # Theme switcher
│   └── data/
│       └── personalKnowledge.ts      # Chatbot knowledge base
├── CHATBOT_SETUP.md                  # Detailed chatbot setup guide
└── README.md                         # This file
```

## 🧪 Testing the Chatbot

Try asking these questions:

- "Tell me about Palak's experience"
- "What technologies does Palak know?"
- "What projects has Palak worked on?"
- "Where did Palak study?"
- "Tell me more about the GoTravel France project"

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: palak.desai@email.com
- **LinkedIn**: [linkedin.com/in/palakdesai](https://linkedin.com/in/palakdesai)
- **GitHub**: [github.com/palakdesai](https://github.com/palakdesai)

---

Built with ❤️ using Next.js, Three.js, Framer Motion, and Google Gemini AI
