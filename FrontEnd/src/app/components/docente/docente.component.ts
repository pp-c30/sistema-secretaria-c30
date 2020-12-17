import { Component, OnInit } from '@angular/core';

import { DocenteService } from '../../services/docente.service';

import { IDocente } from 'src/app/models/Docente';

import { FormBuilder, FormGroup, Form, Validators } from '@angular/forms';

import { ILocalidad } from "src/app/models/Localidad";

import { LocalidadService } from "../../services/localidad.service";

import { Personas_acargoService } from '../../services/personas-a-cargo.service';

//import { PersonasACargoComponent } from "../components/personas-a-cargo/personas-a-cargo.component";


@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  public ListarDocente: IDocente[] = [];

  formDocente: FormGroup ;

  buscarDocente:any;

  IdDocente:number;

  p:number = 1;

  prueba:number = 3;

  listarLocalidad: ILocalidad[]= [];

  // construccion del formulario utilizando el formbuilder y el fb group
  constructor(private docenteServ: DocenteService, private fb: FormBuilder, private localidadServ: LocalidadService, private paService:Personas_acargoService /*, private personasCargo:PersonasACargoComponent*/)
  {
    this.formDocente = this.fb.group({

      id_docente:[null],

      nombre: ['',[Validators.required, Validators.minLength(3)] ],

      apellido: ['',[Validators.required]],

      fecha_nacimiento: ['',[Validators.required]],

      legajo: ['',[Validators.required]],

      legajo_recibo: ['',[Validators.required]],

      dni: ['',[Validators.required]],

      cuit: ['',[Validators.required]],

      telefono: ['',[Validators.required]],

      correo: ['',[Validators.required]],

      domicilio: ['',[Validators.required]],

      nacionalidad: ['',[Validators.required]],

      sexo: ['',[Validators.required]],

      lugar_de_nacimiento: [null,[Validators.required]],

      fecha_ingreso_adm: ['',[Validators.required]],

      estado_civil: ['',[Validators.required]],

      conyuge: [''],

      cuil_conyuge: [''],

      fecha_n_conyuge: [''],

      familiar_acargo: [null],

    });
  }

  ngOnInit(): void
  {

    this.obtenerDocente();
    this.obtenerLocalidad();

  }

  obtenerLocalidad(){
    this.localidadServ.getLocalidad().subscribe(
      respuesta => {
        this.listarLocalidad = respuesta;
      }
    )
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
    if(this.formDocente.value.id_docente)
    //se actualiza
    {
      this.docenteServ.updateDocente(this.formDocente.value).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerDocente();
          this.formDocente.reset();
        },
        error => console.log(error)
        )
    }
    else{

     //mando el save docente al form docente
     this.docenteServ.saveDocente(this.formDocente.value).subscribe(
      resultado => {
        console.log(resultado);
        //refresca la grilla
        this.obtenerDocente();
        this.formDocente.reset();
      },
      error => console.log(error)
    );
    }

  }
  //traigo tood lo de IDocente para poderlo editar
  editarDocente(docente:IDocente)
  {
    this.formDocente.setValue(docente)
  }

  obtenerIdDocente (id_docente:number)
  {
    this.IdDocente = id_docente;

    /*this.paService.getPersonas_acargo(id_docente).subscribe(
      respuesta=>{
        this.personasCargo.listarPersonas_acargo = respuesta;
      }
    )*/
  }

  eliminarDocente(id:number)
  {
    //esto es una alerta antes de borrar un docente
    if(confirm ('Estas seguro que desea ejecutar esta accion?'))
    {
      //se elimina un docente por id
      this.docenteServ.deleteDocente(id).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerDocente();
        }, 
        error => console.log(error)
      );
    } 

  }

}
