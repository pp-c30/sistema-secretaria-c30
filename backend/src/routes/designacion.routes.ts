import { Router } from "express";

import { DesignacionController } from "../controllers/designacion.controllers";

const enrutadorDesignacion = Router();

let designacionController = new DesignacionController();

enrutadorDesignacion.route('/designacion').get(designacionController.listaDesignacion);

enrutadorDesignacion.route('/designacion').post(designacionController.crearDesignacion);

enrutadorDesignacion.route('/designacion/:id').delete(designacionController.eliminarDesignacion);

enrutadorDesignacion.route('/designacion/:id').put(designacionController.actualizarDesignacion);

enrutadorDesignacion.route('/designacion/:id').get(designacionController.crearDesignacion);

export default enrutadorDesignacion;