import { Response,Request } from "express";
import { conexion } from "../database";
import { IAsignatura} from "../models/asignatura";

export class AsignaturaController
{
    public async eliminarAsignatura(req:Request,res:Response)
    {
        
        let id_asignatura = req.params.id;

        
        let lean = await conexion();

        await lean.query('delete from asignatura where id_asignatura = ?',id_asignatura);

        return res.json('Se elimino la asignatura');
    }
}