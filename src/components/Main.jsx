function Main(){
    return (
        <>
        <main className=" mt-6">
            <form action="" className="flex justify-center gap-1.5">
                    <input 
                className="max-w-lg min-w-xs grow border-2 border-gray-300 rounded-sm p-1.5"            type="text"
                placeholder="e.g Mirchi.. "
                
                />
                <button className="bg-black text-white py-1.5 px-3 border rounded-sm flex  first-letter:text-xl before:content-['+'] before:mr-1  cursor-pointer">
                    Add ingredients
                </button>
            </form>
            <ul>
                
            </ul>
           
        </main>
        </>
    )
}
export default Main