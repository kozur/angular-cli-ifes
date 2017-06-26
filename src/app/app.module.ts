import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    NavBarComponent,
    ListadoAutosComponent,
    MostrarDirective,
    DropdownDirective,
    UpdateFormDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
