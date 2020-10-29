import { Component, OnInit } from '@angular/core';

import { AsignaturaService } from '../../services/asignatura.service';

import { IAsignatura } from 'src/app/models/Asignatura';


@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {

  listaAsignatura: IAsignatura[] = [];

  constructor(private asignaturaServ: AsignaturaService) { }

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

}
