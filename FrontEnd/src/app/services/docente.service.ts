import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { IDocente } from '../models/Docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http: HttpClient) {

  }

//recibo todos los docentes con Idocentes
  getDocente()
  {
  return this.http.get<IDocente[]>('http://localhost:3000/docente');
  }
  //recibe un docente desde guardar docente de fromdocente
  saveDocente(unDocente: IDocente)
  {
   return this.http.post('http://localhost:3000/docente', unDocente);
  }
}
