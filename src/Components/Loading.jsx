import { useState, useEffect } from "react";
import loadSvg from "../assets/fonts/loading.svg" 
export default function Loading() {


    return (
        <div className="h-screen w-screen z-10 flex justify-center items-center bg-black/70 top-0 fixed">
<div className="h-52 w-52 rounded-2xl flex flex-col items-center justify-center bg-zinc-950 shadow-2xl shadow-black">
<img src={loadSvg} alt="adixd"/>
<h1 className="text-sm mt-4 text-white font-semibold">
    Wait a minute
</h1>
</div>
        </div>
    )
}
