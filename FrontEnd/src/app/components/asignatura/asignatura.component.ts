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
  [x: string]: any;

  listaAsignatura: IAsignatura[] = [];

  formAsignatura: FormGroup;
  // tslint:disable-next-line: variable-name
  buscarAsignatura: any;
  // tslint:disable-next-line: ban-types
  l: Number = 1;
  constructor(private asignaturaServ: AsignaturaService, private fb: FormBuilder) {
    this.formAsignatura = this.fb.group({
      id_asignatura: [null],
      descripcion: ['', [Validators.required, Validators.minLength(3)]],
      turno: [''],
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
    if (this.formAsignatura.value.id_pc)
    {
      // se actualiza
      this.asignaturaServ.updateAsignatura(this.formAsignatura.value).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerAsignatura();
        },
        error => console.log(error)
      );
    }else{
      this.asignaturaServ.saveAsignatura(this.formAsignatura.value).subscribe(
        resultado => {
          console.log(resultado);
          this.obtenerAsignatura();
        },
        error => console.log(error)
      );
     }
  }
  // tslint:disable-next-line: variable-name
  editarAsignatura(asignatura: IAsignatura)
  {
    this.formAsignatura.setValue(asignatura);
  }
  eliminarAsignatura(id: number)
  {

    if (confirm('Esta seguro que desea ejecutar esta acción'))
    {
      this.asignaturaServ.deleteAsignatura(id).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerAsignatura();
        },
        error => console.log(error)
      );
    }
  }
  }
