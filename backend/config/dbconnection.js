const mysql2=require('mysql2');
var con=mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
con.connect((err)=>{
    if(err) throw err;
    console.log("connect your database");
})
module.exports=con;
