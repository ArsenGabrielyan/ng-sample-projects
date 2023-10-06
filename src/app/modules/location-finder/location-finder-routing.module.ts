import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationFinderComponent } from './location-finder.component';

const routes: Routes = [{path: '', component: LocationFinderComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationFinderRoutingModule { }
