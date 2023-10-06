import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputMentionComponent } from './input-mention.component';

const routes: Routes = [{path:'', component: InputMentionComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputMentionRoutingModule { }
