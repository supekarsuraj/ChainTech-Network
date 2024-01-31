const { json } = require('body-parser');
const listModels = require('../models/list_models');
const userModels= require('../models/user_models')

const insertList = async (req, res) => {
    console.log("Control comes in insertlist ");
    const name = req.body.name;
    const list = req.body.list;
    const status=req.body.status;

    try {
        const record = await find(name);
        console.log("Found record:", record);

        if (record != false) {
            // console.log("Name:", name);
            // console.log("Record:", record);

            await listModels.insertList([name, list, status]);
            // res.send("Your list is inserted");
            res.status(200).json({payload : listModels ,message:"your record list is inserted" })
            console.log("Run");
        } else {
            res.status(404).json({payload :"Record not Found"})
            // res.send("Record not found");
        }
    } catch (err) {
        console.log("Error in insertlist: ", err);
        res.status(500).send("Internal Server Error");
    }
}; 
const deleteTask= async (req,res)=>{
    const id=req.body.id;
    try {
        const record=await findById(id);
        if (record != false) {
            // console.log("Name:", name);
            // console.log("Record:", record);
    
            await listModels.deleteTask([id]); // Add await here
            res.status(200).json(`Your Task IS  Deleted `);
        } else {
            res.status(400).json("Record not found");
        }
    
        
    } catch (error) {
        res.send(error);
    }
}
const displayAll = async (req,res)=>{
    const name=req.params.user_name;
    try {
         const record=await findlistbyname(name);
        if (record != false) {
            return res.status(200).json({payload : record});
        } else {
            return res.status(400).json("Record not found");
        }
    } catch (error) {
        console.log(error)
        
    }

}
const updateTask =async (req,res)=>{
   const id=req.body.id;
   const newTask=req.body.newTask;
   const status=req.body.status;
   try{
    const record=findById(id);
    if (record != false) {
        // console.log("Name:", name);
        // console.log("Record:", record);

        await listModels.updateList(id, newTask, status);
        // const a=JSON.stringify(listModels);
        // console.log(listModels);
        res.status(200).json({message:"Your Task is Updated "});
        console.log("Run");
    } else {
        res.status(400).send("Record not found");
    }

   }catch(err)
   {

   }

}
const findlistbyname= async (name)=>{
    try {
        const userData = await listModels.findListByname(name);
        console.log(31, userData)
        if (userData.length != 0) {
            return userData; 
        } else {
            return false ; 
        }
    } catch (error) {
        throw error;
    }

}
const find= async (name)=>{
    try {
        const userData = await listModels.findByname(name);
        console.log(31, userData)
        if (userData.length != 0) {
            return true; 
        } else {
            return false ; 
        }
    } catch (error) {
        throw error;
    }

}

const findById= async (id)=>{
    // const userdate=listModels.findById(id);
    try {
        const userData = await listModels.findById(id);
        console.log(31, userData)
        if (userData.length != 0) {
            return true; 
        } else {
            return false ; 
        }
    } catch (error) {
        throw error;
    }


}


module.exports = { insertList , find, findById, updateTask , deleteTask , displayAll , findlistbyname};
