import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvinciasComponent } from './/components/provincias/provincias.component';
import { DesignacionComponent } from './/components/designacion/designacion.component';
import { AsignaturaComponent } from './/components/asignatura/asignatura.component';
import { LicenciaturaComponent } from './/components/licenciatura/licenciatura.component';
import { LocalidadComponent } from './/components/localidad/localidad.component';
import { PersonasACargoComponent } from './/components/personas-a-cargo/personas-a-cargo.component';
import { IndexComponent } from './/components/index/index.component';
import { DocenteComponent } from './/components/docente/docente.component';
import { IngresoComponent } from ".//components/ingreso/ingreso.component";
import { RegistroComponent } from ".//components/registro/registro.component";
import { SoporteComponent } from "./components/soporte/soporte.component";
const routes: Routes = [

  {
    path: 'provincias', component: ProvinciasComponent,
   },
   {
     path: '', component: IndexComponent,
   },
   {
    path: 'index', component: IndexComponent,
  },
   {
     path: 'docente', component: DocenteComponent,
   },
   {
    path: 'designacion', component: DesignacionComponent,
   },
   {
    path: 'asignatura', component: AsignaturaComponent,
   },
   {
    path: 'licenciatura', component: LicenciaturaComponent,
   },
   {
    path: 'localidad', component: LocalidadComponent
   },
   {
     path: 'personasacargo', component: PersonasACargoComponent,
   },
   {
     path: 'ingreso', component: IngresoComponent,
   },
   {
     path: 'registro', component: RegistroComponent,
   },
   {
     path: 'soporte', component: SoporteComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
