// src/files/files.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  async uploadFile(
    @Body() body: { messageId: number; filename: string; filePath: string },
  ) {
    return this.filesService.uploadFile(
      body.messageId,
      body.filename,
      body.filePath,
    );
  }
}
