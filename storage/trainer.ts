import { Transform, Type, Expose } from "class-transformer";

export class trainer{
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
    @Expose({name: "email_personal"})
    @Transform(({value})=>{
        let data= /^[\w\-]+(\.[\w\-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/.test(value)
        if(data && typeof value =="string"){
            return String(value);
        } 
        else{
            throw {status:402, message:"Mira bien el tipo de dato o la sintaxis, error en el email"}
        }
    })
    MAIL:string;
    @Expose({name: "email_corporativo"})
    @Transform(({value})=>{
        let data= /^[\w\-]+(\.[\w\-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/.test(value)
        if(data && typeof value =="string"){
            return String(value);
        }else{
            throw {status:403, message:"Mira bien el tipo de dato o la sintaxis, error en el email corporativo"}
        }
    })
    MAILCORP:string;
    @Expose({name: "telefono_movil"})
    @Transform(({value})=>{
        let data= /^\+\d{1,3}\d{9}$/.test(value)
        if(data && typeof value =="string"){
            return String(value);
        }else{
            throw {status:403, message:"Mira bien el tipo de dato o la sintaxis, error en el telefono no olvides el indicativo"}
        }
    })
    TEL:string;
    @Expose({name: "telefono_residencia"})
    @Transform(({value})=>{
        let data= /^\+\d{1,3}\d{9}$/.test(value)
        if(value==null || value===""){
            return null;
        }else if(data && typeof value =="string"){
            return String(value);
        }else{
            throw {status:403, message:"Mira bien el tipo de dato o la sintaxis, error en el telefono no olvides el indicativo"}
        }
    })
    TELRES:string;
    @Expose({name: "telefono_empresa"})
    @Transform(({value})=>{
        let data= /^\+\d{1,3}\d{9}$/.test(value)
        if(data && typeof value =="string"){
            return String(value);
        }else{
            throw {status:403, message:"Mira bien el tipo de dato o la sintaxis, error en el telefono no olvides el indicativo"}
        }
    })
    TELEMP:string;
    @Expose({name: "telefono_movil_empresarial"})
    @Transform(({value})=>{
        if (value == null || value === "") {
            return null;
          } else {
            let data = /^\+\d{1,3}\d{9}$/.test(value);
            if (data && typeof value == "string") {
              return String(value);
            } else {
              throw { status: 403, message: "Mira bien el tipo de dato o la sintaxis, error en el telefono no olvides el indicativo" };
            }
          }
    })
    TELMOVEMP:string;
    
    constructor(p1:string, p2:string, p3:string, p4:string, p5:string, p6:string, p7:string){
        this.NOM = p1;
        this.MAIL = p2;
        this.MAILCORP = p3;
        this.TEL = p4;
        this.TELRES = p5;
        this.TELEMP = p6;
        this.TELMOVEMP = p7;
    }
}