import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpsGameComponent } from './rps-game.component';

const routes: Routes = [{path: "", component: RpsGameComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpsGameRoutingModule { }
