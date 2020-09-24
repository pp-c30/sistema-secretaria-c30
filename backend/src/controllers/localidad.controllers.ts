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
}