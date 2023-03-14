import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(el: ElementRef) {
    console.log(el);
    el.nativeElement.style.color= 'blue' ;
   }

}
