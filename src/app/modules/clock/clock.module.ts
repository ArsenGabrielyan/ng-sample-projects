import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockRoutingModule } from './clock-routing.module';
import { ClockComponent } from './clock.component';


@NgModule({
  declarations: [
    ClockComponent
  ],
  imports: [
    CommonModule,
    ClockRoutingModule
  ]
})
export class ClockModule { }
