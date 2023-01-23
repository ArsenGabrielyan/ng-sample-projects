import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { ToDoListComponent } from './to-do-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ToDoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToDoListRoutingModule
  ]
})
export class ToDoListModule { }
