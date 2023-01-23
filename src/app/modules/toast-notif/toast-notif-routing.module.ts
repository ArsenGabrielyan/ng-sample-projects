import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastNotifComponent } from './toast-notif.component';

const routes: Routes = [{path: "", component: ToastNotifComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToastNotifRoutingModule { }
