import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteGenComponent } from './quote-gen.component';

const routes: Routes = [{path: "", component: QuoteGenComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuoteGenRoutingModule { }
