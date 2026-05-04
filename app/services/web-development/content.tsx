'use client'

import ServiceDetail from '../ServiceDetail'
import { FiGlobe, FiLayout, FiCode, FiZap, FiSearch, FiShield, FiSmartphone, FiCpu, FiMail } from 'react-icons/fi'

export default function WebDevPage() {
  return (
    <ServiceDetail
      badge="Web Development"
      title="Web Development"
      subtitle="High-performance web platforms built with modern frameworks, optimized for speed, SEO, and conversion. Every pixel purposeful."
      accent="#FF947A"
      gradient="linear-gradient(180deg, rgba(2,82,89,0.12) 0%, #080810 100%)"
      features={[
        { title: 'Next.js & React', desc: 'Server-side rendered applications with optimal Core Web Vitals and blazing fast page loads.', icon: FiCode },
        { title: 'Responsive Design', desc: 'Pixel-perfect layouts that look stunning on desktop, tablet, and mobile devices.', icon: FiLayout },
        { title: 'SEO Optimization', desc: 'Built-in SEO best practices, schema markup, and automated sitemap generation.', icon: FiSearch },
        { title: 'Performance First', desc: 'Lighthouse 100 scores with lazy loading, code splitting, and CDN optimization.', icon: FiZap },
        { title: 'Progressive Web Apps', desc: 'Installable web apps with offline support, push notifications, and native-like experience.', icon: FiGlobe },
        { title: 'Security Hardened', desc: 'HTTPS, CORS, CSP headers, rate limiting, and protection against common vulnerabilities.', icon: FiShield },
      ]}
      process={[
        { title: 'Discovery & Planning', desc: 'Understanding your goals, audience, and creating a comprehensive project roadmap.' },
        { title: 'UI/UX Design', desc: 'Creating wireframes and high-fidelity mockups with modern design principles.' },
        { title: 'Frontend Development', desc: 'Building responsive, accessible, and performant interfaces with React/Next.js.' },
        { title: 'Backend & API', desc: 'Setting up databases, APIs, authentication, and server infrastructure.' },
        { title: 'Launch & Optimize', desc: 'Deployment, performance monitoring, and continuous optimization.' },
      ]}
      techStack={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma', 'Vercel', 'AWS', 'Docker']}
      relatedServices={[
        { name: 'Mobile App Development', href: '/services/mobile-app', accent: '#FF947A', icon: FiSmartphone },
        { name: 'AI-Powered Solutions', href: '/services/ai-solutions', accent: '#C8A8E9', icon: FiCpu },
        { name: 'Email Support', href: '/services/email-support', accent: '#F7B638', icon: FiMail },
      ]}
    />
  )
}

