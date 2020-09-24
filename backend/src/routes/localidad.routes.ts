import { Router } from "express";
import { LocalidadController } from "../controllers/localidad.controllers";

const enrutadorLocalidad = Router();

let localidadController = new LocalidadController();

enrutadorLocalidad.route('/localidad/:id').delete(localidadController.eliminarLocalidad);