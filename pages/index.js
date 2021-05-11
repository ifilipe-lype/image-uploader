import { useState, useEffect } from "react";

import Head from "next/head";
import ImageDropZone from "../components/ImageDropZone";

export default function Home() {
  const [imageFile, setImageFile ] = useState(null);

  useEffect(() => {
    console.log("Image selected! uploading...")
  }, [imageFile]);

  function handleInputFile(e){
    setImageFile(e.target.files[0]);
  }

  return (
    <div className="flex flex-col w-screen justify-center items-center bg-gray-50 h-screen">
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full container px-5 py-5 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 splash-shadow rounded-xl">
          <header className="flex flex-col items-center justify-center mb-8">
            <h1 className="text-xl font-medium text-gray-2 mb-4">
              Upload your image
            </h1>
            <span className="text-xs text-gray-3 font-medium">
              File should be jpg, jpeg, png, svg
            </span>
          </header>

          {/* Drop and Drag area */}
          <ImageDropZone setDropFile={setImageFile} />

          {/* File Upload */}
          <p className="my-6 text-center text-gray-4 text-sm">Or</p>
          <form className="flex flex-col items-center justify-center">
            <div>
              <label
                htmlFor="file"
                className="bg-blue1 hover:bg-blue-600 transition px-4 cursor-pointer py-2 shadow-sm rounded-lg block text-white"
              >
                Choose a file
              </label>
              <input
                onChange={handleInputFile}
                accept="image/png, image/jpeg, image/svg+xml"
                className="hidden"
                id="file"
                type="file"
                title="Choose file"
              />
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center py-4 text-gray-5 text-xs md:text-sm">
        <p className="text-center">
          created by{" "}
          <a href="" className="font-semibold">
            @ifilipe_lype
          </a>{" "}
          - <a href="">devChallenges.io</a>
        </p>
      </footer>
    </div>
  );
}
