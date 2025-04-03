import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedcolor]'
})
export class RedcolorDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = 'yellow'
  }

}
