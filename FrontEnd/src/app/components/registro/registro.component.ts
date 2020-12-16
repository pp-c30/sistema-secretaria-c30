import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
 formRegistro:FormGroup

  constructor(private fb:FormBuilder) {
    this.formRegistro = this.fb.group({
      username:['',[Validators.required]],
      password:['', [Validators.required]],
      email:['',[Validators.required]],
    });
   }

  ngOnInit(): void {
  }

registrar(){

}

}
