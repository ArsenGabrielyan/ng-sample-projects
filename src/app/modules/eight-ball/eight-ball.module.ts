import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EightBallRoutingModule } from './eight-ball-routing.module';
import { EightBallComponent } from './eight-ball.component';


@NgModule({
  declarations: [
    EightBallComponent
  ],
  imports: [
    CommonModule,
    EightBallRoutingModule
  ]
})
export class EightBallModule { }
