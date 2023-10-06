import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMentionRoutingModule } from './input-mention-routing.module';
import { InputMentionComponent } from './input-mention.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputMentionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputMentionRoutingModule
  ]
})
export class InputMentionModule { }
