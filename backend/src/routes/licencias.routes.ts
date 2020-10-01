import { Router } from "express";

import { LicenciasControllers } from "../controllers/licencias.controllers";

const enrutadorLicencias = Router();

let licenciasControllers = new LicenciasControllers();

//creacion de rutas

enrutadorLicencias.route('/licencias').get(licenciasControllers.listaLicencias);

enrutadorLicencias.route('/licencias').post(licenciasControllers.crearLicencias);

enrutadorLicencias.route('/licencias/:id').delete(licenciasControllers.eliminarLicencias);

enrutadorLicencias.route('/licencias/:id').put(licenciasControllers.actualizarLicencia)

export default enrutadorLicencias;