import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaintRoutingModule } from './paint-routing.module';
import { PaintComponent } from './paint.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaintComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaintRoutingModule
  ]
})
export class PaintModule { }
