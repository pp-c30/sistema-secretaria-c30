import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { ILocalidad } from "../models/Localidad";

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {

  constructor(private http:HttpClient) { 

   }

   getLocalidad()
   {
    return this.http.get<ILocalidad[]>('http://localhost:3000/localidad');
   }
}
