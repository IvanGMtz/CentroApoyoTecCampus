import { Transform, Type, Expose } from "class-transformer";

export class incidencia{
    @Expose({name: "categoria"})
    @Transform(({value})=>{
        let data= /^[a-zA-Z\s]+$/.test(value)
        if(data && typeof value =="string"){
            return String(value);
        } 
        else{
            throw {status:401, message:"Mira bien el tipo de dato o la sintaxis, error en el nombre"}
        }
    })
    CAT:string;
    @Expose({name: "tipo"})
    @Transform(({value})=>{
        let data= /^[a-zA-Z\s]+$/.test(value)
        if(data && typeof value =="string"){
            return String(value);
        } 
        else{
            throw {status:401, message:"Mira bien el tipo de dato o la sintaxis, error en el email"}
        }
    })
    TYPE:string;
    @Expose({name: "descripcion"})
    @Transform(({value})=>{
        let data= /^[a-zA-Z0-9\s]+$/.test(value)
        if(data && typeof value =="string"){
            return String(value);
        }else{
            throw {status:401, message:"Mira bien el tipo de dato o la sintaxis, error en la descripcion"}
        }
    })
    DESCP:string;
    @Expose({name: "fecha_reporte"})
    @Transform(({value})=>{
        let data= /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[01])$/.test(value)
        if(data && typeof value =="string"){
            return String(value);
        }else{
            throw {status:402, message:"Formato de fecha YYYY-MM-DDTHH:MM:SSZ"}
        }
    })
    DATE:string;
    @Expose({name: "severidad"})
    @Transform(({value})=>{
        let data= /^[a-zA-Z\s]+$/.test(value)
        if(data && typeof value =="string" && (value==="leve" || value==="moderada" || value==="critica")){
            return String(value);
        }else{
            throw {status:403, message:"Severidad: leve, moderada o critica"}
        }
    })
    SEV:string;
    @Expose({name: "area_training_id"})
    @Transform(({value})=>{
        let data= /^[0-9]+$/g.test(value)
        if(data && typeof value =="number"){
            return Number(value);
        }else if(value == null){
            return null
        }else{
            throw {status:401, message:"Mira bien el tipo de dato o la sintaxis, error en Area Training"}
        }
    })
    AREATRA:number;
    @Expose({name: "area_training_id"})
    @Transform(({value})=>{
        let data= /^[0-9]+$/g.test(value)
        if(data && typeof value =="number"){
            return Number(value);
        }else if(value == null){
            return null
        }else{
            throw {status:401, message:"Mira bien el tipo de dato o la sintaxis, error en Area Review"}
        }
    })
    AREAREW:number;
    @Expose({name: "trainer_id"})
    @Transform(({value})=>{
        let data= /^[0-9]+$/g.test(value)
        if(data && typeof value =="number"){
            return Number(value);
        }else if(value == null){
            return null
        }else{
            throw {status:401, message:"Mira bien el tipo de dato o la sintaxis, error en trainer"}
        }
    })
    TRAI:number;
    
    constructor(p1:string, p2:string, p3:string, p4:string, p5:string, p6:number, p7:number, p8: number){
        this.CAT = p1;
        this.TYPE = p2;
        this.DESCP = p3;
        this.DATE = p4;
        this.SEV = p5;
        this.AREATRA = p6;
        this.AREAREW = p7;
    }
}