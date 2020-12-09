import { Response,Request } from "express";
import { conexion } from "../database";
import { IPersonas_acargo } from '../models/personas_acargo';

export class Personas_acargoController
{



    public async crearPersonas_acargo(req:Request, res:Response)
    {
        req.body.fecha_nacimiento = req.body.fecha_nacimiento.year + "-" + req.body.fecha_nacimiento.month + "-" + req.body.fecha_nacimiento.day; 

        //recibo los datos enviados
        let personas_acargo:IPersonas_acargo = req.body;
    
        //conecto con la base de datos
        const lean = await conexion();
    
        //realizo el INSERT de la persona a cargoS
        await lean.query('insert into personas_acargo set ?', [personas_acargo]);
    
        return res.json('El cargo fue creado');
    }

    public async actualizarPersonas_acargo(req:Request, res:Response){
        //metodo UPDATE

        let id_pc = req.params.id;

        let IPersonas_acargo = req.body;

        let con = await conexion();

        await con.query('update personas_acargo set ? where id_docente= ?', [IPersonas_acargo, id_pc]);

        return res.json('Las personas a cargo se actualizo exitosamente');
    }

    public async eliminarPersonas_acargo(req:Request,res:Response)
    {
        
        let id_pc = req.params.id;

        
        let lean = await conexion();

        await lean.query('delete from personas_acargo where id_pc = ?',id_pc);

        return res.json('Se elimino la persona a cargo');
    }
    public async listaPersonas_acargo(req:Request,res:Response)
    {
        //conecto con la base
        const lean = await conexion();

        let personas_acargo = await lean.query('select *, DATE_FORMAT(fecha_nacimiento, "%d/%m/%Y") as fecha_nacimiento, DATE_FORMAT(fecha_nacimiento, "%d") as day,DATE_FORMAT(fecha_nacimiento, "%m") as month, DATE_FORMAT(fecha_nacimiento, "%Y") as year from personas_acargo');

        res.json(personas_acargo[0]);

    }
    public async obtenerPersonas_acargo(req:Request,res:Response)
    {
        //recibo ID para buscar una persona a cargo
        let id_pc = req.params.id;

        //nos conectamos a la base de datos
        let lean = await conexion();

        //busco un pogo de la tabla  a traves de un ID
        let personas_acargo = await lean.query('select * from personas_acargo where id_pc = ?' ,[id_pc]);

        return res.json(personas_acargo[0]);
    }

}