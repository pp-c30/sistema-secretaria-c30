"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const designacion_controllers_1 = require("../controllers/designacion.controllers");
const enrutadorDesignacion = express_1.Router();
let designacionController = new designacion_controllers_1.DesignacionController();
enrutadorDesignacion.route('/designacion/:id').put(designacionController.actualizarDesignacion);
enrutadorDesignacion.route('/designacion/:id').delete(designacionController.eliminarDesignacion);
enrutadorDesignacion.route('/designacion').post(designacionController.crearDesignacion);
