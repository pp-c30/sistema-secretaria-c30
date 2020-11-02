import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { DocenteComponent } from './components/docente/docente.component';
import { DesignacionComponent } from './components/designacion/designacion.component';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';
import { LicenciaturaComponent } from './components/licenciatura/licenciatura.component';
import { LocalidadComponent } from './components/localidad/localidad.component';
import { PersonasACargoComponent } from './components/personas-a-cargo/personas-a-cargo.component';
import { ProvinciasComponent } from './components/provincias/provincias.component';
import { HttpClientModule } from '@angular/common/http';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DocenteComponent,
    DesignacionComponent,
    AsignaturaComponent,
    LicenciaturaComponent,
    LocalidadComponent,
    PersonasACargoComponent,
    ProvinciasComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
