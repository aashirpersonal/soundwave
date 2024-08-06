// pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import SingleSongDownload from '../components/SingleSongDownload'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>SoundWave - Music Discovery</title>
        <meta name="description" content="Discover and download music from SoundCloud" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">SoundWave</h1>
        <SingleSongDownload />
      </main>
    </div>
  )
}

export default Home