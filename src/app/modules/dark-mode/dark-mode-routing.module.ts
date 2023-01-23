import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarkModeComponent } from './dark-mode.component';

const routes: Routes = [{path: "", component: DarkModeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DarkModeRoutingModule { }
