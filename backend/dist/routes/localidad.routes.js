"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const localidad_controllers_1 = require("../controllers/localidad.controllers");
const enrutadorLocalidad = express_1.Router();
let localidadController = new localidad_controllers_1.LocalidadController();
enrutadorLocalidad.route('/localidad/:id').delete(localidadController.eliminarLocalidad);
enrutadorLocalidad.route('/localidad').get(localidadController.listaLocalidad);
enrutadorLocalidad.route('/localidad').post(localidadController.crearLocalidad);
enrutadorLocalidad.route('/localidad/:id').put(localidadController.actualizarLocalidad);
enrutadorLocalidad.route('/localidad/:id').get(localidadController.obtenerLocalidad);
exports.default = enrutadorLocalidad;
