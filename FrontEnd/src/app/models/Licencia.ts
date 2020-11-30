export interface ILicencia {

    id_licencia?: number;

    id_docente: string;

    licencia_desde: string;

    id_asignatura: string;

    id_docente_suplente: number;

    n_resolucion: string;

    fecha_alta_suplente: string;

    fecha_baja_suplente: number;

    estado_licencia: string;

}