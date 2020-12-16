import { Response,Request, response } from "express";

import { conexion } from "../database";

import { ILicencias } from "../models/licencias";

export class LicenciasControllers
{
    public async listaLicencias(req:Request,res:Response)
    {
        //conecto con la base
        const con = await conexion();

        let licencias = await con.query('select *,date_format(licencia_desde,"%d/%m/%Y") as l_formateada, date_format(fecha_alta_suplente, "%d/%m/%Y") as fas_formateada, date_format(fecha_baja_suplente, "%d/%m/%Y") as fbs_formateada from licencias ')
        return res.json(licencias[0]);

    }

    public async crearLicencias(req:Request,res:Response){

        //recibo datos mediante el metodo post
        
        
        

        let unaLicencias ={
            id_docente: req.body.id_docente,
    
            licencia_desde: req.body.licencia_desde = req.body.licencia_desde.year + "-" + req.body.licencia_desde.month + "-" + req.body.licencia_desde.day,

            id_asignatura: req.body.id_asignatura,

            id_docente_suplente: req.body.id_docente_suplente,

            n_resolucion:req.body.n_resolucion,

            fecha_alta_suplente: req.body.fecha_alta_suplente = req.body.fecha_alta_suplente.year + "-" + req.body.fecha_alta_suplente.month + "-" + req.body.fecha_alta_suplente.day,

            fecha_baja_suplente: req.body.fecha_baja_suplente = req.body.fecha_baja_suplente.year + "-" + req.body.fecha_baja_suplente.month + "-" + req.body.fecha_baja_suplente.day,

            estado_licencia: req.body.estado_licencia,

        }
    
        const con = await conexion();
    
        await con.query('insert into licencias set ?',[unaLicencias]);
        
        return res.json('La licencia se inserto correctamente');
    
        }


public async eliminarLicencias(req:Request,res:Response)
    {
        //recibimos el parametro ID a traves del metodo DELETE
        let id_licencia = req.params.id;

        let con = await conexion();

        await con.query('delete from licencias where id_licencia = ?',id_licencia);

        return res.json('La licencia se ha eliminado exitosamente');
    }
    public async actualizarLicencia(req:Request,res:Response)
    {
         //recibo el parametro ID de la licencia que voy a actualizar
        let id_licencia = req.params.id;

        //recibo un JSON con los nuevos datos actualizados
        let licencia = req.body;

        //conecto con la base de datos
        let con = await conexion();

        await con.query('update licencias set ? where id_licencia = ? ', [licencia,id_licencia]);

        return res.json('la licencia fue actualizada');
    }

    public async obtenerLicencia(req:Request,res:Response)
    {
        //recibo ID para buscar un docente
        let id_licencia = req.params.id;

        //nos conectamos a la base de datos
        let con = await conexion();

        //busco un pogo de la tabla  a trves de un ID
        let licencia = await con.query('select * from pago where id_licencia = ?' ,[id_licencia]);

        //muestro el pago encontrado
        return res.json(licencia[0]);
    }
}