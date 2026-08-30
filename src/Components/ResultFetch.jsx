import { useEffect, useState } from "react";
import * as ic from "../assets/Icons"
import { DownloadButtonVideo, DownloadButtonAudio } from "./DownloadButton.jsx"
import { ListInfoData } from "./ListInfoData.jsx";
function ResultFetch({ data }) {
    const thumb = data?.thumbnail
    return (
        <div className="px-8  flex flex-col justify-center items-center  w-full mt-5">
            <div className="bg-zinc-950 p-4 rounded-2xl h-full w-full">
                <div className="">
                    <div className="bg-zinc-900 gap-2 text-[12px] flex items-center p-4 rounded-lg outline-1 outline-zinc-900 h-10 w-full">
                        <ic.succes />
                        <h1 className="text-white ">
                            Succes fetch media
                        </h1>
                    </div>
                    <img src={thumb} className=" rounded-2xl mt-3 shadow-lg shadow-black w-full bg-amber-50"></img>
                    <div className="mt-4 w-full ">
                        <ListInfoData value={data?.title} title="Judul video" icon={<ic.title />} />
                        <ListInfoData value={data?.description} title="Deskripsi video" icon={<ic.desc />} />
                        <ListInfoData value={data?.uploader} title="Pembuat" icon={<ic.creator />} />
                        <ListInfoData value="10:00 " title="Durasi video" icon={<ic.duration />} />
                    </div>
                    <div className="h-50 overflow-hidden gap-1 justify-center items-center  p-2 w-full flex">
                        <div className="h-full w-[50%] ">
                            <div className="flex justify-center items-center gap-1 h-5">
                                <ic.audio />
                                <h1 className="text-white text-[13px]">Download audio</h1>
                            </div>
                            <div className="h-full w-full p-1 gap-4 overflow-scroll flex flex-col ">


                                {data?.audio.map((f,i) => (
                                    <DownloadButtonAudio key={i} url={data.url} title={data.title} format={f.format_id} size={f.size} ext={f.ext} abr={f.abr} />
                                ))}
                            </div>
                        </div>
                        <div className="h-full w-[50%] ">
                            <div className="flex justify-center items-center gap-1 h-5">
                                <ic.video />
                                <h1 className="text-white text-[13px]">Download video</h1>
                            </div>
                            <div className="h-full w-full p-1 gap-4 overflow-scroll flex flex-col  ">
                                {data?.video.map((f, i) => (
                                    <DownloadButtonVideo key={i} url={data.url}  title={data.title} format={f.format}  size={f.size} ext={f.ext} quality={f.height} fps={f.fps} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResultFetch
// https://localhost:5173/Index
