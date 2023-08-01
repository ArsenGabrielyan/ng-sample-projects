import { Component, Input } from '@angular/core';
import { FileObj } from '../../data/message.interface';

@Component({
  selector: 'chat-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent {
  @Input({required: true}) msg!: FileObj
  now = Date.now();
}