const tasks=require('../Models/taskModel')



//to add tasks
exports.addTask=async(req,res)=>{
    try{
        const {title,due,description,status}=req.body
    const newTask=new tasks({
        title,due,description,status
    })
    await newTask.save()
    res.status(200).json(newTask)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
    
}

//to get all tasks
exports.getAllTasks=async(req,res)=>{
    try{
        const allTasks=await tasks.find()
        res.status(200).json(allTasks)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
}

//to get one task
exports.getOneTask=async(req,res)=>{
    try{
        const {id}=req.params
        const singleTask=await tasks.findOne({_id:id})
        res.status(200).json(singleTask)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
   
}

// to delete task

exports.deleteTask=async(req,res)=>{
    try{
        const {id}=req.params
    const val=await tasks.findOneAndDelete({_id:id})
    res.status(200).json(val)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
    
}

exports.editTask=async(req,res)=>{
    try{
        const {title,due,description,status}=req.body
        const {id}=req.params
        const existing=await tasks.findOne({_id:id})
        existing.title=title
        existing.due=due
        existing.description=description
        existing.status=status
        await existing.save()
        res.status(200).json(existing)
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
   

}