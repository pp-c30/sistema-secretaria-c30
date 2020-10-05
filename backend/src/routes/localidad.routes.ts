import { Router } from "express";
import { LocalidadController } from "../controllers/localidad.controllers";

const enrutadorLocalidad = Router();

let localidadController = new LocalidadController();

enrutadorLocalidad.route('/localidad/:id').delete(localidadController.eliminarLocalidad);

enrutadorLocalidad.route('/localidad').get(localidadController.listaLocalidad);

enrutadorLocalidad.route('/localidad').post(localidadController.crearLocalidad);

enrutadorLocalidad.route('/localidad/:id').put(localidadController.actualizarLocalidad);

enrutadorLocalidad.route('/localidad/:id').get(localidadController.obtenerLocalidad);

export default enrutadorLocalidad;