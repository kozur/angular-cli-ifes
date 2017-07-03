import { Directive, ElementRef, Renderer } from '@angular/core';


declare var $: any;
@Directive({
  selector: '[appUpdateForm]'
})
export class UpdateFormDirective {

  constructor(private el: ElementRef, private render: Renderer) { }
}
