import { Component, OnInit } from '@angular/core';

import { LocalidadService } from "../../services/localidad.service";

import { ILocalidad } from "src/app/models/Localidad";

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.css']
})
export class LocalidadComponent implements OnInit {

  ListarLocalidad:ILocalidad[] = [];

  constructor(private localidadServ:LocalidadService) { 


  }

  ngOnInit(): void
  {

  this.obtenerLocalidad();

  }

  obtenerLocalidad()
{
  this.localidadServ.getLocalidad().subscribe(
    resultado => this.ListarLocalidad = resultado,
    error => console.log(error))
}

}
