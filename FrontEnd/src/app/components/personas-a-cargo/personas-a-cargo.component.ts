import { Component, OnInit } from '@angular/core';

import { Personas_acargoService } from '../../services/personas-a-cargo.service';

import { IPersonas_acargo } from 'src/app/models/personas-a-cargo';

import { FormBuilder, FormGroup, Form, Validators } from '@angular/forms';
import { Input } from '@angular/core';




@Component({
  selector: 'app-personas-a-cargo',
  templateUrl: './personas-a-cargo.component.html',
  styleUrls: ['./personas-a-cargo.component.css']
})

// tslint:disable-next-line: class-name
export class PersonasACargoComponent implements OnInit {
  
  @Input() id_docente: number;

  [x: string]: any;

  // tslint:disable-next-line: variable-name
  listarPersonas_acargo: IPersonas_acargo[] = [];
  // tslint:disable-next-line: variable-name
  formPersonas_acargo: FormGroup;
  // tslint:disable-next-line: variable-name
  buscarPersonas_acargo: any;
  // tslint:disable-next-line: ban-types
  p: number = 1;

  // tslint:disable-next-line: variable-name
  constructor(private personas_acargoServ: Personas_acargoService, private fb: FormBuilder) {
    this.formPersonas_acargo = this.fb.group({
      id_docente: [35],
      id_pc: [null],
      nombre: [''],
      apellido: [''],
      dni: [''],
      fecha_nacimiento: [''],
      familiar_acargo: [''],
    });

  }

  ngOnInit(): void
  {

    this.obtenerPersonas_acargo();


    //this.formPersonas_acargo.get('id_docente').setValue(this.id_docente);
  }

  obtenerPersonas_acargo()
  {
    this.personas_acargoServ.getPersonas_acargo(this.id_docente).subscribe(
      resultado => this.listarPersonas_acargo = resultado,
      error => console.log(error));
  }
  guardarPersonas_acargo()
  {
    if (this.formPersonas_acargo.value.id_pc)
    {
      // se actualiza
      this.personas_acargoServ.updatePersonas_acargo(this.formPersonas_acargo.value).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerPersonas_acargo();
          this.formPersonas_acargo.reset();
        },
        error => console.log(error)
      );
    }else{
      this.personas_acargoServ.savePersonas_acargo(this.formPersonas_acargo.value).subscribe(
        resultado => {
          console.log(resultado);
          this.obtenerPersonas_acargo();
          this.formPersonas_acargo.reset();
        },
        error => console.log(error)
      );
     }
  }
    // tslint:disable-next-line: variable-name
    editarPersonas_acargo(personas_acargo: IPersonas_acargo)
    {
      // tslint:disable-next-line: max-line-length
      personas_acargo.fecha_nacimiento = {year: Number(personas_acargo.year), month: Number(personas_acargo.month), day: Number(personas_acargo.day)};
      this.formPersonas_acargo.setValue(personas_acargo);
    }

    eliminarPersonas_acargo(id: number)
    {

      if (confirm('Esta seguro que desea ejecutar esta acción'))
      {
        this.personas_acargoServ.deletePersonas_acargo(id).subscribe(
          respuesta => {
            console.log(respuesta);
            this.obtenerPersonas_acargo();
          },
          error => console.log(error)
        );
      }
    }
}
