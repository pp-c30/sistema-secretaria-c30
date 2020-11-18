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
exports.LocalidadController = void 0;
const database_1 = require("../database");
class LocalidadController {
    eliminarLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id_localidad = req.params.id;
                let lean = yield database_1.conexion();
                yield lean.query('delete from localidad where id_localidad = ?', id_localidad);
                res.json('Se elimino la localidad');
            }
            catch (_a) {
                res.json('No se puede eliminar porque ya esta en uso');
            }
        });
    }
    listaLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conecto con la base
            const lean = yield database_1.conexion();
            let localidad = yield lean.query('select * from localidad');
            return res.json(localidad[0]);
        });
    }
    crearLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo datos mediante el metodo post
            let localidad = req.body;
            const lean = yield database_1.conexion();
            yield lean.query('insert into localidad set ?', [localidad]);
            return res.json('La localidad se ingreso correctamente');
        });
    }
    actualizarLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //metodo UPDATE
            let id_localidad = req.params.id;
            let localidad = req.body;
            let lean = yield database_1.conexion();
            yield lean.query('update localidad set ? where id_localidad= ?', [localidad, id_localidad]);
            return res.json('La localidad se a actualizado exitosamente');
        });
    }
    obtenerLocalidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo ID para buscar un docente
            let id_localidad = req.params.id;
            //nos conectamos a la base de datos
            let lean = yield database_1.conexion();
            //busco un pogo de la tabla  a trves de un ID
            let localidad = yield lean.query('select * from localidad where id_localidad = ?', [id_localidad]);
            //muestro el pago encontrado
            return res.json(localidad[0]);
        });
    }
}
exports.LocalidadController = LocalidadController;
