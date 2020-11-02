import { Component, OnInit } from '@angular/core';

import { Personas_acargoService } from '../../services/personas-a-cargo.service';

import { IPersonas_acargo } from 'src/app/models/personas-a-cargo';



@Component({
  selector: 'app-personas-a-cargo',
  templateUrl: './personas-a-cargo.component.html',
  styleUrls: ['./personas-a-cargo.component.css']
})

// tslint:disable-next-line: class-name
export class PersonasACargoComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  listaPersonas_acargo: IPersonas_acargo[] = [];

  // tslint:disable-next-line: variable-name
  constructor(private personas_acargoServ: Personas_acargoService) { }

  ngOnInit(): void
  {

    this.obtenerPersonas_acargo();

  }

  obtenerPersonas_acargo()
  {
    this.personas_acargoServ.getPersonas_acargo().subscribe(
      resultado => this.listaPersonas_acargo = resultado,
      error => console.log(error));
  }

}
