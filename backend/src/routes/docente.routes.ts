import { Router } from "express";

import { DocenteController } from "../controllers/docente.controllers";

import { validarToken } from "../libs/verificarToken";

const enrutadorDocente = Router();

let docenteController = new DocenteController();

enrutadorDocente.route('/docente').get(docenteController.listaDocente);

enrutadorDocente.route('/docente').post(docenteController.crearDocente);

enrutadorDocente.route('/docente/:id').delete(docenteController.eliminarDocente);

enrutadorDocente.route('/docente/:id').put(docenteController.actualizarDocente);

enrutadorDocente.route('/docente/:id').get(docenteController.obtenerDocente);

export default enrutadorDocente;
