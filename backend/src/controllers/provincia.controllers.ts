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

    
        public async listaProvincia(req:Request,res:Response)
        {
            //conecto con la base
            const lean = await conexion();
    
            let provincia = await lean.query('select * from provincia');
    
            return res.json(provincia[0]);
    
        }
    
        public async crearProvincia(req:Request,res:Response){
    
            //recibo datos mediante el metodo post
        
            let provincia:IProvincia = req.body;
        
            const lean = await conexion();
        
            await lean.query('insert into provincia set ?',[provincia]);
            
            return res.json('La provincia se ingreso correctamente');
        
            }
    
            public async actualizarProvincia(req:Request, res:Response){
                //metodo UPDATE
    
                let id_provincia = req.params.id;
    
                let provincia = req.body;
    
                let lean = await conexion();
    
                await lean.query('update provincia set ? where id_provincia= ?', [provincia, id_provincia]);
    
                return res.json('La provincia se a actualizado exitosamente');
            }
    
            public async obtenerProvincia(req:Request,res:Response)
            {
                //recibo ID para buscar una provincia
                let id_provincia = req.params.id;
        
                //nos conectamos a la base de datos
                let lean = await conexion();
        
                //busco un pogo de la tabla  a trves de un ID
                let provincia = await lean.query('select * from provincia where id_provincia = ?' ,[id_provincia]);
        
                //muestro el pago encontrado
                return res.json(provincia[0]);
            }
    
    }