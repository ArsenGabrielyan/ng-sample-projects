import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistNgxsComponent } from './checklist-ngxs.component';

const routes: Routes = [{path: '', component: ChecklistNgxsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChecklistNgxsRoutingModule { }
