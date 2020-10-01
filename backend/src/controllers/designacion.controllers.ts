import { Response,Request } from "express";
import { conexion } from "../database";
import { IDesignacion } from '../models/designacion';

export class DesignacionController
{


    public async actualizarDesignacion(req:Request, res:Response){
        //metodo UPDATE

        let id_designacion = req.params.id;

        let IDesignacion = req.body;

        let con = await conexion();

        await con.query('update designacion set ? where id_designacion= ?', [IDesignacion, id_designacion]);

        return res.json('La asignacion se a actualizado exitosamente');
    }


    public async eliminarDesignacion(req:Request,res:Response)
    {
        
        let id_designacion = req.params.id;

        
        let lean = await conexion();

        await lean.query('delete from designacion where id_designacion = ?',id_designacion);

        return res.json('Se elimino la designacion del docente');
    }
    public async crearDesignacion(req:Request, res:Response)
{
    //recibo los datos enviados
    let designacion:IDesignacion = req.body;

    //conecto con la base de datos
    const lean = await conexion();

    //realizo el INSERT de la designatura
    await lean.query('insert into designatura set ?', [designacion]);

    return res.json('la designatura fue creada');
}
}