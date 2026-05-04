import { Metadata } from 'next'
import ContactContent from './content'

export const metadata: Metadata = {
  title: 'Contact Us — Cognixeno Tech',
  description: 'Get in touch with Cognixeno Tech. Submit your project and our AI agents will respond within 2 minutes.',
}

export default function ContactPage() {
  return <ContactContent />
}
