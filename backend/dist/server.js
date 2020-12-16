"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const licencias_routes_1 = __importDefault(require("./routes/licencias.routes"));
const docente_routes_1 = __importDefault(require("./routes/docente.routes"));
const designacion_routes_1 = __importDefault(require("./routes/designacion.routes"));
const provincia_routes_1 = __importDefault(require("./routes/provincia.routes"));
const localidad_routes_1 = __importDefault(require("./routes/localidad.routes"));
const personas_acargo_routes_1 = __importDefault(require("./routes/personas_acargo.routes"));
const asignatura_routes_1 = __importDefault(require("./routes/asignatura.routes"));
const autenticacion_routes_1 = __importDefault(require("./routes/autenticacion.routes"));
const soporte_routes_1 = __importDefault(require("./routes/soporte.routes"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        //app va almacenar todas las funcionalidades de express__ al iniciar el server
        this.app = express_1.default();
        this.configuracion();
        this.middleware();
        this.routes();
    }
    configuracion() {
        this.app.set('port', process.env.port || 3000);
    }
    routes() {
        this.app.use(docente_routes_1.default);
        this.app.use(designacion_routes_1.default);
        this.app.use(licencias_routes_1.default);
        this.app.use(index_routes_1.default);
        this.app.use(localidad_routes_1.default);
        this.app.use(provincia_routes_1.default);
        this.app.use(personas_acargo_routes_1.default);
        this.app.use(asignatura_routes_1.default);
        this.app.use(autenticacion_routes_1.default);
        this.app.use(soporte_routes_1.default);
    }
    middleware() {
        //el servidor espera recibir los datos en formato json
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(3000);
            console.log('Corre el puerto', this.app.get('port'));
        });
    }
}
exports.Server = Server;
