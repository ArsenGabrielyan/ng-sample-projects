import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastNotifRoutingModule } from './toast-notif-routing.module';
import { ToastNotifComponent } from './toast-notif.component';


@NgModule({
  declarations: [
    ToastNotifComponent
  ],
  imports: [
    CommonModule,
    ToastNotifRoutingModule
  ]
})
export class ToastNotifModule { }
