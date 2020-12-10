import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from "../..//services/provincias.service";
import { IProvincias } from "src/app/models/Provincias";
import { FormBuilder,FormGroup,Form,Validators } from "@angular/forms";

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {

  listProvincias:IProvincias[] = [];
  formProvincia:FormGroup;
  buscarProvincia:any;
  lean:number = 1;

  constructor(private provServ:ProvinciasService, private fb:FormBuilder) { 
    
    this.formProvincia = this.fb.group({
      id_provincia:[''],
      descripcion:['',[Validators.required, Validators.minLength(4)]]
    })
   }

  ngOnInit(): void {
    this.listarProvincia();
  }
  listarProvincia()
  {
    this.provServ.getProvincia().subscribe(
      resultado => this.listProvincias = resultado,
      error => console.log(error)
    )
  }
 guardarProvincia()
 {
   if(this.formProvincia.value.id_provincia)
   {
     this.provServ.updateProvincia(this.formProvincia.value).subscribe(
        resultado => {
         console.log(resultado);
         this.listarProvincia();
         this.formProvincia.reset();
       },
         error => console.log(error)
     );
   } else{
      this.provServ.saveProvincia(this.formProvincia.value).subscribe(
        resultado => {
          console.log(resultado);
          this.listarProvincia();
          this.formProvincia.reset();
        },
        error => console.log(error)
      );
   }
 }
 editarProvincia(provincia:IProvincias)
 {
   this.formProvincia.setValue(provincia) 
 }
 eliminarProvincia(id:number)
 {
   if(confirm('¿Esta seguro de eliminar esta provincia?'))
   {
     this.provServ.deleteProvincia(id).subscribe(
       resultado => {
         console.log(resultado);
         this.listarProvincia();
         alert(resultado);
       },
       error => alert('Esta provincia no puede eliminarse porque esta siendo usada.')
     );
   }
 }
}
