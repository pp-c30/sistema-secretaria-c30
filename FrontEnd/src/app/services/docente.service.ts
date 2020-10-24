import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { IDocente } from '../models/Docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http:HttpClient) {

  }
  

  getDocente()
  {
  return this.http.get<IDocente[]>('http://localhost:3000/docente');
  }
}
