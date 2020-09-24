import { Router } from "express";
import { DesignacionController } from "../controllers/designacion.controllers";

const enrutadorDesignacion = Router();

let designacionController = new DesignacionController();

enrutadorDesignacion.route('/designacion/:id').delete(designacionController.eliminarDesignacion);
