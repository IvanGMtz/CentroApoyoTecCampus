var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Expose } from "class-transformer";
export class incidencia {
    constructor(p1, p2, p3, p4, p5, p6, p7, p8) {
        this.CAT = p1;
        this.TYPE = p2;
        this.DESCP = p3;
        this.DATE = p4;
        this.SEV = p5;
        this.AREATRA = p6;
        this.AREAREW = p7;
    }
}
__decorate([
    Expose({ name: "categoria" }),
    Transform(({ value }) => {
        let data = /^[a-zA-Z\s]+$/.test(value);
        if (data && typeof value == "string") {
            return String(value);
        }
        else {
            throw { status: 401, message: "Mira bien el tipo de dato o la sintaxis, error en el nombre" };
        }
    }),
    __metadata("design:type", String)
], incidencia.prototype, "CAT", void 0);
__decorate([
    Expose({ name: "tipo" }),
    Transform(({ value }) => {
        let data = /^[a-zA-Z\s]+$/.test(value);
        if (data && typeof value == "string") {
            return String(value);
        }
        else {
            throw { status: 401, message: "Mira bien el tipo de dato o la sintaxis, error en el email" };
        }
    }),
    __metadata("design:type", String)
], incidencia.prototype, "TYPE", void 0);
__decorate([
    Expose({ name: "descripcion" }),
    Transform(({ value }) => {
        let data = /^[a-zA-Z0-9\s]+$/.test(value);
        if (data && typeof value == "string") {
            return String(value);
        }
        else {
            throw { status: 401, message: "Mira bien el tipo de dato o la sintaxis, error en la descripcion" };
        }
    }),
    __metadata("design:type", String)
], incidencia.prototype, "DESCP", void 0);
__decorate([
    Expose({ name: "fecha_reporte" }),
    Transform(({ value }) => {
        let data = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[01])$/.test(value);
        if (data && typeof value == "string") {
            return String(value);
        }
        else {
            throw { status: 402, message: "Formato de fecha YYYY-MM-DDTHH:MM:SSZ" };
        }
    }),
    __metadata("design:type", String)
], incidencia.prototype, "DATE", void 0);
__decorate([
    Expose({ name: "severidad" }),
    Transform(({ value }) => {
        let data = /^[a-zA-Z\s]+$/.test(value);
        if (data && typeof value == "string" && (value === "leve" || value === "moderada" || value === "critica")) {
            return String(value);
        }
        else {
            throw { status: 403, message: "Severidad: leve, moderada o critica" };
        }
    }),
    __metadata("design:type", String)
], incidencia.prototype, "SEV", void 0);
__decorate([
    Expose({ name: "area_training_id" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else if (value == null) {
            return null;
        }
        else {
            throw { status: 401, message: "Mira bien el tipo de dato o la sintaxis, error en Area Training" };
        }
    }),
    __metadata("design:type", Number)
], incidencia.prototype, "AREATRA", void 0);
__decorate([
    Expose({ name: "area_training_id" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else if (value == null) {
            return null;
        }
        else {
            throw { status: 401, message: "Mira bien el tipo de dato o la sintaxis, error en Area Review" };
        }
    }),
    __metadata("design:type", Number)
], incidencia.prototype, "AREAREW", void 0);
__decorate([
    Expose({ name: "trainer_id" }),
    Transform(({ value }) => {
        let data = /^[0-9]+$/g.test(value);
        if (data && typeof value == "number") {
            return Number(value);
        }
        else if (value == null) {
            return null;
        }
        else {
            throw { status: 401, message: "Mira bien el tipo de dato o la sintaxis, error en trainer" };
        }
    }),
    __metadata("design:type", Number)
], incidencia.prototype, "TRAI", void 0);
