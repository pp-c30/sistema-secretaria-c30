import { Response, Request } from "express";
import { conexion } from "../database";
import  bcrypt  from "bcryptjs";
import  jwt  from "jsonwebtoken";
import { IUsuario } from "../models/usuario";

export class AutenticacionController 
{
    async registrar(req:Request, res:Response)
    {
        const salt = await bcrypt.genSalt(10) ;
        

        const password_cifrado = await bcrypt.hash(req.body.password,salt);

        const unUsuario:any  = 
        {
        username: req.body.username,
        password: password_cifrado,
        email: req.body.email 
        }

        const db = await conexion()
        
        const resultado:any = await db.query('insert into usuario set ?',[unUsuario]);

        if(resultado)
        {

            const token:string = jwt.sign({_id:resultado.insertId},process.env.TOKEN_SECRET || '12qwaszx');

            res.json(token);
        }
         

    }
    async ingresar(req:Request, res:Response)
    {
        var usuario:any = [];
        const db = await conexion();

        db.query('select * from usuario where username = ?'[req.body.username],(err:any, results:any, fields:any)=>{
            if(err){

                console.log('error in fetching data')

            }
            usuario = results;
        })

        //let usuario:any = await db.query('select * from usuario where username = ?'[req.body.username]);

        //usuario = JSON.stringify(usuario);

        if(!usuario[0])
        {
            res.json('usuario o contraseña incorrecta');
        }
        else
        {
           const correctPassword = await bcrypt.compare(req.body.password, usuario[0].password);

           if(!correctPassword)
           {
               res.json('Contraseña incorrecta!');
           }
           else{
            
            const token:string = jwt.sign({_id:usuario[0].id_usuario},process.env.TOKEN_SECRET || '12qwaszx',{
                expiresIn:60*60*24
            });
            
            res.json(token);

           }
        }
    }
}