import { useState, useEffect } from "react";
import * as ic from '../assets/Icons'
import MediaIc from '../Components/MediaIc'
import Navbar from "../Components/Navbar"
import ResultFetch from "../Components/ResultFetch.jsx";
function Home() {
    const [url, setUrl] = useState("")
    const [urlError, setUrlError] = useState(false)
    const [urlErrMsg, setUrlErrMsg] = useState("")
    async function fetchHandler() {
        if (!url) {
setUrlErrMsg("Pastikan url terisi")
            setUrlError(true)
        }  else if (!url.startsWith("https://")) {
            setUrlError(true)
            setUrlErrMsg("Url tidak valid")
        } else {
try {
    const req = await fetch("http://localhost:3000/fetch_url", {
        method: "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body :  JSON.stringify({
            url : url
        })
    })

    const res = await req.json()
    if (res.isSucces) {
alert(res.message)
    } else {
        alert(res.message)
    }
} catch (error) {
    alert(error.message)
}
        }

    }
    function urlHandler(e) {
        setUrlError(false)
        setUrl(e.target.value)
    }
    function UrlMeter() {
        return (

            <p className="text-red-500 mt-4 text-sm mb-1font-semibold">{urlErrMsg}</p>
        )
    }
    return (
        <div className="bg-linear-to-t scrollbar-none from-black to-zinc-950 flex p-8 flex-col  items-center h-full w-full" >
            <Navbar />
            <div className="lg:flex justify-center items-center gap-10">
                <div className="flex-col flex ">
                    <div className=" w-full flex flex-col items-center mt-10" >
                        <h1 className="text-center text-2xl lg:text-5xl text-cyan-500 font-extrabold"> MediaDownloader</h1>
                        <h1 className="text-center text-[14px] lg:text-[14px] text-white">download any media from social media free usefull and no ads</h1>
                        <div className="w-96 rounded-2xl flex flex-col items-center p-2 text-gray-500 mt-1 h-14 ">

                            <div className="flex gap-7 items-center">
                                <MediaIc title="Instagram" icon={<ic.instagram />} />
                                <MediaIc title="Tiktok" icon={<ic.tiktok />} />
                                <MediaIc title="Youtube" icon={<ic.youtube />} />
                                <MediaIc />
                            </div>

                        </div>


                    </div>
                    <div className="w-full lg:w-lg p-4 mt-4 bg-zinc-950 rounded-2xl shadow-2xl shadow-black" >
                        <div className="flex gap-3      ">
                            <div className="bg-zinc-900 rounded-lg flex p-2 justify-center items-center">

                                <ic.icDl />
                            </div>
                            <div className="">

                                <h1 className="text-[13px] font-semibold text-white">Download video only or audio format </h1>
                                <h1 className="text-[10px] text-zinc-400">Lets started with url below</h1>
                            </div>
                        </div>
                        <UrlMeter />
                        <div className=" w-full  gap-2 h-12 flex " >
                            <input type="url" value={url} onChange={urlHandler} placeholder="Masukan url... "
                                className={`
                             text-[12px] text-white pl-2  h-full w-[90%] bg-black rounded-lg outline-2 transition-all duration-200 
                             ${urlError ? "outline-red-600 shadow-red-500 shadow-sm bg-red-950 placeholder:text-red-200" : "outline-zinc-950"}
                             `}

                            ></input>
                            <div className="h-full bg-zinc-900  rounded-lg w-10 flex justify-center items-center ">
                                <ic.clearUrl />
                            </div>

                        </div>
                        <div onClick={fetchHandler} className="mt-3   gap-2 flex justify-center items-center rounded-xl h-12 w-full shadow-sm shadow-black bg-zinc-900 ">
                            <ic.fetch />
                            <button className="  text-white font-semibold">
                                Fetch Media
                            </button>
                        </div>
                    </div>
                </div>
                <ResultFetch />
            </div>
        </div>
    )
    // http://localhost:5173/






}
export default Home