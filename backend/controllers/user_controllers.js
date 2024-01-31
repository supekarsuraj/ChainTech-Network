const userModels = require('../models/user_models');


const createUser = async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;

    try {
        
        const userExists = await search(email);
        console.log(12, userExists)
        if (userExists) {
            res.status(400).send({ message: "User with the provided email already exists" });
        } else {
            
            const savedUser = await userModels.createUser([name, password, email]);
            res.status(201).send({ message: "User created successfully",record : savedUser });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};
const login = async (req,res)=>{
    const name=req.body.name;
    const password=req.body.password;
    const values=[name,password];
    try {
        const data = await  userModels.findByNameAndPassword(values);
        // console.log(`your data is ${data}`)
        if (data.length >= 0) {
            // console.log(`your data is ${data}`)
            res.status(200).json({ payload: data });
            console.log("Your data is here");
            // res.status(200).send('OK');
            // return false; 
        } else {
            // res.send("your user and password is wrong")
            res.status(404).send('Not Found');

            // return true ; 
        }
    } catch (error) {
        
    }
}


const search = async (email) => {
    try {
        const userData = await userModels.finduser(email);
        console.log(userData)
        if (userData.length == 0) {
            return false; 
        } else {
            return true ; 
        }
    } catch (error) {
        throw error;
    }
};


module.exports = { createUser ,login  };
