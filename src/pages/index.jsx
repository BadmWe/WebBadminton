import Head from "next/head";

import { Hero } from "../components/Hero";
import { Newsletter } from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Badminton: About us</title>
        <meta
          name="description"
          content="A platform where we talk about the rules of badminton, brands, equipment and much more. Our content is suitable and will be interesting for everybody."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="WebBadminton: About us" />
        <meta
          property="og:description"
          content="A platform where we talk about the rules of badminton, brands, equipment and much more. Our content is suitable and will be interesting for everybody."
        />
        <meta property="og:type" content="website" />
      </Head>
      <Hero />
      <Newsletter />
    </>
  );
}
