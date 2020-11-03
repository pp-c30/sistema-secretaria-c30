import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { IAsignatura } from '../models/Asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(private http: HttpClient) {

  }


  getAsignatura()
  {
  return this.http.get<IAsignatura[]>('http://localhost:3000/asignatura');
  }
  saveAsignatura(unaAsignatura: IAsignatura)
  {
      return this.http.post('http://localhost:3000/asignatura', unaAsignatura);
  }
  // tslint:disable-next-line: variable-name
  updateAsignatura(unaAsignatura: IAsignatura)
  {
    const id: number = unaAsignatura.id_asignatura;
    return this.http.put('http://localhost:3000/asignatura', unaAsignatura);
  }
  deleteAsignatura(id: number)
    {
      return this.http.delete('http://localhost:3000/asignatura');
    }
  }
