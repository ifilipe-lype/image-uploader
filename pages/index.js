import { useState, useEffect } from "react";

import Head from "next/head";
import Uploader from "../components/Uploader";
import LoadingBox from "../components/LoadingBox";
import Preview from "../components/Preview";

const STAGES =  {
  CHOOSING_IMAGE: 0,
  UPLOADING_IMAGE: 1,
  UPLOADED: 2
};

export default function Home() {
  const [imageFile, setImageFile ] = useState(null);
  const [stage, setStage] = useState(STAGES.CHOOSING_IMAGE);

  function renderBasedOnStage(stage) {
    switch(stage){
      case STAGES.UPLOADING_IMAGE:
        return (<LoadingBox title={"Uploading..."} />)
      
      case STAGES.UPLOADED:
        return (<Preview imgSrc={""} />)

      default :
        return (<Uploader setImageFile={setImageFile} handleInputFile={handleInputFile} />)
    }
  }

  useEffect(() => {
    if(imageFile){
      setStage(STAGES.UPLOADING_IMAGE);
      uploadImage()
    }
  }, [imageFile]);

  function handleInputFile(e){
    setImageFile(e.target.files[0]);
  }

  function uploadImage(imgFile){
    setTimeout(() => {
      setStage(STAGES.UPLOADED);
    }, 3000);
  }

  return (
    <div className="flex flex-col w-screen justify-center items-center bg-gray-50 h-screen">
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full container px-5 py-5 flex items-center justify-center">
        {
          renderBasedOnStage(stage)
        }
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
