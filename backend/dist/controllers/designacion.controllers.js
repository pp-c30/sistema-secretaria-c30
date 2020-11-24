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
const database_1 = require("../database");
class DesignacionController {
    listaDesignacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conecto con la base
            const con = yield database_1.conexion();
            let designacion = yield con.query('select * from designacion');
            return res.json(designacion[0]);
        });
    }
    crearDesignacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo datos mediante el metodo post
            let designacion = req.body;
            const con = yield database_1.conexion();
            yield con.query('insert into designacion set ?', [designacion]);
            return res.json('La designacion se ingreso correctamente');
        });
    }
    eliminarDesignacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_designacion = req.params.id;
            let lean = yield database_1.conexion();
            yield lean.query('delete from designacion where id_designacion = ?', id_designacion);
            return res.json('Se elimino la designacion del docente');
        });
    }
    actualizarDesignacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //metodo UPDATE
            let id_designacion = req.params.id;
            let IDesignacion = req.body;
            let con = yield database_1.conexion();
            yield con.query('update designacion set ? where id_designacion= ?', [IDesignacion, id_designacion]);
            return res.json('La asignacion se a actualizado exitosamente');
        });
    }
    obtenerDesignacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo ID para buscar un docente
            let id_designacion = req.params.id;
            //nos conectamos a la base de datos
            let con = yield database_1.conexion();
            //busco una designacion de la tabla  a traves de un ID
            let designacion = yield con.query('select * from designacion where id_designacion = ?', [id_designacion]);
            //muestro el pago encontrado
            return res.json(designacion[0]);
        });
    }
}
exports.DesignacionController = DesignacionController;
