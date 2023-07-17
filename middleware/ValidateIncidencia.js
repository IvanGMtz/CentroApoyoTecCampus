import  express  from "express";
import { plainToClass } from "class-transformer";
import {incidencia} from '../controller/incidencias.js';
import 'reflect-metadata';

const appValidate = express();

appValidate.use(express.json());
appValidate.use("/", (req, res, next)=>{

    try{
        let data = plainToClass(incidencia, req.body);
        console.log(data);
        next();
    }catch(error){
        res.send(error);
    }
    
})

export default appValidate;