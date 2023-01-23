import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './filter.component';
import { FilterDirective } from './directives/filter.directive';
import { ItemDirective } from './directives/item.directive';


@NgModule({
  declarations: [
    FilterComponent,
    FilterDirective,
    ItemDirective
  ],
  imports: [
    CommonModule,
    FilterRoutingModule
  ]
})
export class FilterModule { }
