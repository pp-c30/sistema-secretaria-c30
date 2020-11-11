import { Component, OnInit } from '@angular/core';

import { DocenteService } from '../../services/docente.service';

import { IDocente } from 'src/app/models/Docente';

import { FormBuilder, FormGroup, Form } from '@angular/forms';


@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  ListarDocente: IDocente[] = [];

  formDocente: FormGroup ;

// construccion del formulario utilizando el formbuilder y el fb group
  constructor(private docenteServ: DocenteService, private fb: FormBuilder)
  {
    this.formDocente = this.fb.group({


      nombre: [''],

      apellido: [''],

      fecha_nacimiento: [''],

      legajo: [''],

      legajo_recibo: [''],

      dni: [''],

      cuit: [''],

      telefono: [''],

      correo: [''],

      domicilio: [''],

      nacionalidad: [''],

      sexo: [''],

      lugar_de_nacimiento: [null],

      fecha_ingreso_adm: [''],

      estado_civil: [''],

      conyuge: [''],

      cuil_conyuge: [''],

      fecha_n_conyuge: [''],

      familiar_acargo: [null]

    });
  }

  ngOnInit(): void
  {

    this.obtenerDocente();

  }

  obtenerDocente()
  {
    //obtenemos todos los datos del docente mediante el getDocente
    this.docenteServ.getDocente().subscribe(
      resultado => this.ListarDocente = resultado,
      error => console.log(error));
  }

  guardarDocente()
  {
     //console.log(this.formDocente.value);

     //mando el save docente al form docente
     this.docenteServ.saveDocente(this.formDocente.value).subscribe(
       resultado => {
         console.log(resultado);
         //refresca la grilla
         this.obtenerDocente();
       },
       error => console.log(error)
     );
  }

}
