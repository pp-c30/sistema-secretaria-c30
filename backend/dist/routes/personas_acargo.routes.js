"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personas_acargo_controllers_1 = require("../controllers/personas_acargo.controllers");
const enrutadorPersonas_acargo = express_1.Router();
let personas_acargoController = new personas_acargo_controllers_1.Personas_acargoController();
enrutadorPersonas_acargo.route('/personas_acargo/:id').delete(personas_acargoController.eliminarPersonas_acargo);
