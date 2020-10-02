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
exports.AsignaturaController = void 0;
const database_1 = require("../database");
class AsignaturaController {
    crearAsignatura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo los datos enviados
            let asignatura = req.body;
            //conecto con la base de datos
            const lean = yield database_1.conexion();
            //realizo el INSERT de la asignatura
            yield lean.query('insert into asignatura set ?', [asignatura]);
            return res.json('la asignatura fue creada');
        });
    }
    actualizarAsignatura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //metodo UPDATE
            let id_asigatura = req.params.id;
            let IAsignatura = req.body;
            let con = yield database_1.conexion();
            yield con.query('update asignatura set ? where id_asignatura= ?', [IAsignatura, id_asigatura]);
            return res.json('La asignatura se a actualizado exitosamente');
        });
    }
    eliminarAsignatura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_asignatura = req.params.id;
            let lean = yield database_1.conexion();
            yield lean.query('delete from asignatura where id_asignatura = ?', id_asignatura);
            return res.json('Se elimino la asignatura');
        });
    }
}
exports.AsignaturaController = AsignaturaController;
