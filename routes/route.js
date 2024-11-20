const express=require("express")
const taskController=require('../Controllers/taskController')


const route=express.Router()

route.post('/addtask',taskController.addTask)
route.get('/getalltasks',taskController.getAllTasks)
route.get('/getonetask/:id',taskController.getOneTask)
route.delete('/deltask/:id',taskController.deleteTask)
route.put('/edittask/:id',taskController.editTask)


module.exports=route