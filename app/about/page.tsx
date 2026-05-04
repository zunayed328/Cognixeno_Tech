import type { Metadata } from 'next'
import AboutContent from './content'

export const metadata: Metadata = {
  title: 'About Us — Cognixeno Tech',
  description: 'Learn about Cognixeno Tech — a next-generation AI technology company building digital solutions managed by intelligent AI agents.',
}

export default function AboutPage() {
  return <AboutContent />
}
