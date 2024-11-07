import { Controller, Post, Get, Body, Req, UseGuards } from '@nestjs/common';
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
