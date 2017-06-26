import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoComponent } from './auto/auto.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListadoAutosComponent } from './listado-autos/listado-autos.component';

import { MaterializeModule } from 'angular2-materialize';
import { MostrarDirective } from './mostrar.directive';
import { DropdownDirective } from './dropdown.directive';
import { UpdateFormDirective } from './update-form.directive';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    NavBarComponent,
    ListadoAutosComponent,
    MostrarDirective,
    DropdownDirective,
    UpdateFormDirective,
    FormularioReactivoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
