import express, {Application} from 'express';

import enrutadorPrincipal from "./routes/index.routes";

import enrutadorLicencias from "./routes/licencias.routes";

import enrutadorDocentes from "./routes/docente.routes";

import enrutadorProvincia from "./routes/provincia.routes";

import enrutadorLocalidad from "./routes/localidad.routes";


export class Server{

    app:Application;

    constructor()
    {
        //app va almacenar todas las funcionalidades de express__ al iniciar el server
        this.app = express();
        this.configuracion();
        this.middleware();
        this.routes();
    }

    configuracion()
    {
        this.app.set('port',process.env.port || 3000);

    }

    routes()
    {
        this.app.use(enrutadorDocentes);
        this.app.use(enrutadorLicencias);
        this.app.use(enrutadorPrincipal);
        this.app.use(enrutadorLocalidad);
        this.app.use(enrutadorProvincia);

    }

    middleware()
    {
        //el servidor espera recibir los datos en formato json
        this.app.use(express.json());
    }

    async listen()
    {
        await this.app.listen(3000);
        console.log('Corre el puerto', this.app.get('port'));
    }
}