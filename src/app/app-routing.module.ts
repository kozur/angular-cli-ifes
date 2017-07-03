import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoComponent } from "./auto/auto.component";
import { ListadoAutosComponent } from "./listado-autos/listado-autos.component";
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { DetalleEquipoComponent } from './detalle-equipo/detalle-equipo.component';
import { EquipoComponent } from './equipo/equipo.component';
const routes: Routes = [
  {
    // path: '',
    // children: []
    path: "autos", component: AutoComponent
  },
  { path: "reactiveForms", component: FormularioReactivoComponent },
  // { path: "detalleEquipo", component: DetalleEquipoComponent },
  { path: "equipo", component: EquipoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
