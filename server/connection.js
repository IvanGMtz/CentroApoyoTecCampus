import mysql from "mysql2";

const con = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "centroapoyocampus",
    port: 3306
});

export default  con;