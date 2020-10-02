"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const licencias_controllers_1 = require("../controllers/licencias.controllers");
const enrutadorLicencias = express_1.Router();
let licenciasControllers = new licencias_controllers_1.LicenciasControllers();
//creacion de rutas
enrutadorLicencias.route('/licencias').get(licenciasControllers.listaLicencias);
enrutadorLicencias.route('/licencias').post(licenciasControllers.crearLicencias);
enrutadorLicencias.route('/licencias/:id').delete(licenciasControllers.eliminarLicencias);
enrutadorLicencias.route('/licencias/:id').put(licenciasControllers.actualizarLicencia);
enrutadorLicencias.route('/licencias/:id').get(licenciasControllers.obtenerLicencia);
exports.default = enrutadorLicencias;
