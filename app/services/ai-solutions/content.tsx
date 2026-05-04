'use client'

import ServiceDetail from '../ServiceDetail'
import { FiCpu, FiDatabase, FiTrendingUp, FiMessageCircle, FiSearch, FiLayers, FiSmartphone, FiZap, FiGlobe } from 'react-icons/fi'

export default function AISolutionsPage() {
  return (
    <ServiceDetail
      badge="AI Solutions"
      title="AI-Powered Solutions"
      subtitle="GPT-integrated platforms with predictive AI, smart recommendations, and autonomous user experiences that transform your business."
      accent="#C8A8E9"
      gradient="linear-gradient(180deg, rgba(200,168,233,0.08) 0%, #080810 100%)"
      features={[
        { title: 'GPT Integration', desc: 'Seamless integration of GPT-4, Claude, and custom LLMs into your applications.', icon: FiCpu },
        { title: 'RAG Pipelines', desc: 'Retrieval-augmented generation systems using your proprietary data for accurate AI responses.', icon: FiDatabase },
        { title: 'Predictive Analytics', desc: 'ML models that forecast trends, user behavior, and business outcomes with high accuracy.', icon: FiTrendingUp },
        { title: 'Smart Chatbots', desc: 'Context-aware conversational AI that understands intent and provides relevant answers.', icon: FiMessageCircle },
        { title: 'Semantic Search', desc: 'Vector-based search that understands meaning, not just keywords, for superior results.', icon: FiSearch },
        { title: 'Custom AI Models', desc: 'Fine-tuned models trained on your specific data for domain-specific intelligence.', icon: FiLayers },
      ]}
      process={[
        { title: 'Data Assessment', desc: 'Analyzing your existing data, infrastructure, and identifying AI opportunity areas.' },
        { title: 'Model Selection', desc: 'Choosing the optimal AI models and architecture for your specific use case.' },
        { title: 'Integration & Training', desc: 'Building data pipelines, training models, and integrating into your tech stack.' },
        { title: 'Testing & Evaluation', desc: 'Rigorous testing for accuracy, bias, edge cases, and performance benchmarks.' },
        { title: 'Deployment & Monitoring', desc: 'Production deployment with real-time monitoring, logging, and continuous improvement.' },
      ]}
      techStack={['OpenAI GPT-4', 'LangChain', 'Pinecone', 'ChromaDB', 'Python', 'FastAPI', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Vector DB']}
      relatedServices={[
        { name: 'AI Automation', href: '/services/ai-automation', accent: '#E1FF51', icon: FiZap },
        { name: 'Mobile App Development', href: '/services/mobile-app', accent: '#FF947A', icon: FiSmartphone },
        { name: 'Web Development', href: '/services/web-development', accent: '#FF947A', icon: FiGlobe },
      ]}
    />
  )
}

