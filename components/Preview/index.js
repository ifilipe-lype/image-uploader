import { useRef, useState } from "react";

export default function Preview({ imgSrc }) {
    const [copied, setCopied] = useState(false);
    const inputRef = useRef(null);

    function copyUrl() {
        const inputElem = inputRef.current;
        inputElem.focus();
        inputElem.select();
        inputElem.setSelectionRange(0, 99999); /* For mobile devices */
        document.execCommand("copy");
        setCopied(true);
    }

    return (
        <div className="w-full max-w-md flex flex-col items-center justify-center bg-white p-8 splash-shadow rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12 text-green-1" fill="currentColor">
                <path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <h3 className="text-xl font-medium text-gray-2 mb-4">
                Uploaded successfully!
            </h3>
            <div className="rounded-xl overflow-hidden w-full shadow-sm max-h-56 my-8">
                <img src={imgSrc} alt="uploaded image preview" className="w-full rounded-xl h-full object-cover" />
            </div>

            <div className="w-full p-1 rounded-lg flex-wrap mb-4 md:flex-nowrap border border-gray-7 bg-gray-1 flex items-center justify-between">
                <input type="text" value={imgSrc} className="sr-only" readOnly ref={inputRef} />
                <span className="text-xs px-2 py-2 md:py-0 w-full md:w-8/12 overflow-hidden text-left whitespace-nowrap text-gray-2 overflow-ellipsis">{imgSrc}</span>
                <button onClick={copyUrl} className="bg-blue1 w-full md:w-auto px-4 py-2 text-white rounded-lg text-sm font-normal flex-nowrap">
                    Copy Link
                </button>
            </div>

            <div className="mt-4 text-xs text-center md:text-sm text-blue1">
                {copied && <p>Image's link copied to the clipboard</p>}
            </div>
        </div>
    )
}
