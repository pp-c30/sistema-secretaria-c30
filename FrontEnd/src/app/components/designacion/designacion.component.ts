import { Component, OnInit } from '@angular/core';
import { DesignacionService } from "../../services/designacion.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IDesignacion } from "src/app/models/Designacion";
import { DocenteService } from "src/app/services/docente.service";
import { IDocente } from "src/app/models/Docente";
import { AsignaturaService } from "src/app/services/asignatura.service";
import { IAsignatura } from "src/app/models/Asignatura";

@Component({
  selector: 'app-designacion',
  templateUrl: './designacion.component.html',
  styleUrls: ['./designacion.component.css']
})
export class DesignacionComponent implements OnInit {
  listAsignatura:IAsignatura [] = [];
  listarDocente:IDocente [] = [];
  listDesignacion:IDesignacion [] = [];
  formDesignacion: FormGroup;
  buscarDesignacion:any;
  lean:number = 1;
  constructor(private designacionServ:DesignacionService, private fb: FormBuilder, private asignaturaServ:AsignaturaService, private docenteServ:DocenteService) {
    this.formDesignacion = this.fb.group({

      id_designacion:[''],
      id_docente:[null,[Validators.required]],
      id_asignatura:['',[Validators.required]],
      fecha_designacion:['',[Validators.required]],
      situacion_revista:['',[Validators.required]],
      en_remplazo:['',[Validators.required, Validators.minLength(4)]],
      codigo_articulo:['',[Validators.required]],
      fecha_inicio:['',[Validators.required]],
      fecha_final:['',[Validators.required]],
      vuelta:['',[Validators.required, Validators.minLength(4)]],
      listado:['',[Validators.required, Validators.minLength(4)]],
      titulo:['',[Validators.required, Validators.minLength(4)]],
      estado:['',[Validators.required]],
   })
   }

  ngOnInit(): void {
    this.obtenerAsignatura();
    this.obtenerDocente();
    this.listarDesignacion();
  }

  listarDesignacion()
  {
    this.designacionServ.getDesignacion().subscribe(
      resultado => this.listDesignacion = resultado,
      error => console.log(error)
    )
  }
 guardarDesignacion()
 {
   if(this.formDesignacion.value.id_designacion)
   {
     this.designacionServ.updateDesignacion(this.formDesignacion.value).subscribe(
        resultado => {
         console.log(resultado);
         this.listarDesignacion();
         this.formDesignacion.reset();
       },
         error => console.log(error)
     );
   } else{
      this.designacionServ.saveDesignacion(this.formDesignacion.value).subscribe(
        resultado => {
          console.log(resultado);
          this.listarDesignacion();
          this.formDesignacion.reset();
        },
        error => console.log(error)
      );
   }
 }
 editarDesignacion(designacion:IDesignacion)
 {
   this.formDesignacion.setValue(designacion) 
 }
 eliminarDesignacion(id:number)
 {
   if(confirm('¿Esta seguro de eliminar esta designacion?'))
   {
     this.designacionServ.deleteDesignacion(id).subscribe(
       resultado => {
         console.log(resultado);
         this.listarDesignacion();
       },
       error => console.log(error)
     );
   }
 }
 obtenerDocente(){
   this.docenteServ.getDocente().subscribe(
     resultado => {
       this.listarDocente = resultado;
     }
   )
 }
 obtenerAsignatura(){
  this.asignaturaServ.getAsignatura().subscribe(
    resultado => {
      this.listAsignatura = resultado;
    }
  )
}
}
