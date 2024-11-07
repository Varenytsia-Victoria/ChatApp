// src/app.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/user.module';
import { MessagesModule } from './messages/messages.module';
import { FilesModule } from './files/files.module';
import { DatabaseModule } from './database/database.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MessagesModule,
    FilesModule,
    DatabaseModule,
    ChatModule,
  ],
})
export class AppModule {}
