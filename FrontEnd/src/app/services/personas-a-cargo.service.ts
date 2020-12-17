import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { IPersonas_acargo } from '../models/personas-a-cargo';



@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line: class-name
export class Personas_acargoService {

  constructor(private http: HttpClient) {

  }


  getPersonas_acargo()
  {
  return this.http.get<IPersonas_acargo[]>('http://localhost:3000/personas_acargo');
  }

  // tslint:disable-next-line: variable-name
  savePersonas_acargo(unaPersonas_acargo: IPersonas_acargo)
{
    unaPersonas_acargo.fecha_nacimiento = unaPersonas_acargo.fecha_nacimiento.year +'-'+ unaPersonas_acargo.fecha_nacimiento.month +'-'+ unaPersonas_acargo.fecha_nacimiento.day;

    return this.http.post('http://localhost:3000/personas_acargo', unaPersonas_acargo);
}
// tslint:disable-next-line: variable-name
updatePersonas_acargo(unaPersonas_acargo: IPersonas_acargo)
{
  const id: number = unaPersonas_acargo.id_pc;
  unaPersonas_acargo.fecha_nacimiento = unaPersonas_acargo.fecha_nacimiento.year +'-'+ unaPersonas_acargo.fecha_nacimiento.month +'-'+ unaPersonas_acargo.fecha_nacimiento.day;
  return this.http.put('http://localhost:3000/personas_acargo/' + id, unaPersonas_acargo);
}
deletePersonas_acargo(id: number)
  {
    return this.http.delete('http://localhost:3000/personas_acargo/' + id);
  }
}
