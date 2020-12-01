import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IDesignacion } from "src/app/models/Designacion";
@Injectable({
  providedIn: 'root'
})
export class DesignacionService {

  constructor(private http:HttpClient) { 

  }
  getDesignacion()
  {
    return this.http.get<IDesignacion[]>('http://localhost:3000/designacion')
  }


  saveDesignacion(designacion:IDesignacion)
  {
   return this.http.post('http://localhost:3000/designacion',designacion);
  
  }
   updateDesignacion(unaDesignacion:IDesignacion)
   {
     let id:number = unaDesignacion.id_designacion;
     return this.http.put('http://localhost:3000/designacion/'+ id,unaDesignacion);
   }
   deleteDesignacion(id:number)
   {
     return this.http.delete('http://localhost:3000/designacion/'+ id);
   }
}
