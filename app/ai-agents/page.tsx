import { Metadata } from 'next'
import AIAgentsContent from './content'

export const metadata: Metadata = {
  title: 'Meet Our AI Agents — Cognixeno Tech',
  description: 'A team of specialized AI agents working 24/7 to deliver your projects with speed, accuracy, and scale.',
}

export default function AIAgentsPage() {
  return <AIAgentsContent />
}
