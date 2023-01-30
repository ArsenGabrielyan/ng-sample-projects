import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appItem]'
})
export class ItemDirective {
  @Input() filterItem = "";
}
