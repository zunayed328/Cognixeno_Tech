'use client'

import ServiceDetail from '../ServiceDetail'
import { FiZap, FiRepeat, FiLink, FiClock, FiTool, FiBarChart2, FiCpu, FiMail, FiMessageCircle } from 'react-icons/fi'

export default function AIAutomationPage() {
  return (
    <ServiceDetail
      badge="Automation"
      title="AI Automation"
      subtitle="Automate repetitive workflows for businesses and institutions using intelligent AI agent pipelines. Work smarter, not harder."
      accent="#E1FF51"
      gradient="linear-gradient(180deg, rgba(0,39,44,0.15) 0%, #080810 100%)"
      features={[
        { title: 'Workflow Automation', desc: 'End-to-end automation of business processes from data entry to report generation.', icon: FiRepeat },
        { title: 'System Integration', desc: 'Connect all your tools — CRM, ERP, email, databases — into one seamless pipeline.', icon: FiLink },
        { title: 'Scheduled Tasks', desc: 'Automated cron jobs, periodic reports, and time-based triggers with zero maintenance.', icon: FiClock },
        { title: 'Custom Agents', desc: 'Purpose-built AI agents that handle specific tasks in your workflow autonomously.', icon: FiZap },
        { title: 'No-Code Setup', desc: 'Visual workflow builders powered by n8n and Zapier for non-technical team members.', icon: FiTool },
        { title: 'Analytics Dashboard', desc: 'Real-time monitoring of automated tasks, success rates, and performance metrics.', icon: FiBarChart2 },
      ]}
      process={[
        { title: 'Workflow Audit', desc: 'Mapping your current processes and identifying automation opportunities.' },
        { title: 'Pipeline Design', desc: 'Designing optimal automation pipelines with error handling and fallback logic.' },
        { title: 'Agent Development', desc: 'Building custom AI agents and configuring integration connectors.' },
        { title: 'Testing & Validation', desc: 'End-to-end testing with real data to ensure reliability and accuracy.' },
        { title: 'Go Live & Monitor', desc: 'Deploying automation with real-time monitoring and alert systems.' },
      ]}
      techStack={['n8n', 'Zapier', 'Make', 'Python', 'Node.js', 'Redis', 'RabbitMQ', 'PostgreSQL', 'Docker', 'Kubernetes']}
      relatedServices={[
        { name: 'AI-Powered Solutions', href: '/services/ai-solutions', accent: '#C8A8E9', icon: FiCpu },
        { name: 'Email Support', href: '/services/email-support', accent: '#F7B638', icon: FiMail },
        { name: 'AI Chatbots', href: '/services/chatbots', accent: '#F7B638', icon: FiMessageCircle },
      ]}
    />
  )
}

