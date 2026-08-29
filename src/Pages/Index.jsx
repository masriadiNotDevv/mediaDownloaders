import Top from "../Components/Top"
import Body from "../Components/BodyLayout"
import Navbar from "../Components/Navbar"
import ResultFetch from "../Components/ResultFetch"
import { useEffect, useState, createContext } from "react"
export default function Index() {
    const [data, setData] = useState()
function dataHelper(data) {
setData(data)
  }
    return (
        <div className="h-full pb-10 bg-linear-to-t overflow-x-hidden from-black to-zinc-950 w-full">
            <Navbar />
            <Top />
            <div className="mt-40">
                
                <Body onData={dataHelper} />
                <ResultFetch data={data} />
            </div>
        </div>

    )
}
