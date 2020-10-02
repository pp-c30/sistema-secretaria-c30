"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asignatura_controllers_1 = require("../controllers/asignatura.controllers");
const enrutadorAsignatura = express_1.Router();
let asignaturaController = new asignatura_controllers_1.AsignaturaController();
enrutadorAsignatura.route('/asignatura/:id').put(asignaturaController.actualizarAsignatura);
enrutadorAsignatura.route('/asignatura/:id').delete(asignaturaController.eliminarAsignatura);
enrutadorAsignatura.route('/asignatura').post(asignaturaController.crearAsignatura);
