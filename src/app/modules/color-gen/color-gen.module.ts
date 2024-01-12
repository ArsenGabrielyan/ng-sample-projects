import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorGenRoutingModule } from './color-gen-routing.module';
import { ColorGenComponent } from './color-gen.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ColorGenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ColorGenRoutingModule
  ]
})
export class ColorGenModule { }
