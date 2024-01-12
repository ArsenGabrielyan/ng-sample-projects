import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PianoRoutingModule } from './piano-routing.module';
import { PianoComponent } from './piano.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PianoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PianoRoutingModule
  ]
})
export class PianoModule { }
