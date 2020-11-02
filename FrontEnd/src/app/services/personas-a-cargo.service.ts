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
  return this.http.get<IPersonas_acargo[]>('http://localhost:3000/personas-a-cargo');
  }
}
