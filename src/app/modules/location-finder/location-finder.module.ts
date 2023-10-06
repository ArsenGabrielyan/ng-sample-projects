import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationFinderRoutingModule } from './location-finder-routing.module';
import { LocationFinderComponent } from './location-finder.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LocationFinderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LocationFinderRoutingModule
  ]
})
export class LocationFinderModule { }
