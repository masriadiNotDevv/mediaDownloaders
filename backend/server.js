import express from "express"
import cors from "cors"
import { spawn } from "child_process"
const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3000
app.post("/fetch_url", (req, res) => {
    const { url } = req.body
    const medl = spawn("yt-dlp", ["-J", url])
    res.json({
        isSucces: true,
        message: "succes"
    })
})
app.listen(PORT, "0.0.0.0", () => {
    console.log(`app listen on port ${PORT}`)
})