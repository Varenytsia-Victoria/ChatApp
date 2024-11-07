// src/chat/chat.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class ChatService {
  constructor(@Inject('DATABASE_POOL') private pool: Pool) {}

  async sendMessage(
    senderId: number,
    receiverId: number,
    content: string,
  ): Promise<void> {
    await this.pool.query(
      'INSERT INTO messages (sender_id, receiver_id, content) VALUES ($1, $2, $3)',
      [senderId, receiverId, content],
    );
  }

  async saveMessage(senderId: number, receiverId: number, message: string) {
    const query = `INSERT INTO messages (sender_id, receiver_id, content) VALUES ($1, $2, $3) RETURNING *`;
    const result = await this.pool.query(query, [
      senderId,
      receiverId,
      message,
    ]);
    return result.rows[0];
  }

  async getMessages(userId: number, chatUserId: number): Promise<any[]> {
    const res = await this.pool.query(
      'SELECT * FROM messages WHERE (sender_id = $1 AND receiver_id = $2) OR (sender_id = $2 AND receiver_id = $1)',
      [userId, chatUserId],
    );
    return res.rows;
  }
}
