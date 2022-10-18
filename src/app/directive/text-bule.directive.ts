import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextBule]',
})
export class TextBuleDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'color', 'blue');
  }
}
