import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumSiteComponent } from './forum-site.component';

const routes: Routes = [{path: "", component: ForumSiteComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumSiteRoutingModule { }
