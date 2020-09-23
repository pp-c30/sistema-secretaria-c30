import { Response,Request } from "express";

export function mensaje_bienvenida(req:Request,res:Response)
{

    return res.json('Bienvenido a nuestra rest api');

}