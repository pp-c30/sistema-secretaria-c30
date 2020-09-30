import { Router } from "express";
import { DocenteController } from "../controllers/docente.controllers";

const enrutadorDocente = Router();

let docenteController = new DocenteController();

enrutadorDocente.route('/docente').get(docenteController.listaDocente);

enrutadorDocente.route('/docente').post(docenteController.crearDocente);

enrutadorDocente.route('/docente/:id').delete(docenteController.eliminarDocente);

export default enrutadorDocente;
