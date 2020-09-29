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
exports.Personas_acargoController = void 0;
const database_1 = require("../database");
class Personas_acargoController {
    eliminarPersonas_acargo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_pc = req.params.id;
            let lean = yield database_1.conexion();
            yield lean.query('delete from personas_acargo where id_pc = ?', id_pc);
            return res.json('Se elimino la persona a cargo');
        });
    }
}
exports.Personas_acargoController = Personas_acargoController;
