import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Auto } from "app/clases/auto";
import { ListadoAutosComponent } from '../listado-autos/listado-autos.component';
import { FormsModule, NgForm } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

declare var $: any;

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent {

  mascaraPatente: string = "[A-Z]{2}-[0-9]{3}-[A-Z]{2}$|[A-Z]{3}-[0-9]{3}$";
  mascaraModeloAnio: string = '19[0-9]{2}$|200[0-9]{1}$|201[0-7]{1}$';

  autoSeleccionado: Auto = {
    id: null,
    patente: '',
    marca: '',
    modelo: '',
    color: '',
    anio: null
  };

  editando: boolean = false;

  colores: string[] = ["Azul", "Amarillo", "Rojo", "Verde", "Blanco", "Negro"];
  @ViewChild(ListadoAutosComponent) listadoAutos: ListadoAutosComponent;

  constructor(private el: ElementRef, private render: Renderer) { }


  agregarAuto() {
    this.listadoAutos.agregarAuto(this.autoSeleccionado);
    this.autoSeleccionado = {
      id: null,
      patente: '',
      marca: '',
      modelo: '',
      color: '',
      anio: null
    };
    var resetForm = <HTMLFormElement>document.getElementById("autoForm");
    resetForm.reset();
  }
  editarAuto() {
    this.listadoAutos.modificarAuto(this.autoSeleccionado);
    var resetForm = <HTMLFormElement>document.getElementById("autoForm");
    resetForm.reset();
    this.editando = false;
  }
  cancelarAuto() {
    var resetForm = <HTMLFormElement>document.getElementById("autoForm");
    resetForm.reset();
    this.editando = false;
  }

  onEdit(unAuto: Auto) {
    this.autoSeleccionado = {
      id: unAuto.id,
      patente: unAuto.patente,
      marca: unAuto.marca,
      modelo: unAuto.modelo,
      color: unAuto.color,
      anio: unAuto.anio
    };
    this.editando = true;
  }
}
