import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appFallbackimg]'
})
export class FallbackimgDirective {

  @Input() appFallbackimg: string;
  @Input() appFallbackimages: string;

  constructor(private eRef: ElementRef) { }

  @HostListener('error')
  loadFallbackOnError() {
    const element: HTMLImageElement = this.eRef.nativeElement as HTMLImageElement;
    const path = 'https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';
    element.src = this.appFallbackimg || `${path}/landscape_xlarge.jpg`;
    element.srcset = this.appFallbackimages || this.getImageSrcSet(path);
  }

  getImageSrcSet(path: string) {
    return `${path}/landscape_small.jpg 120w, ${path}/landscape_medium.jpg 175w, ${path}/landscape_large.jpg 190w, ${path}/landscape_xlarge.jpg 270w`;
  }
}
