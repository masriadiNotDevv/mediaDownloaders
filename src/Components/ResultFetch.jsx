import { useEffect, useState } from "react";
import * as ic from "../assets/Icons"
import thumb from "../assets/images.jpg"
function ResultFetch() {
    function ListInfoData({ title, icon, value }) {
        return (
            <div className="w-full my-2 items-center gap-2 flex">
                <div className="bg-zinc-900  p-2 rounded-lg">
                    {icon}
                </div>
                <div className="">

                    <h2 className="text-zinc-400 text-[10px]">{title}</h2>
                    <h2 className="text-white font-semibold text-sm">{value}</h2>
                </div>
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
            <ListInfoData title="title video" value="Apa aja yg pntg bisa jalan" icon={<ic.title />} />
            <ListInfoData title="Description video" value="Lorem ipsum dolor sit amet" icon={<ic.desc />} />
            <ListInfoData title="Duration video" value="15:30" icon={<ic.duration />} />
        </div>
    )
}
export default ResultFetch