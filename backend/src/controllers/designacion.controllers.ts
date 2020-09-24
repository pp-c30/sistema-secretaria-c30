import { Response,Request } from "express";
import { conexion } from "../database";
import { IDesignacion } from "../models/designacion";

export class DesignacionController
{
    public async eliminarDesignacion(req:Request,res:Response)
    {
        
        let id_designacion = req.params.id;

        
        let lean = await conexion();

        await lean.query('delete from designacion where id_designacion = ?',id_designacion);

        return res.json('Se elimino la designacion del docente');
    }
}