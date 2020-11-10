import { Component, OnInit } from '@angular/core';

import { AsignaturaService } from '../../services/asignatura.service';

import { IAsignatura } from 'src/app/models/Asignatura';

import { FormBuilder, FormGroup, Form, Validators  } from '@angular/forms';


@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {

  listaAsignatura: IAsignatura[] = [];

  formAsignatura: FormGroup;
  // tslint:disable-next-line: variable-name
  buscarAsignatura: any;
  // tslint:disable-next-line: ban-types
  l: Number = 1;
  constructor(private asignaturaServ: AsignaturaService, private fb: FormBuilder) {
    this.formAsignatura = this.fb.group({
      descripcion: ['', [Validators.required, Validators.minLength(3)]],
      truno: [''],
      hora: [''],
      anio: [''],
      division: [''],
      id_cargo_catedra: [''],
    });


  }

  ngOnInit(): void
  {

    this.obtenerAsignatura();

  }

  obtenerAsignatura()
  {
    this.asignaturaServ.getAsignatura().subscribe(
      resultado => this.listaAsignatura = resultado,
      error => console.log(error));
  }
  guardarAsignatura()
  {
     console.log(this.formAsignatura.value);
  }
}
