import { Response,Request } from "express";

import { conexion } from "../database";

import { IDocente } from '../models/docente';

export class DocenteController

{
    public async listaDocente(req:Request,res:Response)
    {
        //conecto con la base
        const con = await conexion();

        let docente = await con.query('select *,date_format(fecha_nacimiento, "%d/%m/%Y") as fn_formateada,date_format(fecha_ingreso_adm, "%d/%m/%Y") as fia_formateada,date_format(fecha_n_conyuge, "%d/%m/%Y") as fnc_formateada from docente');

        return res.json(docente[0]);

    }

    public async crearDocente(req:Request,res:Response){

        //recibo datos mediante el metodo post
    
        let docente:IDocente = req.body;
    
        const con = await conexion();
    
        await con.query('insert into docente set ?',[docente]);
        
        res.json('El docente se ingreso correctamente');
    
        }
        public async eliminarDocente(req:Request,res:Response)
        {
            //recibimos el parametro ID a traves del metodo DELETE
            
            let id_docente = req.params.id;
    
            let con = await conexion();
    
            await con.query('delete from docente where id_docente = ?',id_docente);
    
            return res.json('Se elimino el docente');
        }

        public async actualizarDocente(req:Request, res:Response){
            //metodo UPDATE

            let id_docente = req.params.id;

            let docente = req.body;

            let con = await conexion();

            await con.query('update docente set ? where id_docente= ?', [docente, id_docente]);

            return res.json('El docente se a actualizado exitosamente');
        }

        public async obtenerDocente(req:Request,res:Response)
        {
            //recibo ID para buscar un docente
            let id_docente = req.params.id;
    
            //nos conectamos a la base de datos
            let con = await conexion();
    
            //busco un pogo de la tabla  a trves de un ID
            let docente = await con.query('select * from docente where id_docente = ?' ,[id_docente]);
    
            //muestro el docente encontrado
            return res.json(docente[0]);
        }

}