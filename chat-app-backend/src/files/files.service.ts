import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class FilesService {
  constructor(private readonly dbService: DatabaseService) {}

  async uploadFile(messageId: number, filename: string, filePath: string) {
    const query =
      'INSERT INTO files (message_id, filename, file_path) VALUES ($1, $2, $3) RETURNING *';
    const result = await this.dbService.query(query, [
      messageId,
      filename,
      filePath,
    ]);
    return result[0];
  }
}
