require("dotenv").config()
const express=require("express")
const cors=require("cors")
require('./Connections/db')
const route=require("./routes/route")


const taskServer=express()


// middlewares
taskServer.use(cors())
taskServer.use(express.json())
taskServer.use(route)


const PORT=3000|| process.env.PORT

taskServer.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    
})

taskServer.get("/",(req,res)=>{
    res.send('<h1>Welcome to task-server</h1>')
})
