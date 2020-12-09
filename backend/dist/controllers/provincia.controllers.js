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
exports.ProvinciaController = void 0;
const database_1 = require("../database");
class ProvinciaController {
    eliminarProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_provincia = req.params.id;
            let lean = yield database_1.conexion();
            yield lean.query('delete from provincia where id_provincia = ?', id_provincia);
            return res.json('Se elimino la provincia');
        });
    }
    listaProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conecto con la base
            const lean = yield database_1.conexion();
            let provincia = yield lean.query('select * from provincia');
            return res.json(provincia[0]);
        });
    }
    crearProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo datos mediante el metodo post
            let provincia = req.body;
            const lean = yield database_1.conexion();
            yield lean.query('insert into provincia set ?', [provincia]);
            return res.json('La provincia se ingreso correctamente');
        });
    }
    actualizarProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //metodo UPDATE
            let id_provincia = req.params.id;
            let provincia = req.body;
            let lean = yield database_1.conexion();
            yield lean.query('update provincia set ? where id_provincia= ?', [provincia, id_provincia]);
            return res.json('La provincia se a actualizado exitosamente');
        });
    }
    obtenerProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo ID para buscar una provincia
            let id_provincia = req.params.id;
            //nos conectamos a la base de datos
            let lean = yield database_1.conexion();
            //busco un pogo de la tabla  a trves de un ID
            let provincia = yield lean.query('select * from provincia where id_provincia = ?', [id_provincia]);
            //muestro el pago encontrado
            return res.json(provincia[0]);
        });
    }
}
exports.ProvinciaController = ProvinciaController;
