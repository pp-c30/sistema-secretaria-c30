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
exports.DocenteController = void 0;
const database_1 = require("../database");
class DocenteController {
    listaDocente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conecto con la base
            const con = yield database_1.conexion();
            let docente = yield con.query('select *,date_format(fecha_nacimiento, "%d/%m/%Y") as fn_formateada,date_format(fecha_ingreso_adm, "%d/%m/%Y") as fia_formateada,date_format(fecha_n_conyuge, "%d/%m/%Y") as fnc_formateada from docente');
            return res.json(docente[0]);
        });
    }
    crearDocente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo datos mediante el metodo post
            req.body.fecha_nacimiento = req.body.fecha_nacimiento.year + "-" + req.body.fecha_nacimiento.month + "-" + req.body.fecha_nacimiento.day;
            req.body.fecha_ingreso_adm = req.body.fecha_ingreso_adm.year + "-" + req.body.fecha_ingreso_adm.month + "-" + req.body.fecha_ingreso_adm.day;
            req.body.fecha_n_conyuge = req.body.fecha_n_conyuge.year + "-" + req.body.fecha_n_conyuge.month + "-" + req.body.fecha_n_conyuge.day;
            let docente = req.body;
            const con = yield database_1.conexion();
            yield con.query('insert into docente set ?', [docente]);
            res.json('El docente se ingreso correctamente');
        });
    }
    eliminarDocente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibimos el parametro ID a traves del metodo DELETE
            let id_docente = req.params.id;
            let con = yield database_1.conexion();
            yield con.query('delete from docente where id_docente = ?', id_docente);
            return res.json('Se elimino el docente');
        });
    }
    actualizarDocente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //metodo UPDATE
            let id_docente = req.params.id;
            let docente = req.body;
            let con = yield database_1.conexion();
            yield con.query('update docente set ? where id_docente= ?', [docente, id_docente]);
            return res.json('El docente se a actualizado exitosamente');
        });
    }
    obtenerDocente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo ID para buscar un docente
            let id_docente = req.params.id;
            //nos conectamos a la base de datos
            let con = yield database_1.conexion();
            //busco un pogo de la tabla  a trves de un ID
            let docente = yield con.query('select * from docente where id_docente = ?', [id_docente]);
            //muestro el docente encontrado
            return res.json(docente[0]);
        });
    }
}
exports.DocenteController = DocenteController;
