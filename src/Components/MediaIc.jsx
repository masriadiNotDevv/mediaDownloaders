import * as ic from "../assets/Icons"
export default function MediaIc({title, icon}) {
return (
    <div className="flex w-30 outline-1 outline-zinc-900 gap-1 bg-zinc-950 py-2 rounded-xl justify-center items-center ">
{icon}
<p className="text-gray-100 font-semibold text-[10px]">
    {title}
</p>
    </div>

)

}