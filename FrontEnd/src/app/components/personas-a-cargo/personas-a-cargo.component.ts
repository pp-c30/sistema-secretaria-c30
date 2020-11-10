import { Component, OnInit } from '@angular/core';

import { Personas_acargoService } from '../../services/personas-a-cargo.service';

import { IPersonas_acargo } from 'src/app/models/personas-a-cargo';

import { FormBuilder, FormGroup, Form, Validators } from '@angular/forms';




@Component({
  selector: 'app-personas-a-cargo',
  templateUrl: './personas-a-cargo.component.html',
  styleUrls: ['./personas-a-cargo.component.css']
})

// tslint:disable-next-line: class-name
export class PersonasACargoComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  listarPersonas_acargo: IPersonas_acargo[] = [];
  // tslint:disable-next-line: variable-name
  formPersonas_acargo: FormGroup;
  // tslint:disable-next-line: variable-name
  buscarPersonas_acargo: any;
  // tslint:disable-next-line: ban-types
  l: Number = 1;

  // tslint:disable-next-line: variable-name
  constructor(private personas_acargoServ: Personas_acargoService, private fb: FormBuilder) {
    this.formPersonas_acargo = this.fb.group({
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

  }

  obtenerPersonas_acargo()
  {
    this.personas_acargoServ.getPersonas_acargo().subscribe(
      resultado => this.listarPersonas_acargo = resultado,
      error => console.log(error));
  }
  guardarPersonas_acargo()
  {
     // console.log(this.formPersonas_acargo.value);
     this.personas_acargoServ.savePersonas_acargo(this.formPersonas_acargo.value).subscribe(
       resultado => {
         console.log(resultado);
         this.obtenerPersonas_acargo();
       }
     );
  }
}

