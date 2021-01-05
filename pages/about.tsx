import Link from 'next/link'
import Layout from '../components/layouts/Layout'

export default function About() {
  return (
    <Layout title="About | Next.js + TypeScript Example">
      Welcome to the about page. Go to the{' '}
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      page.
    </Layout>
  )
}
