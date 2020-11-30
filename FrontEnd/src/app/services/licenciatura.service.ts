import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ILicencia } from '../models/Licencia';

@Injectable({
  providedIn: 'root'
})
export class LicenciaturaService {

  constructor(private http: HttpClient) { }

  getLicencia()
  {
  return this.http.get<ILicencia[]>('http://localhost:3000/licencias');
  }
  saveLicencia(unaLicencia: ILicencia)
  {
      return this.http.post('http://localhost:3000/licencias', unaLicencia);
  }
  // tslint:disable-next-line: variable-name
  updateLicencia(unaLicencia: ILicencia)
  {
    const id: number = unaLicencia.id_licencia;

    return this.http.put('http://localhost:3000/licencias/' + id, unaLicencia);
  }
  deleteLicencia(id: number)
    {
      return this.http.delete('http://localhost:3000/licencias/' + id);
    }
}
