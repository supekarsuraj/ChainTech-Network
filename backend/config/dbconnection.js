const mysql2=require('mysql2');
var con=mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"todolist"
});
con.connect((err)=>{
    if(err) throw err;
    console.log("connect your database");
})
module.exports=con;
