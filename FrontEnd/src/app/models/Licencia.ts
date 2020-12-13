export interface ILicencia {

    id_licencia?: number;

    id_docente: Date;

    licencia_desde: number;

    id_asignatura: string;

    id_docente_suplente: number;

    n_resolucion: string;

    fecha_alta_suplente: number;

    fecha_baja_suplente: number;

    estado_licencia: string;

}