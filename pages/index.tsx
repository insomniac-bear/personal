import Head from 'next/head'
import Image from 'next/image'
import { About } from '../components/about/about';
import { Header } from '../components/header/header';
import { Intro } from '../components/intro/intro';

export default function Home() {
  return (
    <div>
      <Head>
        <title>JS developer</title>
        <meta name="description" content="Personal website of js web developer" />
      </Head>
      <Header />
      <main>
        <Intro />
        <About />
      </main>

      <footer>
      </footer>
    </div>
  )
}
