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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const licencias_routes_1 = __importDefault(require("./routes/licencias.routes"));
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
        this.app.use(licencias_routes_1.default);
        this.app.use(index_routes_1.default);
    }
    middleware() {
        //el servidor espera recibir los datos en formato json
        this.app.use(express_1.default.json());
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(3000);
            console.log('Corre el puerto', this.app.get('port'));
        });
    }
}
exports.Server = Server;
