import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './filter.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    FilterRoutingModule
  ]
})
export class FilterModule { }
