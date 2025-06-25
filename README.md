# Palak Desai - Software Developer Portfolio

A modern, responsive portfolio website built with cutting-edge web technologies, featuring stunning 3D animations, smooth transitions, and a sleek design.

## 🚀 Features

- **Modern Design**: Sleek, professional design with glassmorphism effects and gradient backgrounds
- **3D Animations**: Interactive Three.js animations and particle systems
- **Smooth Transitions**: Framer Motion animations for seamless user experience
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects, animated buttons, and dynamic content
- **Contact Form**: Functional contact form with validation and submission feedback
- **Navigation**: Smooth scrolling navigation with active section highlighting
- **Performance Optimized**: Built with Next.js for optimal performance and SEO

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Icons**: Lucide React
- **Language**: TypeScript
- **Math Library**: Maath (for random functions)

## 📋 Sections

### 1. Hero Section

- Animated name with gradient text
- 3D particle background using Three.js
- Social media links
- Smooth scroll indicator

### 2. About Section

- Personal introduction
- Skills showcase with icons
- Technology expertise cards
- Profile card with avatar placeholder

### 3. Experience Section

- Timeline layout with 3 professional experiences
- Company details, roles, and achievements
- Technology tags for each position
- Animated cards with hover effects

### 4. Projects Section

- 6 featured projects with descriptions
- GitHub and live demo links
- Technology stack badges
- Interactive hover effects and animations

### 5. Contact Section

- Interactive contact form
- 3D animated sphere element
- Contact information display
- Social media links
- Form validation and submission feedback

## 🎨 Design Features

- **Color Scheme**: Dark theme with purple and pink gradients
- **Typography**: Modern, readable fonts with appropriate hierarchy
- **Animations**: Staggered entrance animations, hover effects, and micro-interactions
- **Visual Effects**: Glassmorphism, backdrop blur, gradient overlays
- **3D Elements**: Particle systems, rotating geometries, and interactive meshes

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

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

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- **Desktop**: Full layout with all animations and 3D effects
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Optimized mobile layout with performance considerations

## 🎭 Animations & Interactions

- **Scroll-triggered animations**: Elements animate as they come into view
- **Hover effects**: Interactive elements respond to user interaction
- **Loading states**: Smooth loading animations and transitions
- **3D interactions**: Interactive 3D elements that respond to user input
- **Particle systems**: Dynamic background animations

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

### Changing Contact Information

Update the contact details in `src/components/Contact.tsx`:

```typescript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
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

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: palak.desai@email.com
- **LinkedIn**: [linkedin.com/in/palakdesai](https://linkedin.com/in/palakdesai)
- **GitHub**: [github.com/palakdesai](https://github.com/palakdesai)

---

Built with ❤️ using Next.js, Three.js, and Framer Motion
