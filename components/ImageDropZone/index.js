import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone/dist";

export default function ImageDropZone({ setDropFile }) {
  const onDrop = useCallback((acceptedFiles) => {
    setDropFile(acceptedFiles[0]);
  }, []);
  const {
    getRootProps,
    isDragActive,
    isDragAccept,
  } = useDropzone({
    onDrop,
    noClick: true,
    maxFiles: 1,
    accept: "image/jpeg, image/png, image/svg+xml, image/jpg",
  });

  return (
    <div {...getRootProps()}
      className={`flex flex-col items-center outline-none justify-center border-dashed border-2 border-blue px-4 py-8 rounded-xl bg-gray-1 transition ${isDragActive ? "bg-green-100" : ""}`}
    >
      <img src="/assets/image.svg" className="w-auto h-auto object-contain" />
      <p className="text-gray-4 mt-8 text-xs">
        { !isDragActive && !isDragAccept ? (<span>Drag &amp; Drop your image here</span>) : <span className="text-blue1">Release to upload image</span>}
      </p>
    </div>
  );
}
