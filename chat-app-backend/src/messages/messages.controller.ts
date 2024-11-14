import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async sendMessage(
    @Body() body: { senderId: number; receiverId: number; content: string },
  ) {
    return this.messagesService.sendMessage(
      body.senderId,
      body.receiverId,
      body.content,
    );
  }

  @Get(':user1Id/:user2Id')
  async getMessages(
    @Param('user1Id') user1Id: number,
    @Param('user2Id') user2Id: number,
  ) {
    return this.messagesService.getMessagesBetweenUsers(user1Id, user2Id);
  }
}
