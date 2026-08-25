import { useEffect, useState } from "react";
import * as ic from "../assets/Icons"

function ResultFetch({ data }) {
    const thumb = data.thumbnail
    function ListInfoData({ isDownload, height, title, icon, value }) {
        return (
            <div className={`w-full my-2 items-center gap-2 flex
           
            `}>
                <div className={`bg-zinc-900 flex justify-center  p-2 rounded-lg group
                hover:bg-cyan-400 transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 shadow-cyan-400
                ${height ? "h-20" : ""}
                `
                }>
                    {icon}
                </div>
                <div className="">

                    <h2 className="text-zinc-400 text-[10px] group-hover:text-cyan-500">{title}</h2>
                    <h2 className="text-white font-semibold text-sm hover:text-cyan-500 transition-all duration-200 cursor-default">{value}</h2>


                </div>
            </div>
        )
    }

    function DownloadButton({ type, ext, abr, size }) {
        const sz = size / 1024 / 1024
        return (
            <div className="flex items-center  h-10">
                <ic.download className="group-hover:stroke-white duration-200 transition-all" />
                <p className="text-[10px]  ml-1 text-white font-semibold">{ext}</p>
                <p className="text-[10px]  ml-1 text-white font-semibold"> | {sz.toFixed(2)}mb</p>
            </div>
        )

    }
    function DownloadButtonVideo({ext, size, quality }) {
        const sz = size / 1024 / 1024
        return (
            <div className="flex items-center rounded-sm p-2 cursor-pointer group transition-all duration-200 hover:bg-zinc-800 h-10">
                <ic.download className="group-hover:stroke-white duration-200 transition-all"/>
                <p className="text-[10px]  ml-1 text-zinc-500 duration-200 transition-all group-hover:text-white font-semibold">{ext}</p>
                <p className="text-[10px]  ml-1  text-zinc-500 duration-200 transition-all group-hover:text-white font-semibold"> | {sz.toFixed(2)}mb</p>
                <p className="text-[10px]  ml-1 text-zinc-500 duration-200 transition-all group-hover:text-white font-semibold"> | {quality}p</p>
            </div>
        )

    }

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
                    <p className="text-[13px] text-zinc-500 font-semibold">download audio</p>
                    {data.audio?.map((f, i) => (
                        <DownloadButton key={i} type="audio" ext={f.ext} abr={f.abr} size={f.size}  />
                    ))}
                </div>
                <div className="gap-1 flex flex-col  ">
                    <p className="text-[13px] text-zinc-500 font-semibold">download audio</p>
        
                    {data.video?.map((f, i) => (
                        <DownloadButtonVideo key={i} ext={f.ext} abr={f.abr} size={f.size} quality={f.height} fps={f.fps} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ResultFetch