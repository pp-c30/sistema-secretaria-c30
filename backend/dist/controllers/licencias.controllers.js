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
    listaLicencias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conecto con la base
            const con = yield database_1.conexion();
            let licencias = yield con.query('select *,date_format(licencia_desde,"%d/%m/%Y") as l_formateada, date_format(fecha_alta_suplente, "%d/%m/%Y") as fas_formateada, date_format(fecha_baja_suplente, "%d/%m/%Y") as fbs_formateada from licencias ');
            return res.json(licencias[0]);
        });
    }
    crearLicencias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo datos mediante el metodo post
            let unaLicencias = {
                id_docente: req.body.id_docente,
                licencia_desde: req.body.licencia_desde = req.body.licencia_desde.year + "-" + req.body.licencia_desde.month + "-" + req.body.licencia_desde.day,
                id_asignatura: req.body.id_asignatura,
                id_docente_suplente: req.body.id_docente_suplente,
                n_resolucion: req.body.n_resolucion,
                fecha_alta_suplente: req.body.fecha_alta_suplente = req.body.fecha_alta_suplente.year + "-" + req.body.fecha_alta_suplente.month + "-" + req.body.fecha_alta_suplente.day,
                fecha_baja_suplente: req.body.fecha_baja_suplente = req.body.fecha_baja_suplente.year + "-" + req.body.fecha_baja_suplente.month + "-" + req.body.fecha_baja_suplente.day,
                estado_licencia: req.body.estado_licencia,
            };
            const con = yield database_1.conexion();
            yield con.query('insert into licencias set ?', [unaLicencias]);
            return res.json('La licencia se inserto correctamente');
        });
    }
    eliminarLicencias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibimos el parametro ID a traves del metodo DELETE
            let id_licencia = req.params.id;
            let con = yield database_1.conexion();
            yield con.query('delete from licencias where id_licencia = ?', id_licencia);
            return res.json('La licencia se ha eliminado exitosamente');
        });
    }
    actualizarLicencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo el parametro ID de la licencia que voy a actualizar
            let id_licencia = req.params.id;
            //recibo un JSON con los nuevos datos actualizados
            let licencia = req.body;
            //conecto con la base de datos
            let con = yield database_1.conexion();
            yield con.query('update licencias set ? where id_licencia = ? ', [licencia, id_licencia]);
            return res.json('la licencia fue actualizada');
        });
    }
    obtenerLicencia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo ID para buscar un docente
            let id_licencia = req.params.id;
            //nos conectamos a la base de datos
            let con = yield database_1.conexion();
            //busco un pogo de la tabla  a trves de un ID
            let licencia = yield con.query('select * from pago where id_licencia = ?', [id_licencia]);
            //muestro el pago encontrado
            return res.json(licencia[0]);
        });
    }
}
exports.LicenciasControllers = LicenciasControllers;
