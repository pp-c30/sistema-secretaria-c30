import { Router } from "express";
import { SoporteController } from '../controllers/soporte.controllers';

const enrutadorSoporte = Router();

const soporteController = new SoporteController();

enrutadorSoporte.route('/soporte').post(SoporteController.Soporte);

export default enrutadorSoporte;