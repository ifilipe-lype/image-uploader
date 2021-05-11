import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col w-screen justify-center items-center bg-gray-50 h-screen">
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 splash-shadow rounded-xl">
          <header className="flex flex-col items-center justify-center mb-8">
            <h1 className="text-xl font-medium text-gray-2 mb-4">Upload your image</h1>
            <span className="text-xs text-gray-3 font-medium">File should be jpg, jpeg, png, svg</span>
          </header>

          {/* Drop and Drag area */}
          <div className="flex flex-col items-center justify-center border-dashed border-2 border-blue px-4 py-8 rounded-xl bg-gray-1">
            <img src="/assets/image.svg" className="w-auto h-auto object-contain" />
            <p className="text-gray-4 mt-8 text-xs">Drag &amp; Drop your image here</p>
          </div>

          {/* File Upload */}
          <p className="my-6 text-center text-gray-4 text-sm">Or</p>
          <form className="flex flex-col items-center justify-center">
            <div>
              <label for="file" className="bg-blue1 hover:bg-blue-600 transition px-4 cursor-pointer py-2 shadow-sm rounded-lg block text-white">Choose a file</label>
              <input className="hidden" id="file" type="file" title="Choose file" />
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex py-4 text-gray-5 text-sm justify-self-end">
        <p>
        created by <a href="" className="font-medium">@ifilipe_lype</a> - <a href="">devChallenges.io</a>
        </p>
      </footer>
    </div>
  )
}
