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
