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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { MatBadgeModule} from '@angular/material/badge';
//terminar de ver video de delfor para importar el filtrador de provincia
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import {MatBadgeModule} from '@angular/material/badge';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from 'ngx-pagination';

>>>>>>> 9cc42ec93db83e74f2b5fc38e55dd3e1c7acf378
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
    NavegacionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularEditorModule,
    NgbModule,
    MatBadgeModule,
    Ng2SearchPipeModule,
<<<<<<< HEAD
    NgxPaginationModule,
    BrowserAnimationsModule,
    LayoutModule,
=======
    NgxPaginationModule
>>>>>>> 9cc42ec93db83e74f2b5fc38e55dd3e1c7acf378
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
