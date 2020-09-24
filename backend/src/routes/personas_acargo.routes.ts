import { Router } from "express";
import { Personas_acargoController } from "../controllers/personas_acargo.controllers";

const enrutadorPersonas_acargo = Router();

let personas_acargoController = new Personas_acargoController();

enrutadorPersonas_acargo.route('/personas_acargo/:id').delete(personas_acargoController.eliminarPersonas_acargo);
