import { useState } from "react";
import * as ic from "../assets/Icons";

export default function bodyLayout({onData}) {
    const [url, setUrl] = useState("")
    async function fetchHandler() {
        
        console.log("fetching 1...")
        try {
            console.log("fetching 2...")
            const req = await fetch("http://192.168.1.56:3000/fetch_url", {
                method: "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({
                    url : url
                })
            })
            
                console.log("fetching 3...")
            const res = await req.json()
            if (res.isSucces) {
                alert(res.message) 
                onData(res)
                
        
                
            } else {
                alert(res.message)
            }
        } catch(err) {
            alert(err)
        }
        
    }
    return (
        <div className="w-full px-8 flex items-center justify-center">
            <div className="w-full sm:w-full lg:w-lg p-4 mt-4 bg-zinc-950 rounded-2xl shadow-2xl shadow-black" >
                <div className="flex gap-3      ">
                    <div className="bg-zinc-900 rounded-lg flex p-2 justify-center items-center">

                        <ic.icDl />
                    </div>
                    <div className="">

                        <h1 className="text-[13px] font-semibold text-white">Download video only or audio format </h1>
                        <h1 className="text-[10px] text-zinc-400">Lets started with url below</h1>
                    </div>
                </div>

                <div className=" w-full mt-3 gap-2 h-12 flex " >
                    <input type="url" placeholder="Masukan url... "
                    value={url} onChange={(e) => setUrl(e.target.value)}
                        className={`
                             text-[12px] text-white pl-2  h-full w-[90%] bg-black rounded-lg outline-2 outline-zinc-900 transition-all duration-200 
        
                             `}

                    ></input>
                    <div className="h-full bg-zinc-900  rounded-lg w-10 flex justify-center items-center ">
                        <ic.clearUrl />
                    </div>

                </div>
                <div className="mt-3   gap-2 flex justify-center items-center rounded-xl h-12 w-full shadow-sm shadow-black bg-zinc-900 ">
                    <ic.fetch />
                    <button  onClick={fetchHandler} className=" text-white font-semibold">
                        Fetch Media
                    </button>
                </div>
            </div>
        </div>
    )
}