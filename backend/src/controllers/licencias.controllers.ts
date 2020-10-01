import { Response,Request, response } from "express";

import { conexion } from "../database";

import { ILicencias } from "../models/licencias";

export class LicenciasControllers
{
    public async listaLicencias(req:Request,res:Response)
    {
        //conecto con la base
        const con = await conexion();

        let licencias = await con.query('select * from licencias');

        return res.json(licencias[0]);

    }

    public async crearLicencias(req:Request,res:Response){

        //recibo datos mediante el metodo post
    
        let licencias:ILicencias = req.body;
    
        const con = await conexion();
    
        await con.query('insert into licencias set ?',[licencias]);
        
        return res.json('La licencia se inserto correctamente');
    
        }


public async eliminarLicencias(req:Request,res:Response)
    {
        //recibimos el parametro ID a traves del metodo DELETE
        let id_licencia = req.params.id;

        let con = await conexion();

        await con.query('delete from licencia where id_licencia = ?',id_licencia);

        return res.json('La licencia se ha eliminado exitosamente');
    }
    public async actualizarLicencia(req:Request,res:Response)
    {
         //recibo el parametro ID de la licencia que voy a actualizar
        let id_licencia = req.params.id;

        //recibo un JSON con los nuevos datos actualizados
        let licencia = req.body;

        //conecto con la base de datos
        let lean = await conexion();

        await lean.query('update licencia set ? where id_licencia = ? ', [licencia,id_licencia]);

        return res.json('la licencia fue actualizada');
    }
}