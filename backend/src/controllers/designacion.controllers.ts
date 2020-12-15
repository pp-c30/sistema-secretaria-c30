import { Response,Request } from "express";

import { conexion } from "../database";

import { IDesignacion } from '../models/designacion';


export class DesignacionController
{
    public async listaDesignacion(req:Request,res:Response)
    {
        //conecto con la base
        const con = await conexion();
        //fijarse lo de la fecha y hora con delfor 
        let designacion = await con.query('select *, DATE_FORMAT(fecha_final, fecha_inicio, "%d/%m/%Y") as fecha_inicio, as fecha_final from designacion');
        return res.json(designacion[0]);

    }

    public async crearDesignacion(req:Request,res:Response){

        //recibo datos mediante el metodo post
    
        let designacion:IDesignacion = req.body;
    
        const con = await conexion();
    
        await con.query('insert into designacion set ?',[designacion]);
        
        return res.json('La designacion se ingreso correctamente');
    
        }

        public async eliminarDesignacion(req:Request,res:Response)
        {
            
            let id_designacion = req.params.id;
    
            
            let lean = await conexion();
    
            await lean.query('delete from designacion where id_designacion = ?',id_designacion);
    
            return res.json('Se elimino la designacion del docente');
        }

        public async actualizarDesignacion(req:Request, res:Response){
        //metodo UPDATE

        let id_designacion = req.params.id;

        let designacion = req.body;

        let con = await conexion();

        await con.query('update designacion set ? where id_designacion = ?', [designacion, id_designacion]);

        return res.json('La asignacion se a actualizado exitosamente');
    }

    public async obtenerDesignacion(req:Request,res:Response)
    {
        //recibo ID para buscar un docente
        let id_designacion = req.params.id;

        //nos conectamos a la base de datos
        let con = await conexion();

        //busco una designacion de la tabla  a traves de un ID
        let designacion = await con.query('select * from designacion where id_designacion = ?' ,[id_designacion]);

        //muestro el pago encontrado
        return res.json(designacion[0]);
    }



}