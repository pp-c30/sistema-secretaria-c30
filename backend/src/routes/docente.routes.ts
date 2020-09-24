import { Router } from "express";
import { DocenteController } from "../controllers/docente.controllers";

const enrutadorDocente = Router();

let docenteController = new DocenteController();

enrutadorDocente.route('/docente/:id').delete(docenteController.eliminarDocente);
