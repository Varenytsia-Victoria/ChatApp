import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class MessagesService {
  constructor(private readonly dbService: DatabaseService) {}

  async sendMessage(senderId: number, receiverId: number, content: string) {
    const query =
      'INSERT INTO messages (sender_id, receiver_id, content) VALUES ($1, $2, $3) RETURNING *';
    const result = await this.dbService.query(query, [
      senderId,
      receiverId,
      content,
    ]);
    return result[0];
  }

  async getMessagesBetweenUsers(user1Id: number, user2Id: number) {
    const query = `
      SELECT * FROM messages
      WHERE (sender_id = $1 AND receiver_id = $2) OR (sender_id = $2 AND receiver_id = $1)
      ORDER BY created_at ASC
    `;
    const result = await this.dbService.query(query, [user1Id, user2Id]);
    return result;
  }
}
