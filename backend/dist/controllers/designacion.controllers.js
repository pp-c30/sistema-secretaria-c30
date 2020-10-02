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
exports.DesignacionController = void 0;
const database_1 = require("../database");
class DesignacionController {
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
    eliminarDesignacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_designacion = req.params.id;
            let lean = yield database_1.conexion();
            yield lean.query('delete from designacion where id_designacion = ?', id_designacion);
            return res.json('Se elimino la designacion del docente');
        });
    }
    crearDesignacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //recibo los datos enviados
            let designacion = req.body;
            //conecto con la base de datos
            const lean = yield database_1.conexion();
            //realizo el INSERT de la designatura
            yield lean.query('insert into designatura set ?', [designacion]);
            return res.json('la designatura fue creada');
        });
    }
}
exports.DesignacionController = DesignacionController;
