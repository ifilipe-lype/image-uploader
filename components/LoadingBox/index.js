
export default function LoadingBox({ title }){
    return (
        <div className="w-full max-w-md bg-white p-8 splash-shadow rounded-xl">
            <h3 className="text-xl font-medium text-gray-2 mb-4">{title}</h3>
            <div className="rounded-xl overflow-hidden bg-gray-6">
                <div className="w-3/12 p-1 rounded-xl bg-blue1 slide-spin"></div>
            </div>
        </div>
    )
}
