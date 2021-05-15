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
    isDragReject
  } = useDropzone({
    onDrop,
    noClick: true,
    maxFiles: 1,
    maxSize: 100,
    accept: "image/*",
  });

  return (
    <div {...getRootProps()}
      className={`flex flex-col items-center outline-none justify-center border-dashed border-2 px-4 py-8 rounded-xl bg-gray-1 transition ${isDragAccept ? "bg-green-100" : ""} ${isDragReject ? "bg-red-100" : ""} ${isDragReject ? "border-red-200" : "border-blue"}`}
    >
      <img src="/assets/image.svg" className="w-auto h-auto object-contain" />
      <p className="text-gray-4 mt-8 text-xs">
        {

          isDragAccept ? (
            <span className="text-blue1">Release to upload image</span>
          ) : (
            isDragActive && isDragReject ? (
              <span className="text-red-400">file selected is not an image</span>
            ) : (
              <span className="text-gray-2">Drag &amp; Drop an image file here to upload</span>
            )
          )
        }
      </p>
    </div>
  );
}
