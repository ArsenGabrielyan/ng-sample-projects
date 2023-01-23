import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteGenRoutingModule } from './quote-gen-routing.module';
import { QuoteGenComponent } from './quote-gen.component';
import {ClipboardModule} from "@angular/cdk/clipboard"

@NgModule({
  declarations: [
    QuoteGenComponent
  ],
  imports: [
    CommonModule,
    ClipboardModule,
    QuoteGenRoutingModule
  ]
})
export class QuoteGenModule { }
