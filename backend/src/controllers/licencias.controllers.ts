import { Response,Request, response } from "express";

import { conexion } from "../database";

import { ILicencias } from "../models/licencias";

export class LicenciasControllers
{
public async eliminarLicencias(req:Request,res:Response)
    {
        //recibimos el parametro ID a traves del metodo DELETE
        let id_licencia = req.params.id;

        let con = await conexion();

        await con.query('delete from licencia where id_licencia = ?',id_licencia);

        return res.json('La licencia se ha eliminado exitosamente');
    }
}