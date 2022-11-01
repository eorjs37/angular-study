import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTextColorCustom]',
})
export class TextColorCustomDirective implements OnInit {
  //프로퍼티 바인딩을 통해 상태전달
  @Input('textColor') color: string | undefined;
  //일반 어트리뷰티의 정적 값의 전달
  @Input() defaultColor: string | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.textColor(this.defaultColor);
  }

  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor(this.color);
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(this.defaultColor);
  }

  private textColor(color: string | undefined) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
