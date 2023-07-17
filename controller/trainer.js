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
export class trainer {
    constructor(p1, p2, p3, p4, p5, p6, p7) {
        this.NOM = p1;
        this.MAIL = p2;
        this.MAILCORP = p3;
        this.TEL = p4;
        this.TELRES = p5;
        this.TELEMP = p6;
        this.TELMOVEMP = p7;
    }
}
__decorate([
    Expose({ name: "nombre" }),
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
], trainer.prototype, "NOM", void 0);
__decorate([
    Expose({ name: "email_personal" }),
    Transform(({ value }) => {
        let data = /^[\w\-]+(\.[\w\-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/.test(value);
        if (data && typeof value == "string") {
            return String(value);
        }
        else {
            throw { status: 402, message: "Mira bien el tipo de dato o la sintaxis, error en el email" };
        }
    }),
    __metadata("design:type", String)
], trainer.prototype, "MAIL", void 0);
__decorate([
    Expose({ name: "email_corporativo" }),
    Transform(({ value }) => {
        let data = /^[\w\-]+(\.[\w\-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/.test(value);
        if (data && typeof value == "string") {
            return String(value);
        }
        else {
            throw { status: 403, message: "Mira bien el tipo de dato o la sintaxis, error en el email corporativo" };
        }
    }),
    __metadata("design:type", String)
], trainer.prototype, "MAILCORP", void 0);
__decorate([
    Expose({ name: "telefono_movil" }),
    Transform(({ value }) => {
        let data = /^\+\d{1,3}\d{9}$/.test(value);
        if (data && typeof value == "string") {
            return String(value);
        }
        else {
            throw { status: 403, message: "Mira bien el tipo de dato o la sintaxis, error en el telefono no olvides el indicativo" };
        }
    }),
    __metadata("design:type", String)
], trainer.prototype, "TEL", void 0);
__decorate([
    Expose({ name: "telefono_residencia" }),
    Transform(({ value }) => {
        let data = /^\+\d{1,3}\d{9}$/.test(value);
        if (value == null || value === "") {
            return null;
        }
        else if (data && typeof value == "string") {
            return String(value);
        }
        else {
            throw { status: 403, message: "Mira bien el tipo de dato o la sintaxis, error en el telefono no olvides el indicativo" };
        }
    }),
    __metadata("design:type", String)
], trainer.prototype, "TELRES", void 0);
__decorate([
    Expose({ name: "telefono_empresa" }),
    Transform(({ value }) => {
        let data = /^\+\d{1,3}\d{9}$/.test(value);
        if (data && typeof value == "string") {
            return String(value);
        }
        else {
            throw { status: 403, message: "Mira bien el tipo de dato o la sintaxis, error en el telefono no olvides el indicativo" };
        }
    }),
    __metadata("design:type", String)
], trainer.prototype, "TELEMP", void 0);
__decorate([
    Expose({ name: "telefono_movil_empresarial" }),
    Transform(({ value }) => {
        if (value == null || value === "") {
            return null;
        }
        else {
            let data = /^\+\d{1,3}\d{9}$/.test(value);
            if (data && typeof value == "string") {
                return String(value);
            }
            else {
                throw { status: 403, message: "Mira bien el tipo de dato o la sintaxis, error en el telefono no olvides el indicativo" };
            }
        }
    }),
    __metadata("design:type", String)
], trainer.prototype, "TELMOVEMP", void 0);
