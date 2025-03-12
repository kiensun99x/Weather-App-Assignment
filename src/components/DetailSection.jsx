export default function DetailSection({title, children}){
    return(
        <div className="bg-white rounded-md m-5 ">
            <div className="p-4 pb-2 text-lg font-semibold">
                <h2>{title}</h2>
            </div>
            <hr />
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}