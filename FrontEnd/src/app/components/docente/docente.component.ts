import { Component, OnInit } from '@angular/core';

import { DocenteService } from '../../services/docente.service';

import { IDocente } from 'src/app/models/Docente';

import { FormBuilder,FormGroup, Form } from "@angular/forms";

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  ListarDocente: IDocente[] = [];

  formDocente: FormGroup ;


  constructor(private docenteServ:DocenteService, private fb: FormBuilder) 
  { 
    this.formDocente = this.fb.group({


      nombre:[''],

      apellido:[''],

      fecha_nacimiento:[''],

      legajo:[''],

      legajo_recibo:[''],

      dni:[''],

      cuit:[''],

      telefono:[''],

      correo:[''],

      domicilio:[''],

      nacionalidad:[''],

      sexo:[''],

      lugar_de_nacimiento:[''],

      fecha_ingreso_adm:[''],

      estado_civil:[''],

      conyuge:[''],

      cuil_conyuge:[''],

      fecha_n_conyuge:[''],

      familiar_acargo:['']

    })
  }

  ngOnInit(): void
  {

    this.obtenerDocente();

  }

  obtenerDocente()
  {
    this.docenteServ.getDocente().subscribe(
      resultado => this.ListarDocente = resultado,
      error => console.log(error));
  }

  guardarDocente()
  {
     console.log(this.formDocente.value);
  }

}
