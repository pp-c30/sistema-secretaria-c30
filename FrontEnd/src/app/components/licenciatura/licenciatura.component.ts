import { Component, OnInit } from '@angular/core';

import { LicenciaturaService } from '../../services/licenciatura.service';

import { ILicencia } from 'src/app/models/Licencia';

import { FormBuilder, FormGroup, Form } from '@angular/forms';

@Component({
  selector: 'app-licenciatura',
  templateUrl: './licenciatura.component.html',
  styleUrls: ['./licenciatura.component.css']
})
export class LicenciaturaComponent implements OnInit {

  ListarLicencia: ILicencia[] = [];

  formLicencia: FormGroup ;

  buscarLicencia:any;

  p:number = 1;

  constructor(private licenciaServ: LicenciaturaService, private fb: FormBuilder) 
  { 
    this.formLicencia = this.fb.group
    ({
      id_licencia:[''],

      id_docente: [''],

      licencia_desde: [''],

      id_asignatura:[''],

      id_docente_suplente: [''],

      n_resolucion: [''],

      fecha_alta_suplente:[''],

      fecha_baja_suplente: [''],

      estado_licencia: ['']
    });
  }

  ngOnInit(): void 
  {
    this.obtenerLicenciatura();
  }

  obtenerLicenciatura()
  {
    this.licenciaServ.getLicencia().subscribe(
      resultado => this.ListarLicencia = resultado,
      error => console.log(error));
  }
  guardarLicencia()
  {
    if(this.formLicencia.value.id_licencia)
    //se actualiza
    {
      this.licenciaServ.updateLicencia(this.formLicencia.value).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerLicenciatura();
          this.formLicencia.reset();
        },
        error => console.log(error)
        )
    }
    else{

      //mando el save docente al form docente
      this.licenciaServ.saveLicencia(this.formLicencia.value).subscribe(
       resultado => {
         console.log(resultado);
         //refresca la grilla
         this.obtenerLicenciatura();
       },
       error => console.log(error)
     );
     }
  }
  editarLicencia(licencia:ILicencia)
  {
    this.formLicencia.setValue(licencia)
  }
  eliminarLicencia(id:number)
  {
    //esto es una alerta antes de borrar 
    if(confirm ('Estas seguro que desea ejecutar esta accion?'))
    {
      //se elimina una licencia por id
      this.licenciaServ.deleteLicencia(id).subscribe(
        respuesta => {
          alert(respuesta);
          this.obtenerLicenciatura();
        }, 
        error => console.log(error)
      );
    } 

  }

}
