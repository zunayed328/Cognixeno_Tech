import { Metadata } from 'next'
import PricingContent from './content'

export const metadata: Metadata = {
  title: 'Pricing — Cognixeno Tech',
  description: 'Simple, transparent pricing for AI-powered development services. Starter, Professional, and Enterprise plans available.',
}

export default function PricingPage() {
  return <PricingContent />
}
