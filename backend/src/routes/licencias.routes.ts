import { Router } from "express";

import { LicenciasControllers } from "../controllers/licencias.controllers";

const enrutadorLicencias = Router();

let licenciasControllers = new LicenciasControllers();

//creacion de rutas

enrutadorLicencias.route('/lecencias/:id').delete(licenciasControllers.eliminarLicencias);

export default enrutadorPagos;