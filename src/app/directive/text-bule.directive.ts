import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextBule]',
})
export class TextBuleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  //호스트 요소에서 발생한 mouseenter 이벤트의 핸들러를 정의
  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor('blue');
  }

  //호스트 요소에서 발생한 mouseleave 이벤트의 핸들러를 정의
  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
