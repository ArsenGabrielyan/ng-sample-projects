import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumSiteRoutingModule } from './forum-site-routing.module';
import { ForumSiteComponent } from './forum-site.component';
import { SortedPipe } from './pipes/sorted.pipe';
import { ValidationMessagePipe } from './pipes/validation-message.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ForumSiteComponent,
    SortedPipe,
    ValidationMessagePipe
  ],
  imports: [
    CommonModule,
    ForumSiteRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ForumSiteModule { }
