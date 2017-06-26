import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoComponent } from "./auto/auto.component";
import { ListadoAutosComponent } from "./listado-autos/listado-autos.component";
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
const routes: Routes = [
  {
    // path: '',
    // children: []
    path: "autos", component: AutoComponent
  },
  { path: "choferes", component: FormularioReactivoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
