import { Metadata } from 'next'
import Content from './content'

export const metadata: Metadata = { title: 'Web Development — Cognixeno Tech' }

export default function Page() {
  return <Content />
}

