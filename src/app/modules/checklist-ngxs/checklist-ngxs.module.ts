import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecklistNgxsRoutingModule } from './checklist-ngxs-routing.module';
import { ChecklistNgxsComponent } from './checklist-ngxs.component';
import { ValidationMessagePipe } from './pipes/validation-message.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChecklistNgxsComponent,
    ValidationMessagePipe
  ],
  imports: [
    CommonModule,
    ChecklistNgxsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChecklistNgxsModule { }
