export function ListInfoData({ title, icon, value }) {
    return (
        <div className={`w-full my-2 items-center gap-2 flex
           
            `}>
            <div className={`bg-zinc-900 flex justify-center  p-2 rounded-lg group
                hover:bg-cyan-400 transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 shadow-cyan-400
                
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