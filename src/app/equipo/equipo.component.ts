import { Component, OnInit } from '@angular/core';
import { Equipo } from "../clases/Equipos";
import { EquipoService } from "../services/equipo.service";
@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipos :Equipo[];
  equipoSeleccionado : Equipo;
  constructor(private equipoService:EquipoService) { }

  ngOnInit() {
    this.listaEquipos();
  }
  
listaEquipos(){
  this.equipoService.getEquipos().subscribe(equipos => {
    this.equipos = equipos
  });
}

  seleccionarEquipo(unEquipo:Equipo){
    this.equipoSeleccionado = unEquipo;
  }

}
