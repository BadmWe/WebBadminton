import Head from 'next/head'

import { Hero } from '../components/Hero'
import { Newsletter } from '../components/Newsletter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Badminton</title>
        <meta
          name="description"
          content="A platform where we talk about the rules of badminton, brands, equipment and much more. Our content is suitable and will be interesting for everybody."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="WebBadminton" />
        <meta
          property="og:description"
          content="A platform where we talk about the rules of badminton, brands, equipment and much more. Our content is suitable and will be interesting for everybody."
        />
        <meta property="og:url" content="https://webbadminton.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://webbadminton.com/photos/logod.jpg"
        />
      </Head>
      <Hero />
      <Newsletter />
    </>
  )
}
