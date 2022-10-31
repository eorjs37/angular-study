import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTextcolor]',
})
export class TextcolorDirective {
  //호스트 요소에서 프로퍼티 바인딩한 값을 전달받는다.
  @Input() color: string | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') handleMouseEnter() {
    console.log('mouseenter');
    console.log(this.color);

    this.textColor(this.color);
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string | null | undefined) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
