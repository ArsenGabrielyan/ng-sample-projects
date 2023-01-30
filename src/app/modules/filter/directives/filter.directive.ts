import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appFilter]'
})
export class FilterDirective {
  @Input() classFilter = "";
}