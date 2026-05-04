import type { Metadata } from 'next'
import ServicesContent from './content'

export const metadata: Metadata = {
  title: 'Our Services — Cognixeno Tech',
  description: 'Six core services powered by AI agents. Mobile apps, web development, AI solutions, automation, email support, and chatbots.',
}

export default function ServicesPage() {
  return <ServicesContent />
}
