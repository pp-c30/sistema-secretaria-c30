import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IProvincias } from "src/app/models/Provincias";
@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  constructor(private http:HttpClient) { }
  getProvincia()
  {
    return this.http.get<IProvincias[]>('http://localhost:3000/provincia'); 
  }
  saveProvincia(provincia:IProvincias)
  {
   return this.http.post('http://localhost:3000/provincia',provincia);
  
  }
   updateProvincia(unaProvincia:IProvincias)
   {
     let id:number = unaProvincia.id_provincia;
     return this.http.put('http://localhost:3000/provincia/'+ id,unaProvincia);
   }
   deleteProvincia(id:number)
   {
     return this.http.delete('http://localhost:3000/provincia/'+ id);
   }
}
