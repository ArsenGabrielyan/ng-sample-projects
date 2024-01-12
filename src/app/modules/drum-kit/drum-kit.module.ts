import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrumKitRoutingModule } from './drum-kit-routing.module';
import { DrumKitComponent } from './drum-kit.component';


@NgModule({
  declarations: [
    DrumKitComponent
  ],
  imports: [
    CommonModule,
    DrumKitRoutingModule
  ]
})
export class DrumKitModule { }
