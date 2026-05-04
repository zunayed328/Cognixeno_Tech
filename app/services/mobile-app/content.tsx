'use client'

import ServiceDetail from '../ServiceDetail'
import { FiSmartphone, FiLayout, FiCode, FiDatabase, FiShield, FiTrendingUp, FiGlobe, FiCpu, FiMessageCircle } from 'react-icons/fi'

export default function MobileAppPage() {
  return (
    <ServiceDetail
      badge="Mobile Development"
      title="Mobile App Development"
      subtitle="Native and cross-platform mobile applications with fluid animations, offline support, and seamless user experiences that delight millions."
      accent="#FF947A"
      gradient="linear-gradient(180deg, rgba(255,148,122,0.08) 0%, #080810 100%)"
      features={[
        { title: 'Cross-Platform Development', desc: 'Single codebase for iOS and Android with native performance using React Native and Flutter.', icon: FiSmartphone },
        { title: 'Native UI Components', desc: 'Platform-specific UI elements that feel natural on every device and screen size.', icon: FiLayout },
        { title: 'Offline-First Architecture', desc: 'Apps that work seamlessly without internet, syncing data when connectivity returns.', icon: FiDatabase },
        { title: 'Backend Integration', desc: 'Robust API connections to Firebase, Supabase, or custom backends with real-time sync.', icon: FiCode },
        { title: 'App Store Optimization', desc: 'Guidance on publishing, metadata, and optimization for maximum visibility and downloads.', icon: FiTrendingUp },
        { title: 'Security & Compliance', desc: 'End-to-end encryption, biometric auth, and compliance with GDPR and privacy regulations.', icon: FiShield },
      ]}
      process={[
        { title: 'Requirement Analysis', desc: 'AI agents analyze your app requirements, target audience, and competitive landscape.' },
        { title: 'Architecture & Design', desc: 'System architecture is designed with optimal tech stack selection and UI/UX wireframing.' },
        { title: 'Development Sprint', desc: 'AI agents build features in parallel — frontend, backend, and integrations simultaneously.' },
        { title: 'Testing & QA', desc: 'Automated testing across devices, performance profiling, and security audits.' },
        { title: 'Deployment & Launch', desc: 'App store submission, CI/CD pipeline setup, and post-launch monitoring.' },
      ]}
      techStack={['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Supabase', 'GraphQL', 'REST API', 'Redux', 'TypeScript']}
      relatedServices={[
        { name: 'Web Development', href: '/services/web-development', accent: '#FF947A', icon: FiGlobe },
        { name: 'AI-Powered Solutions', href: '/services/ai-solutions', accent: '#C8A8E9', icon: FiCpu },
        { name: 'AI Chatbots', href: '/services/chatbots', accent: '#F7B638', icon: FiMessageCircle },
      ]}
    />
  )
}

