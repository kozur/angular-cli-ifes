import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { Auto } from "app/clases/auto";
import { AutoComponent } from '../auto/auto.component';
import { MostrarDirective } from "app/directivas/mostrar.directive";

declare var $: any;

@Component({
  selector: 'app-listado-autos',
  templateUrl: './listado-autos.component.html',
  styleUrls: ['./listado-autos.component.css']
})
export class ListadoAutosComponent implements OnInit {

  @Output() onEdit = new EventEmitter<Auto>();

  mostrar: boolean[] = [false, false, false, false];

  autos: Auto[] = [
    { id: 0, marca: 'Ford', modelo: 'Falcon', color: 'Azul', patente: 'AA-006-FQ', anio: 1977 },
    { id: 1, marca: 'Chevrolet', modelo: 'Corsa', color: 'Blanco', patente: 'GGD-069', anio: 2009 },
    { id: 2, marca: 'Renault', modelo: 'Clio', color: 'Verde', patente: 'AMC-205', anio: 2003 },
    { id: 3, marca: 'Peugeot', modelo: '306', color: 'Negro', patente: 'AF-357-ER', anio: 2016 }
  ];

  check: boolean[] = [false, false, false, false];
  checkGeneral : boolean = false;

  id_contador: number = 4;

  constructor() { }

  ngOnInit() {
  }

  mostrarOpciones(unId: number) {
    this.mostrar[unId] = true;
  }
  ocultarOpciones(unId: number) {
    this.mostrar[unId] = false;
  }

  agregarAuto(unAuto: Auto) {
    unAuto.id = this.id_contador;
    this.id_contador++;

    this.autos.push(unAuto);
    this.check.push(false);
  }
  modificarAuto(unAuto) {
    let i: number = 0;
    let elimino: boolean = false;
    while (i < this.autos.length) {
      if ((this.autos[i].id == unAuto.id) && (!elimino)) {
        this.autos[i].patente = unAuto.patente;
        this.autos[i].marca = unAuto.marca;
        this.autos[i].modelo = unAuto.modelo;
        this.autos[i].color = unAuto.color;
        this.autos[i].anio = unAuto.anio;
      }
      i++;
    }
  }
  eliminarAuto(unId: number) {
    let i: number = 0;
    let elimino: boolean = false;
    while (i < this.autos.length) {
      if ((this.autos[i].id == unId) && (!elimino)) {
        this.autos.splice(i, 1);
        this.check.splice(i, 1);
      }
      i++;
    }
  }
  editarAuto(unId: number) {
    let i: number = 0;
    let elimino: boolean = false;
    while (i < this.autos.length) {
      if ((this.autos[i].id == unId) && (!elimino)) {
        this.onEdit.emit(this.autos[i]);
      }
      i++;
    }
  }

  public sePuedeEditar(): boolean {
    let count: number = 0;
    this.check.forEach(element => {
      if (element) {
        count++;
      }
    });

    return (count == 1);
  }
  editarAutoGeneral() {
    this.onEdit.emit(this.autos[this.check.indexOf(true)]);
  }
  eliminarAutoGeneral() {
    for (var index = this.check.length; index >= 0; index--) {
      var element = this.check[index];
      if (element) {
        this.eliminarAuto(this.autos[index].id);
      }
    }
  }
  marcarTodos(check:boolean){
    this.check.forEach((element,index) => {
      this.check[index] = !check;
    });
    
  }

}
