export interface IDocente{
    id_docente?:number;

    nombre:string;

    apellido:string;

    fecha_nacimiento:Date;

    legajo:string;

    legajo_recibo:string;

    dni:number;

    cuit:number;

    telefono:string;

    correo:string;

    domicilio:string;
    
    nacionalidad:string;

    sexo:string;

    lugar_de_nacimiento:string;

    fecha_ingreso_adm:Date;

    estado_civil:string;

    conyuge?:string;

    cuil_conyuge?:number;

    fecha_n_conyuge?:Date;

    familiar_acargo?:number;

}