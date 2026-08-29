import * as ic from "../assets/Icons"
export default function Navbar() {
    return (
        <>
            <div className="h-16 w-full justify-center flex fixed top-0">
                <div className="h-full backdrop-blur-sm items-center px-10 w-full  flex">
                    <div className=" w-full p-4 rounded-full" >
                        <h1 className="font-extrabold w-full text-cyan-700 text-[15px]" > MediaDownloader </h1>
                        <h1 className="text-[12px] -mt-0.5 text-gray-500" >Download any video </h1>
                    </div>
                    <div className=" flex justify-end ml-2 items-center h-full w-full">
                        <div className="flex justify-center items-center p-4 rounded-ful">
                            <ic.menu />
                        </div>
                    </div>
                </div>
                <div className="w-full h-1 fixed top-15 backdrop-blur-2xl shadow-2xl shadow-gray-900    "></div>
            </div>
        </>
    )
}