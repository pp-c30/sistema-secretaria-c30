"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const soporte_controllers_1 = require("../controllers/soporte.controllers");
const enrutadorSoporte = express_1.Router();
const soporteController = new soporte_controllers_1.SoporteController();
enrutadorSoporte.route('/soporte').post(soporte_controllers_1.SoporteController.Soporte);
exports.default = enrutadorSoporte;
