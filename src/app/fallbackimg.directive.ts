import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appFallbackimg]'
})
export class FallbackimgDirective {

  @Input() appFallbackimg: string;

  constructor(private eRef: ElementRef) { }

  @HostListener('error')
  loadFallbackOnError() {
    const element: HTMLImageElement = this.eRef.nativeElement as HTMLImageElement;
    element.src = this.appFallbackimg || 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_xlarge.jpg';
  }
}
