import { Response,Request } from "express";

import { conexion } from "../database";

import { IDocente} from "../models/docente";

export class DocenteController

{
    public async listaDocente(req:Request,res:Response)
    {
        //conecto con la base
        const con = await conexion();

        let docente = await con.query('select * from docente');

        return res.json(docente[0]);

    }

    public async crearDocente(req:Request,res:Response){

        //recibo datos mediante el metodo post
    
        let docente:IDocente = req.body;
    
        const con = await conexion();
    
        await con.query('insert into docente set ?',[docente]);
        
        return res.json('El docente se ingreso correctamente');
    
        }




    public async eliminarDocente(req:Request,res:Response)
    {
        //recibimos el parametro ID a traves del metodo DELETE
        
        let id_docente = req.params.id;

        let con = await conexion();

        await con.query('delete from docente where id_docente = ?',id_docente);

        return res.json('Se elimino el docente');
    }
}