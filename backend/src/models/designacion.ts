export interface IDesignacion

{
    id_designacion:number;
    id_docente?:number;
    id_asignatura?:string;
    fecha_designacion:Date;
    situacion_revista:string;
    en_remplazo:string;
    codigo_articulo:number;
    fecha_inicio:Date;
    fecha_final:Date;
    vuelta:string;
    listado:number;
    titulo:number;
    estado:string;

}