
export default function Preview({ imgSrc }){
    return (
        <div className="w-full max-w-md flex flex-col items-center justify-center bg-white p-8 splash-shadow rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-xl font-medium text-gray-2 mb-4">
                Uploaded successfully!
            </h3>
            <div className="rounded-xl overflow-hidden w-full shadow-sm max-h-56 my-8">
                <img src={imgSrc || "/assets/image.svg"} alt="uploaded image preview" className="w-full rounded-xl h-full object-cover" />
            </div>

            <div className="w-full p-1 rounded-lg flex-nowrap border border-gray-7 bg-gray-1 flex items-center justify-between">
                <span className="text-xs pl-2 w-8/12 overflow-hidden text-left whitespace-nowrap text-gray-2 overflow-ellipsis">http://localhost:3000/ljkfsfdf23434ljkfsfdf.jpg</span>
                <button className="bg-blue1 px-4 py-2 text-white rounded-lg text-sm font-normal flex-nowrap">Copy Link</button>
            </div>
        </div>
    )
}
