"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controllers_1 = require("../controllers/index.controllers");
//aca voy a definir las routas
let enrutadorPrincipal = express_1.Router();
//defino la ruta
enrutadorPrincipal.route('/').get(index_controllers_1.mensaje_bienvenida);
exports.default = enrutadorPrincipal;
