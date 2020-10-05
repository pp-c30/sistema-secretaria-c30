import { Response,Request } from "express";
import { conexion } from "../database";
import { ILocalidad } from "../models/localidad";

export class LocalidadController
{
    public async eliminarLocalidad(req:Request,res:Response)
    {
        
        let id_localidad = req.params.id;

        
        let lean = await conexion();

        await lean.query('delete from localidad where id_localidad = ?',id_localidad);

        return res.json('Se elimino la localidad del docente');
    }
    public async listaLocalidad(req:Request,res:Response)
    {
        //conecto con la base
        const lean = await conexion();

        let localidad = await lean.query('select * from localidad');

        return res.json(localidad[0]);

    }

    public async crearLocalidad(req:Request,res:Response){

        //recibo datos mediante el metodo post
    
        let localidad:ILocalidad = req.body;
    
        const lean = await conexion();
    
        await lean.query('insert into localidad set ?',[localidad]);
        
        return res.json('La localidad se ingreso correctamente');
    
        }

        public async actualizarLocalidad(req:Request, res:Response){
            //metodo UPDATE

            let id_localidad = req.params.id;

            let localidad = req.body;

            let lean = await conexion();

            await lean.query('update localidad set ? where id_localidad= ?', [localidad, id_localidad]);

            return res.json('La localidad se a actualizado exitosamente');
        }

        public async obtenerLocalidad(req:Request,res:Response)
        {
            //recibo ID para buscar un docente
            let id_localidad = req.params.id;
    
            //nos conectamos a la base de datos
            let lean = await conexion();
    
            //busco un pogo de la tabla  a trves de un ID
            let localidad = await lean.query('select * from localidad where id_localidad = ?' ,[id_localidad]);
    
            //muestro el pago encontrado
            return res.json(localidad[0]);
        }

}