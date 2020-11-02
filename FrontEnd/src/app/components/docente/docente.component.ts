import { Component, OnInit } from '@angular/core';

import { DocenteService } from '../../services/docente.service';

import { IDocente } from 'src/app/models/Docente';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  ListarDocente: IDocente[] = [];

  constructor(private docenteServ: DocenteService) { }

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

}
