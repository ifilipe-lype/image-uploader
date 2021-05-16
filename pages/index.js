import { useState, useEffect } from "react";

import Head from "next/head";
import Uploader from "../components/Uploader";
import LoadingBox from "../components/LoadingBox";
import Preview from "../components/Preview";

const STAGES = {
  CHOOSING_IMAGE: 0,
  UPLOADING_IMAGE: 1,
  UPLOADED: 2
};

export default function Home() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImg, setUploadedImg] = useState(null);
  const [stage, setStage] = useState(STAGES.CHOOSING_IMAGE);

  const [uploadErr, setUploadErr] = useState(false);

  function renderBasedOnStage(stage) {
    switch (stage) {
      case STAGES.UPLOADING_IMAGE:
        return (<LoadingBox title={"Uploading..."} />)

      case STAGES.UPLOADED:
        return (<Preview imgSrc={uploadedImg} />)

      default:
        return (<Uploader setImageFile={setImageFile} setUploadErr={setUploadErr} />)
    }
  }

  useEffect(async () => {
    if (imageFile) {
      await handleImageUpload();
    }
  }, [imageFile]);

  async function handleImageUpload() {
    // Enters into uploading stage
    setStage(STAGES.UPLOADING_IMAGE);
    setUploadErr(false);

    try {
      const { img } = await uploadImage(imageFile);
      setUploadedImg(img.url);
      setImageFile(null);
      setStage(STAGES.UPLOADED);
    } catch (e) {
      setStage(STAGES.CHOOSING_IMAGE);
      setImageFile(null)
      setUploadErr(true);
    }

  }

  async function uploadImage(imgFile) {
    const formData = new FormData();
    formData.append("image", imgFile);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const { img, err } = await res.json();
    if (err) throw new Error(err);

    return { img };

  }

  return (
    <div className="flex flex-col w-screen justify-center items-center bg-gray-50 h-screen">
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="An image uploader app"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full container px-5 py-5 flex flex-col items-center justify-center">
        {uploadErr && (
          <div className="text-red-400 text-xs md:text-sm bg-red-100 p-2 rounded-lg my-4 text-center">
            <span className="">
              Failled to upload image! check your internet connection.
          </span>
          </div>
        )}
        {
          renderBasedOnStage(stage)
        }
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center py-4 text-gray-5 text-xs md:text-sm">
        <p className="text-center">
          created by{" "}
          <a href="https://twitter.com/ifilipe_lype" target="_blank" className="font-semibold hover:underline">
            @ifilipe_lype
          </a>{" "}
          - <a href="https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx" target="_blank" className="hover:underline">devChallenges.io</a>
        </p>
      </footer>
    </div>
  );
}
