const con = require('../config/dbconnection');
// const { updateTask } = require('../controllers/list_controllers');

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
function findById(id){
    const sql= "SELECT * FROM todolist where id = ?";
    return executeQuery(sql,[id]);
}

function findByname(name) {
    const sql = "SELECT * FROM user WHERE name = ?";
    return executeQuery(sql, [name]);
}

function insertList(values) {
    const sql = "INSERT INTO todolist (name, list, status) VALUES (?, ?, ?)";
    return executeQuery(sql, values);
}
 function updateList(id ,newTask ,statusval)
{
   const sql= "UPDATE todolist SET list = ?, status  =  ? WHERE   id = ?";
   const values=[newTask,statusval,id]
   return executeQuery(sql,values)

}
function deleteTask(id)
{
    const sql = "DELETE FROM todolist WHERE id = ?";
    return executeQuery(sql,id);
}
function findListByname(name)
{
    const sql= "SELECT * FROM todolist where name = ?";
    return executeQuery(sql,[name]);
}

module.exports = { findByname, insertList, findById , updateList , deleteTask , findListByname};
