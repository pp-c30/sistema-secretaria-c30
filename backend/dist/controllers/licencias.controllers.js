"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenciasControllers = void 0;
const database_1 = require("../database");
class LicenciasControllers {
<<<<<<< HEAD
=======
    listaLicencias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conecto con la base
            const con = yield database_1.conexion();
            let licencias = yield con.query('select * from licencias');
            return res.json(licencias[0]);
        });
    }
    crearLicencias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo datos mediante el metodo post
            let licencias = req.body;
            const con = yield database_1.conexion();
            yield con.query('insert into licencias set ?', [licencias]);
            return res.json('La licencia se inserto correctamente');
        });
    }
>>>>>>> 140c847438a46502a7769137a1bde14c53bebec9
    eliminarLicencias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibimos el parametro ID a traves del metodo DELETE
            let id_licencia = req.params.id;
            let con = yield database_1.conexion();
            yield con.query('delete from licencia where id_licencia = ?', id_licencia);
            return res.json('La licencia se ha eliminado exitosamente');
        });
    }
}
exports.LicenciasControllers = LicenciasControllers;
