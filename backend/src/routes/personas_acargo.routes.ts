import { Router } from "express";
import { Personas_acargoController } from "../controllers/personas_acargo.controllers";

const enrutadorPersonas_acargo = Router();

let personas_acargoController = new Personas_acargoController();

enrutadorPersonas_acargo.route('/personas_acargo/:id').put(personas_acargoController.actualizarPersonas_acargo);

enrutadorPersonas_acargo.route('/personas_acargo/:id').delete(personas_acargoController.eliminarPersonas_acargo);

enrutadorPersonas_acargo.route('/personas_acargo').post(personas_acargoController.crearPersonas_acargo);

enrutadorPersonas_acargo.route('/personas_acargo').get(personas_acargoController.listaPersonas_acargo);

enrutadorPersonas_acargo.route('/personas_acargo/:id').get(personas_acargoController.obtenerPersonas_acargo);