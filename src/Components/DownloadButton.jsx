import * as ic from "../assets/Icons.jsx"
export function DownloadButtonAudio({ title, format, url, ext, size }) {
    const sz = size / 1024 / 1024
    async function downloadAudio() {
        try {
            let rand = Math.floor(Math.random() * 9999) + 1;
            let a = new Date()

            let now = `${a.getMilliseconds()}${a.getMinutes()}${a.getHours()}`
            const token = `${rand}${now}`
            const req = await fetch("http://192.168.1.230:3000/download", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    format: format,
                    url: url,
                    filename: title,
                    ext: ext,
                    token: token
                })
            })
            const res = await req.json()
            if (res.isSucces) {
                alert(res.message)
            } else {
                alert(res.message)
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div onClick={downloadAudio} className="flex items-center rounded-sm p-2 cursor-pointer group transition-all duration-200 hover:bg-zinc-800 h-10">
            <ic.download className="group-hover:stroke-white duration-200 transition-all" />
            <p className="text-[10px]  ml-1 text-zinc-500 duration-200 transition-all group-hover:text-white font-semibold">{ext}</p>
            <p className="text-[10px]  ml-1 text-zinc-500 duration-200 transition-all group-hover:text-white font-semibold"> | {sz.toFixed(2)}mb</p>
        </div>
    )

}

export function DownloadButtonVideo({ title, format, url, ext, size, quality }) {
    const sz = size / 1024 / 1024
    async function downloadVideo() {
        try {
            let rand = Math.floor(Math.random() * 9999) + 1;
            let d = new Date()
            let now = `${d.getMilliseconds()}${d.getMinutes()}${d.getHours()}`
            const token = `${rand}${now}`
            const req = await fetch("http://192.168.1.230:3000/download", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    format: format,
                    url: url,
                    filename: title,
                    token: token,
                    ext: ext,

                })
            })

            console.log("STATUS:", req.status)
            console.log("TYPE:", req.headers.get("content-type"))
            console.log("LENGTH:", req.headers.get("content-length"))

            const blob = await req.blob()

            console.log("BLOB:", blob)
            console.log("BLOB SIZE:", blob.size)
            console.log("BLOB TYPE:", blob.type)

            const downloadUrl = URL.createObjectURL(blob)

            const a = document.createElement("a")
            a.href = downloadUrl
            a.download = `${title}_${token}.${ext}`

            document.body.appendChild(a)

            console.log("CLICK DOWNLOAD")
            a.click()

            a.remove()

            setTimeout(() => {
                URL.revokeObjectURL(downloadUrl)
            }, 1000)
            //   const blob = await req.blob()

            //     const downloadUrl = URL.createObjectURL(blob)

            //     const a = document.createElement("a")
            //     a.href = downloadUrl
            //     a.download = "hasil.mp3"
            //     a.click()

            //     URL.revokeObjectURL(downloadUrl)
    //         const res = await req.json()
    //         if (res.isSucces) {
    //             alert(res.message)
    //             const blob = await req.blob()

    //             const downloadUrl = URL.createObjectURL(blob)

    //             const a = document.createElement("a")
    //             a.href = downloadUrl
    //             a.download = "hasil.mp3"
    //             a.click()

    //             URL.revokeObjectURL(downloadUrl)
    //         } else {
    //             alert(res.message)
    //         }
    } catch (err) {
           console.log(err)
       }
     }
    return (
        <div onClick={downloadVideo} className="flex items-center rounded-sm p-2 cursor-pointer group transition-all duration-200 hover:bg-zinc-800 h-10">
            <ic.download className="group-hover:stroke-white duration-200 transition-all" />
            <p className="text-[10px]  ml-1 text-zinc-500 duration-200 transition-all group-hover:text-white font-semibold">{ext} </p>
            <p className="text-[10px]  ml-1 text-zinc-500 duration-200 transition-all group-hover:text-white font-semibold"> | {sz.toFixed(2)}mb</p>
            <p className="text-[10px]  ml-1 text-zinc-500 duration-200 transition-all group-hover:text-white font-semibold"> | {quality}p</p>
        </div>
    )

}