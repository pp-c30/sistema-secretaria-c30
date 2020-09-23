import { Router } from "express";
import { mensaje_bienvenida } from "../controllers/index.controllers";

//aca voy a definir las routas

let enrutadorPrincipal = Router();

//defino la ruta

enrutadorPrincipal.route('/').get(mensaje_bienvenida);

export default enrutadorPrincipal;