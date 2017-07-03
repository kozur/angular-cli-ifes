import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Equipo } from "../clases/Equipos";
import { Jugador } from "app/clases/Jugador";
@Component({
  selector: 'app-detalle-equipo',
  templateUrl: './detalle-equipo.component.html',
  styleUrls: ['./detalle-equipo.component.css']
})
export class DetalleEquipoComponent implements OnInit {


  /**esta es una forma de armar un formulario */
  // equipo = new FormGroup({
  //   nombreEquipo: new FormControl(),
  //   ciudad: new FormControl(),
  // });

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit() {
  }

  @Input() equipo: Equipo;

  ngOnChanges() {

    this.equipoGroup.setValue({
      nombreEquipo: this.equipo.nombreEquipo,
      ciudad: this.equipo.ciudad,
      jugadores: this.equipo.jugadores[0] || new Jugador()
    });
  }

  /**Esta es otra forma de armar un formulario */
  equipoGroup: FormGroup;
  crearFormulario() {
    this.equipoGroup = this.fb.group({
      nombreEquipo: ['', Validators.required],
      ciudad: ['', Validators.required],
      jugadores: this.fb.group({
        nombre: [''],
        apellido: ['']
      })
    })
  }

}
