const mongoose=require("mongoose")

const taskSchema=new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    due:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    status:{
        required:true,
        type:String
    }
})

const tasks=new mongoose.model("tasks",taskSchema)
module.exports=tasks