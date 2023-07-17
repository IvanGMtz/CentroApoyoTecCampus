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
export class areas {
    constructor(p1, p2, p3, p4, p5) {
        this.NOM = p1;
        this.PC = p2;
        this.KBO = p3;
        this.MOU = p4;
        this.HPH = p5;
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
], areas.prototype, "NOM", void 0);
__decorate([
    Expose({ name: "computadores" }),
    Transform(({ value }) => {
        if (value == null || value === "") {
            return null;
        }
        else {
            let data = /^[0-9]+$/g.test(value);
            if (data && typeof value == "number") {
                return String(value);
            }
            else {
                throw { status: 403, message: "Mira bien el tipo de dato o la sintaxis, error en computadores" };
            }
        }
    }),
    __metadata("design:type", Number)
], areas.prototype, "PC", void 0);
__decorate([
    Expose({ name: "teclados" }),
    Transform(({ value }) => {
        if (value == null || value === "") {
            return null;
        }
        else {
            let data = /^[0-9]+$/g.test(value);
            if (data && typeof value == "number") {
                return String(value);
            }
            else {
                throw { status: 403, message: "Mira bien el tipo de dato o la sintaxis, error en teclados" };
            }
        }
    }),
    __metadata("design:type", Number)
], areas.prototype, "KBO", void 0);
__decorate([
    Expose({ name: "mouse" }),
    Transform(({ value }) => {
        if (value == null || value === "") {
            return null;
        }
        else {
            let data = /^[0-9]+$/g.test(value);
            if (data && typeof value == "number") {
                return String(value);
            }
            else {
                throw { status: 403, message: "Mira bien el tipo de dato o la sintaxis, error en mouses" };
            }
        }
    }),
    __metadata("design:type", Number)
], areas.prototype, "MOU", void 0);
__decorate([
    Expose({ name: "diademas" }),
    Transform(({ value }) => {
        if (value == null || value === "") {
            return null;
        }
        else {
            let data = /^[0-9]+$/g.test(value);
            if (data && typeof value == "number") {
                return String(value);
            }
            else {
                throw { status: 403, message: "Mira bien el tipo de dato o la sintaxis, error en diademas" };
            }
        }
    }),
    __metadata("design:type", Number)
], areas.prototype, "HPH", void 0);
