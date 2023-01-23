import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpsGameRoutingModule } from './rps-game-routing.module';
import { RpsGameComponent } from './rps-game.component';


@NgModule({
  declarations: [
    RpsGameComponent
  ],
  imports: [
    CommonModule,
    RpsGameRoutingModule
  ]
})
export class RpsGameModule { }
