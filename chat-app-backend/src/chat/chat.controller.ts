import { Controller, Post, Get, Body, Req, UseGuards, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('send')
  async sendMessage(@Body() body, @Req() req) {
    await this.chatService.sendMessage(
      req.user.userId,
      body.receiverId,
      body.content,
    );
    return { message: 'Message sent' };
  }
  @Get('history')
  async getChatHistory(
    @Query('senderId') senderId: number,
    @Query('receiverId') receiverId: number,
  ) {
    return this.chatService.getMessages(senderId, receiverId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('messages')
  async getMessages(@Body() body, @Req() req) {
    const messages = await this.chatService.getMessages(
      req.user.userId,
      body.chatUserId,
    );
    return { messages };
  }
}
