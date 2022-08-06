import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Badminton</title>
        <meta
          name="description"
          content="A platform where we talk about the rules of badminton, brands, equipment and much more."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="WebBadminton" />
        <meta
          property="og:description"
          content="A platform where we talk about the rules of badminton, brands, equipment and much more."
        />
        <meta property="og:url" content="https://webbadminton.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/backgound.jpg" />
      </Head>
      <Hero />
      <Newsletter />
    </div>
  )
}
