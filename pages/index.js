import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen">
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-blue-600">
        <h1>Hello, world!</h1>
      </main>

      <footer className="">
        built by L-Y-P-E
      </footer>
    </div>
  )
}
