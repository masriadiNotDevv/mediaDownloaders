import { useEffect, useState } from "react";
import * as ic from "../assets/Icons"
import {DownloadButtonVideo, DownloadButtonAudio} from "./DownloadButton.jsx"
import { ListInfoData } from "./ListInfoData.jsx";
function ResultFetch({ data }) {
    const thumb = data.thumbnail

    return (
        <div className="h-96 scrollbar-none overflow-y-scroll lg:w-full w-full mt-14 rounded-2xl p-4 bg-zinc-950">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-zinc-900  flex justify-center items-center rounded-lg">
                    <ic.resFetch />
                </div>
                <h1 className="text-xl font-semibold  text-white">Result fetch</h1>
            </div>
            <img className="rounded-2xl mb-3 shadow-xl shadow-black mt-2" src={thumb} alt="komtol" />
            <ListInfoData title="title video" value={data.title} icon={<ic.title />} />
            <ListInfoData title="Description video" value={data.description} icon={<ic.desc />} />
            <ListInfoData title="Duration video" value="15:30" icon={<ic.duration />} />

            <div className="h-1 w-92 gap-10 flex">
                <div className="  ">
                    <p className="text-[13px] text-white font-semibold">download audio</p>
                    {data.audio?.map((f, i) => (
                        <DownloadButtonAudio key={i} title={data.title} url={data.url}  format={f.format_id} type="audio" ext={f.ext} abr={f.abr} size={f.size}  />
                    ))}
                </div>
                <div className="gap-1 flex flex-col  ">
                    <p className="text-[13px] text-white font-semibold">download video</p>
        
                    {data.video?.map((f, i) => (
                        <DownloadButtonVideo key={i} url={data.url} title={data.title} format={f.format_id} ext={f.ext} abr={f.abr} size={f.size} quality={f.height} fps={f.fps} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ResultFetch