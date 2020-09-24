import { Response,Request } from "express";
import { conexion } from "../database";
import { IDocente} from "../models/docente";

export class DocenteController
{
    public async eliminarDocente(req:Request,res:Response)
    {
        
        let id_docente = req.params.id;

        
        let lean = await conexion();

        await lean.query('delete from docente where id_docente = ?',id_docente);

        return res.json('Se elimino el docente');
    }
}