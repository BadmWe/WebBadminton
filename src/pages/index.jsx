import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Layout } from '@/components/layout'
import { Sponsors } from '@/components/Sponsors'
import { Table } from '@/components/table'

export default function Home() {
  return (
    <>
      <Head>
        <title>DeceptiConf - A community-driven design conference</title>
        <meta
          name="description"
          content="At DeceptiConf you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected."
        />
      </Head>
      <main>
        <Layout />
        <Hero />
        <Schedule />
        <Table />
        <Sponsors />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
