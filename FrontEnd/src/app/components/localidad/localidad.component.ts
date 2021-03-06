import { Component, OnInit } from '@angular/core';

import { LocalidadService } from '../../services/localidad.service';

import { ILocalidad } from 'src/app/models/Localidad';

import { FormBuilder, FormGroup, Form, Validators } from '@angular/forms';

import { IProvincias } from 'src/app/models/Provincias';

import { ProvinciasService } from '../../services/provincias.service';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css']
})
export class LocalidadComponent implements OnInit {

  ListarLocalidad: ILocalidad[] = [];

  p:number = 1;

  buscarProvincia:any;

  listarProvincia: IProvincias[]= [];

  formLocalidad: FormGroup ;
  // construccion del formulario utilizando el formbuilder y el fb group
  constructor(private localidadServ: LocalidadService, private fb: FormBuilder, private provinciasServ: ProvinciasService)
  {
    this.formLocalidad = this.fb.group({
      id_localidad:[null],

      descripcion: ['', [Validators.required, Validators.minLength(3)] ],

      id_provincia: [[Validators.required]]
    });

  }

  ngOnInit(): void
  {

  this.obtenerLocalidad();
  this.obtenerProvincia();

  }
  obtenerProvincia(){
    this.provinciasServ.getProvincia().subscribe(
      respuesta => {
        this.listarProvincia = respuesta;
      }
    )
  }

  obtenerLocalidad()
{
  this.localidadServ.getLocalidad().subscribe(
    resultado => this.ListarLocalidad = resultado,
    error => console.log(error));
}
guardarLocalidad()
{
  if(this.formLocalidad.value.id_localidad)
  //se actualiza
  {
    this.localidadServ.updateLocalidad(this.formLocalidad.value).subscribe(
      respuesta => {
        console.log(respuesta);
        this.obtenerLocalidad();
        this.formLocalidad.reset();
      },
      error => console.log(error)
      )
  }
  else{

    //mando el save docente al form docente
    this.localidadServ.saveLocalidad(this.formLocalidad.value).subscribe(
     resultado => {
       console.log(resultado);
       //refresca la grilla
       this.obtenerLocalidad();
       this.formLocalidad.reset();
     },
     error => console.log(error)
   );
   }
}
  //traigo tood lo de IDocente para poderlo editar
  editarLocalidad(localidad:ILocalidad)
  {
    this.formLocalidad.setValue(localidad)
  }

  eliminarLocalidad(id:number)
  {
    //esto es una alerta antes de borrar una localidad
    if(confirm ('Estas seguro que desea ejecutar esta accion?'))
    {
      //se elimina una localidad por id
      this.localidadServ.deleteLocalidad(id).subscribe(
        respuesta => {
          alert(respuesta);
          this.obtenerLocalidad();
        }, 
        error => console.log(error)
      );
    } 

  }
}
