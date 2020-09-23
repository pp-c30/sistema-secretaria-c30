import express, {Application} from 'express';
import enrutadorPrincipal from "./routes/index.routes";

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
    }

    middleware()
    {
        //el servidor espera recibir los datos en formato json
        this.app.use(express.json());
    }

    async listen()
    {
        await this.app.listen(3000);
        console.log('Corriendo servidor en el puerto', this.app.get('port'));
    }
}