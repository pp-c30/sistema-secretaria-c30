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
}
