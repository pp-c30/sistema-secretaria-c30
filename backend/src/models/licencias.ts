export interface ILicencias 
{
    id_licencia?: number;

    id_docente: number;
    
    licencia_desde: Date;

    id_asignatura: number;

    id_docente_suplente: number;

    n_resolucion:number;

    fecha_alta_suplente: Date;

    fecha_baja_suplente: Date;

    estado_licencia: string;
}