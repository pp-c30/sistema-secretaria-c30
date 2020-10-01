"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const licencias_controllers_1 = require("../controllers/licencias.controllers");
const enrutadorLicencias = express_1.Router();
let licenciasControllers = new licencias_controllers_1.LicenciasControllers();
//creacion de rutas
<<<<<<< HEAD
enrutadorLicencias.route('/lecencias/:id').delete(licenciasControllers.eliminarLicencias);
exports.default = enrutadorPagos;
=======
enrutadorLicencias.route('/licencias').get(licenciasControllers.listaLicencias);
enrutadorLicencias.route('/licencias').post(licenciasControllers.crearLicencias);
enrutadorLicencias.route('/licencias/:id').delete(licenciasControllers.eliminarLicencias);
exports.default = enrutadorLicencias;
>>>>>>> 140c847438a46502a7769137a1bde14c53bebec9
