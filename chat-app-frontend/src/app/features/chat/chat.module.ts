import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MessageComponent } from './message/message.component';
import { AttachmentUploaderComponent } from './attachment-uploader/attachment-uploader.component';



@NgModule({
  declarations: [
    ChatWindowComponent,
    MessageComponent,
    AttachmentUploaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
