import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoComponent } from "./auto/auto.component";
import { ListadoAutosComponent } from "./listado-autos/listado-autos.component";

const routes: Routes = [
  {
    // path: '',
    // children: []
    path:"autos", component:AutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
