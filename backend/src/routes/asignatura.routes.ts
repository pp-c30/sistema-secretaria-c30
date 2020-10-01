import { Router } from "express";
import { AsignaturaController } from "../controllers/asignatura.controllers";

const enrutadorAsignatura = Router();

let asignaturaController = new AsignaturaController();

enrutadorAsignatura.route('/asignatura/:id').put(asignaturaController.actualizarAsignatura);

enrutadorAsignatura.route('/asignatura/:id').delete(asignaturaController.eliminarAsignatura);
