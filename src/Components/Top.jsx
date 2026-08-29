import * as ic from "../assets/Icons"
import MediaIc from "./MediaIc"
export default function () {
    return (
        <div className=" h-24 w-full">


            <div className="h-62 mx-10 flex flex-col justify-end items-center">
                <h1 className="text-cyan-400 font-extrabold text-xl">MediaDownloader</h1>
                <h1 className="text-center font-poppins text-gray-100 text-sm">tools for download media from instagram , tiktok and youtube free usefull and no ads</h1>
                <div className=" justify-center gap-2 mt-5 flex h-10 w-full ">
                    <MediaIc title="Instagram" icon={<ic.instagram />} />
                    <MediaIc title="Tiktok" icon={<ic.tiktok />} />
                    <MediaIc title="Youtube" icon={<ic.youtube />} />
                </div>
            </div>
        </div>
    )
}