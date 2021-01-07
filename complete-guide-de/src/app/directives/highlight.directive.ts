import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'green';

  @HostBinding('style.backgroundColor') color = this.defaultColor;

  @HostListener('mouseenter') mouseenter() {
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.color = 'yellow';
  }
  
  constructor(elRef: ElementRef, renderer: Renderer2) { 
    //nicht benutzen
    //elRef.nativeElement.style.backgroundColor = 'green';
    //stattdessen render oder HostBinding
    //renderer.setStyle(elRef.nativeElement, 'background-color', 'green');
  }

  ngOnInit() {
    this.color = this.defaultColor;
  }


}
