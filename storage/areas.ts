import { Transform, Type, Expose } from "class-transformer";

export class areas{
    @Expose({name: "nombre"})
    @Transform(({value})=>{
        let data= /^[a-zA-Z\s]+$/.test(value)
        if(data && typeof value =="string"){
            return String(value);
        } 
        else{
            throw {status:401, message:"Mira bien el tipo de dato o la sintaxis, error en el nombre"}
        }
    })
    NOM:string;
    @Expose({name: "computadores"})
    @Transform(({value})=>{
        if (value == null || value === "") {
            return null;
          } else {
            let data = /^[0-9]+$/g.test(value);
            if (data && typeof value == "number") {
              return String(value);
            } else {
              throw { status: 403, message: "Mira bien el tipo de dato o la sintaxis, error en computadores" };
            }
          }
    })
    PC:number;
    @Expose({name: "teclados"})
    @Transform(({value})=>{
        if (value == null || value === "") {
            return null;
          } else {
            let data = /^[0-9]+$/g.test(value);
            if (data && typeof value == "number") {
              return String(value);
            } else {
              throw { status: 403, message: "Mira bien el tipo de dato o la sintaxis, error en teclados" };
            }
          }
    })
    KBO:number;
    @Expose({name: "mouse"})
    @Transform(({value})=>{
        if (value == null || value === "") {
            return null;
          } else {
            let data = /^[0-9]+$/g.test(value);
            if (data && typeof value == "number") {
              return String(value);
            } else {
              throw { status: 403, message: "Mira bien el tipo de dato o la sintaxis, error en mouses" };
            }
          }
    })
    MOU:number;
    @Expose({name: "diademas"})
    @Transform(({value})=>{
        if (value == null || value === "") {
            return null;
          } else {
            let data = /^[0-9]+$/g.test(value);
            if (data && typeof value == "number") {
              return String(value);
            } else {
              throw { status: 403, message: "Mira bien el tipo de dato o la sintaxis, error en diademas" };
            }
          }
    })
    HPH:number;

    
    constructor(p1:string, p2:number, p3:number, p4:number, p5:number){
        this.NOM = p1;
        this.PC = p2;
        this.KBO = p3;
        this.MOU = p4;
        this.HPH = p5;
    }
}