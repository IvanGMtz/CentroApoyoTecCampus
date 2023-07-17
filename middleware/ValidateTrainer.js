import  express  from "express";
import { plainToClass } from "class-transformer";
import {trainer} from '../controller/trainer.js';
import 'reflect-metadata';

const appValidate = express();

appValidate.use(express.json());
appValidate.use("/", (req, res, next)=>{

    try{
        let data = plainToClass(trainer, req.body);
        console.log(data);
        next();
    }catch(error){
        res.send(error);
    }
    
})

export default appValidate;