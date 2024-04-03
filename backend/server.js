const express = require("express")
const supabase = require("@supabase/supabase-js")

const app = express()
app.use(express.json())

const PORT = 3211 || process.env.PORT


const SUPABASE_URL = "https://ywdteimnndmjyytbabdl.supabase.co"
const SUPABASE_SERVICE_ROLE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3ZHRlaW1ubmRtanl5dGJhYmRsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTY5NDI2OCwiZXhwIjoyMDI3MjcwMjY4fQ.ogP8TPNUGgytUwyWFV0I7tVtwhPvPHUKprG9LgT4Gv4"

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE)

app.get("/", async(req,res)=>{
    const getBlog = await db.from("blog").select()
    console.log(getBlog)
    res.json({
        getBlog
    })
})

app.post("/",async (req,res)=> {
    const { title, description } = req.body
    const createPost = await db.from("blog").insert({ title, description })
    console.log("createPost:", createPost)

    res.json({
        createPost
    })
})

app.listen(PORT, ()=> {
    console.log("server runnimh on port ", PORT)
})