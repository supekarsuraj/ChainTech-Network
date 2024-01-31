const con = require('../config/dbconnection');

const createUser = (values) => {
    // console.log("come here");
    const sql = 'INSERT INTO user (name, password ,email) VALUES (?, ?, ?)';
    return executeQuery(sql, values);
};
 const findByNameAndPassword=(values)=>{
    console.log(values );
    

    const sql="SELECT * from user where name = ? and password = ?";
    return executeQuery(sql,values)
 }
const finduser= (email)=>{
    const sql="SELECT * from user where email = ?";
    return executeQuery(sql,[email]);
}

const executeQuery = (sql, values) => {
    return new Promise((resolve, reject) => {
        con.execute(sql, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = { createUser , finduser, findByNameAndPassword};
