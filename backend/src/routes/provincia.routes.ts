import { Router } from "express";
import { ProvinciaController } from "../controllers/provincia.controllers";

const enrutadorProvincia = Router();

let provinciaController = new ProvinciaController();

enrutadorProvincia.route('/provincia/:id').delete(provinciaController.eliminarProvincia);

enrutadorProvincia.route('/provincia').get(provinciaController.listaProvincia);

enrutadorProvincia.route('/provincia').post(provinciaController.crearProvincia);

enrutadorProvincia.route('/provincia/:id').put(provinciaController.actualizarProvincia);

enrutadorProvincia.route('/provincia/:id').get(provinciaController.obtenerProvincia);

export default enrutadorProvincia;