const express = require("express");
const router = express.Router();
const userController = require('../controllers/user_controllers');
const listController=require('../controllers/list_controllers');
router.post('/list',listController.insertList)//for insert list

router.post('/signup', userController.createUser)//for create new account
router.post("/login", userController.login)//for login 

 router.put('/updateTask', listController.updateTask); //for update task
 router.delete('/deleteTask',listController.deleteTask)//for delete task by id
 router.get('/display/:user_name',listController.displayAll);//for display all tasks



module.exports = router;

