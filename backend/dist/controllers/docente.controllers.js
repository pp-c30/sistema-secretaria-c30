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
    eliminarDocente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_docente = req.params.id;
            let lean = yield database_1.conexion();
            yield lean.query('delete from docente where id_docente = ?', id_docente);
            return res.json('Se elimino el docente');
        });
    }
}
exports.DocenteController = DocenteController;
