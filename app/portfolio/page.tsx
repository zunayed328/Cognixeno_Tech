import { Metadata } from 'next'
import PortfolioContent from './content'

export const metadata: Metadata = {
  title: 'Our Portfolio — Cognixeno Tech',
  description: 'Projects built and delivered by our AI agents — mobile apps, websites, AI solutions, and more.',
}

export default function PortfolioPage() {
  return <PortfolioContent />
}
