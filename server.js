import express from "express"
import cors from "cors"
import { spawn } from "child_process"
const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3000
console.log("pong")
app.post("/fetch_url", (req, res) => {
    const { url } = req.body
    try {
        if (url.startsWith("https://youtu.be") || url.startsWith("https://insta") || url.startsWith("https://tt")) {
            const proses = spawn("yt-dlp", ["-J", url])
            let result = ""
            proses.stdout.on("data", (data) => {
                result += data.toString("utf8")
            })
            proses.stderr.on("data", (data) => {
                console.log(data.toString("utf8"))
            })
            proses.on("close", (code) => {
                const info = JSON.parse(result)
                const getVideoFormat = info.formats.filter((f) => f.acodec !== "none")
                console.log(getVideoFormat)
                if (code == 0) {
                    res.json({
                        isSucces: true,
                        message: "sukses mengambil data video",
                        title: info.title,
                        thumbnail: info.thumbnail,
                        description: info.description,
                        audio: info.formats.filter
                            ((f) => f.acodec !== "none" && f.codev !== "none")
                            .map((f) => ({
                                size: f.filesize ?? f.filesize_approx,
                                format_id: f.format_id,
                                ext: f.ext,
                                abr: f.abr,
                                acodec: f.acodec
                            })),
                        video: info.formats.filter((f) => f.vcodec !== "none" && f.ext !== "webm" && f.height )
                            .map((f) => ({
                                size: f.filesize ?? f.filesize_approx,
                                format_id: f.format_id,
                                ext: f.ext,
                                height: f.height,
                                fps: f.fps,
                                vcodec: f.vcodec
                            }))})
                } else {
                    res.json({
                        isSucces: false,
                        message: "terjadi kesalahan saat scrape video"
                    })
                }
            })
        } else {
            res.json({
                isSucces: false,
                message: "url yg valid hanya youtube , instagram dan tiktok "
            })
        }
    }
    catch (err) {
        res.json({
            isSucces: false,
            message: "terjadi kesalahan di server"
        })
    }
})
app.listen(PORT, "0.0.0.0", () => {
    console.log(`app listen on port ${PORT}`)
})