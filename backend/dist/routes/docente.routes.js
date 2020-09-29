"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const docente_controllers_1 = require("../controllers/docente.controllers");
const enrutadorDocente = express_1.Router();
let docenteController = new docente_controllers_1.DocenteController();
enrutadorDocente.route('/docente/:id').delete(docenteController.eliminarDocente);
