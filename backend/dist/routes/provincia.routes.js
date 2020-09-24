"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const provincia_controllers_1 = require("../controllers/provincia.controllers");
const enrutadorProvincia = express_1.Router();
let provinciaController = new provincia_controllers_1.ProvinciaController();
enrutadorProvincia.route('/provincia/:id').delete(provinciaController.eliminarProvincia);
