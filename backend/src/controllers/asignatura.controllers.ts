import { Response,Request } from "express";
import { conexion } from "../database";
import { IAsignatura } from '../models/asignatura';

export class AsignaturaController
{



    public async actualizarAsignatura(req:Request, res:Response){
        //metodo UPDATE

        let id_asigatura = req.params.id;

        let IAsignatura = req.body;

        let con = await conexion();

        await con.query('update asignatura set ? where id_asignatura= ?', [IAsignatura, id_asigatura]);

        return res.json('La asignatura se a actualizado exitosamente');
    }

    public async eliminarAsignatura(req:Request,res:Response)
    {
        
        let id_asignatura = req.params.id;

        
        let lean = await conexion();

        await lean.query('delete from asignatura where id_asignatura = ?',id_asignatura);

        return res.json('Se elimino la asignatura');
    }

public async crearAsignatura(req:Request, res:Response)
{
    //recibo los datos enviados
    let asignatura:IAsignatura = req.body;

    //conecto con la base de datos
    const lean = await conexion();

    //realizo el INSERT de la asignatura
    await lean.query('insert into asignatura set ?', [asignatura]);

    return res.json('la asignatura fue creada');
}
}