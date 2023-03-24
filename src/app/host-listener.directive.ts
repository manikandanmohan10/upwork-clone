import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostListener]'
})
export class HostListenerDirective {

  constructor() { }

  @HostListener('click') onClick(v: any) {
    alert('Button was clicked')
  }

}
