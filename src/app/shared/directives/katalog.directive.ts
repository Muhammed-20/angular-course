import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ListeleService } from '../services/listele.service';

@Directive({
  selector: '[appKatalog]'
})
export class KatalogDirective implements OnInit {
  @Input() appHasRole: string = '';
  constructor(
    private elementRef: ElementRef,
  ) {

  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

}
