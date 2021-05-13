import ImageDropZone from "../ImageDropZone";

export default function Uploader({ setImageFile, handleInputFile }){
    return (
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
    )
}
