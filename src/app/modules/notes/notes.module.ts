import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NotesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
