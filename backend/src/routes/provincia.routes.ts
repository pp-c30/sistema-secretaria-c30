import { Router } from "express";
import { ProvinciaController } from "../controllers/provincia.controllers";

const enrutadorProvincia = Router();

let provinciaController = new ProvinciaController();

enrutadorProvincia.route('/provincia/:id').delete(provinciaController.eliminarProvincia);
