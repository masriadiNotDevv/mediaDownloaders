import * as ic from "../assets/Icons"
export default function MediaIc({title, icon}) {
return (
    <div className="flex gap-1 justify-center items-center ">
{icon}
<p className="text-gray-100 font-semibold text-[10px]">
    {title}
</p>
    </div>

)

}