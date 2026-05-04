import { Metadata } from 'next'
import ServiceDetail from '../ServiceDetail'
import { FiMessageCircle, FiShoppingCart, FiGlobe, FiClock, FiUsers, FiTrendingUp, FiSmartphone, FiMail, FiZap } from 'react-icons/fi'

export const metadata: Metadata = { title: 'AI Chatbot Solutions — Cognixeno Tech' }

export default function ChatbotsPage() {
  return (
    <ServiceDetail
      badge="AI Chatbots"
      title="AI Chatbot Solutions"
      subtitle="Custom chatbots for e-commerce and personal use — handling queries, sales, support and lead capture 24/7. Never miss a customer again."
      accent="#F7B638"
      gradient="linear-gradient(180deg, rgba(120,1,21,0.08) 0%, #080810 100%)"
      features={[
        { title: 'E-Commerce Integration', desc: 'Chatbots that search products, manage carts, process payments, and track orders natively.', icon: FiShoppingCart },
        { title: 'Multi-Platform', desc: 'Deploy on WhatsApp, Facebook Messenger, website widget, Telegram, and Slack simultaneously.', icon: FiGlobe },
        { title: 'Conversational AI', desc: 'Natural language understanding powered by GPT-4 for human-like conversations.', icon: FiMessageCircle },
        { title: '24/7 Availability', desc: 'Your AI chatbot never sleeps — instant responses any time of day or night.', icon: FiClock },
        { title: 'Lead Capture', desc: 'Automatically collect contact info, qualify leads, and push to your CRM.', icon: FiUsers },
        { title: 'Analytics & Insights', desc: 'Track conversation metrics, popular queries, and customer satisfaction scores.', icon: FiTrendingUp },
      ]}
      process={[
        { title: 'Use Case Definition', desc: 'Understanding your customer needs and defining the chatbot\'s personality and scope.' },
        { title: 'Conversation Design', desc: 'Creating conversation flows, fallback responses, and escalation paths.' },
        { title: 'AI Training', desc: 'Training the chatbot on your product catalog, FAQ, and brand voice.' },
        { title: 'Platform Integration', desc: 'Connecting to your website, WhatsApp, social platforms, and CRM systems.' },
        { title: 'Launch & Learn', desc: 'Going live with continuous learning from real conversations for improvement.' },
      ]}
      techStack={['GPT-4', 'Dialogflow', 'WhatsApp API', 'Twilio', 'Socket.io', 'Node.js', 'MongoDB', 'Redis', 'React', 'Stripe']}
      relatedServices={[
        { name: 'Mobile App Development', href: '/services/mobile-app', accent: '#FF947A', icon: FiSmartphone },
        { name: 'Email Support', href: '/services/email-support', accent: '#F7B638', icon: FiMail },
        { name: 'AI Automation', href: '/services/ai-automation', accent: '#E1FF51', icon: FiZap },
      ]}
    />
  )
}
