import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrumKitComponent } from './drum-kit.component';

const routes: Routes = [{path: "", component: DrumKitComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrumKitRoutingModule { }
