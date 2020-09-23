import { createPool } from "mysql2/promise";
export async function conexion()
{
    const conect = await createPool ({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'secretaria'
    });
    return conect;
}