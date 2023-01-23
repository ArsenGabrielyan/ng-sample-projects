import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkModeRoutingModule } from './dark-mode-routing.module';
import { DarkModeComponent } from './dark-mode.component';


@NgModule({
  declarations: [
    DarkModeComponent
  ],
  imports: [
    CommonModule,
    DarkModeRoutingModule
  ]
})
export class DarkModeModule { }
