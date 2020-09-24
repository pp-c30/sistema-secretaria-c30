import { Response,Request } from "express";
import { conexion } from "../database";
import { IProvincia } from "../models/provincia";

export class ProvinciaController
{
    public async eliminarProvincia(req:Request,res:Response)
    {
        
        let id_provincia = req.params.id;

        
        let lean = await conexion();

        await lean.query('delete from provincia where id_provincia = ?',id_provincia);

        return res.json('Se elimino la provincia');
    }
}