import { Router } from "express";
import con from "../server/connection.js"
const appReview = Router();


appReview.post("/", (req, res) => {
    con.query(
        /*sql*/ `INSERT INTO areas_review SET ?`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            data.affectedRows+=200;
            let result = req.body;
            result.id= data.insertId;
            res.status(data.affectedRows).send(result);
        }
    );
})

appReview.get("/", (req, res) => {
    con.query(
        /*sql*/ `SELECT * FROM areas_review`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})

appReview.put("/:id", (req, res) => {
    con.query(
        /*sql*/ `UPDATE areas_review SET ? WHERE id= ?`,
        [req.body, req.params.id],
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})

appReview.delete("/:id", (req, res) => {
    con.query(
        /*sql*/ `DELETE FROM areas_review WHERE id= ?`,
        req.params.id,
        (err,data,fils)=>{
            console.log(err);
            console.log(fils);
            res.send(data)
        }
    );
})



export default appReview;