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
class Personas_acargoController {
    crearPersonas_acargo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.fecha_nacimiento = req.body.fecha_nacimiento.year + "-" + req.body.fecha_nacimiento.month + "-" + req.body.fecha_nacimiento.day;
            //recibo los datos enviados
            let personas_acargo = req.body;
            //conecto con la base de datos
            const lean = yield database_1.conexion();
            //realizo el INSERT de la persona a cargoS
            yield lean.query('insert into personas_acargo set ?', [personas_acargo]);
            res.json('El cargo fue creado');
        });
    }
    actualizarPersonas_acargo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //metodo UPDATE
            let id_pc = req.params.id;
            let IPersonas_acargo = req.body;
            let con = yield database_1.conexion();
            yield con.query('update personas_acargo set ? where id_docente= ?', [IPersonas_acargo, id_pc]);
            res.json('Las personas a cargo se actualizo exitosamente');
        });
    }
    eliminarPersonas_acargo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_pc = req.params.id;
            let lean = yield database_1.conexion();
            yield lean.query('delete from personas_acargo where id_pc = ?', id_pc);
            return res.json('Se elimino la persona a cargo');
        });
    }
    listaPersonas_acargo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conecto con la base
            const lean = yield database_1.conexion();
            let personas_acargo = yield lean.query('select *, DATE_FORMAT(fecha_nacimiento, "%d/%m/%Y") as fecha_nacimiento, DATE_FORMAT(fecha_nacimiento, "%d") as day,DATE_FORMAT(fecha_nacimiento, "%m") as month, DATE_FORMAT(fecha_nacimiento, "%Y") as year from personas_acargo');
            res.json(personas_acargo[0]);
        });
    }
    obtenerPersonas_acargo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo ID para buscar una persona a cargo
            let id_pc = req.params.id;
            //nos conectamos a la base de datos
            let lean = yield database_1.conexion();
            //busco un pogo de la tabla  a traves de un ID
            let personas_acargo = yield lean.query('select * from personas_acargo where id_docente = 35', [id_pc]);
            return res.json(personas_acargo[0]);
        });
    }
}
exports.Personas_acargoController = Personas_acargoController;
