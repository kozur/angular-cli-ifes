import { Directive, HostListener, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[pintarGris]'
})
export class MostrarDirective {

  constructor(private el: ElementRef, private render: Renderer) {
  }
  @Input() pintar:boolean;
  @Input() id:number;

  @HostListener('mouseenter') onMouseEnter() {
    // this.el.nativeElement.style.backgroundColor = "yellow";
    var boton = <HTMLFormElement>document.getElementById("menu-"+this.id.toString());
    this.render.setElementClass(boton,'pulse',true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.el.nativeElement.style.backgroundColor = "blue";

    var boton = <HTMLFormElement>document.getElementById("menu-"+this.id.toString());
    this.render.setElementClass(boton,'pulse',false);
  }
}
