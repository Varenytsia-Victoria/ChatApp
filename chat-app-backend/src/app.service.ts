import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(@Inject('DATABASE_POOL') private pool: Pool) {}

  async createUser(username: string, password: string): Promise<void> {
    const hashedPassword = await bcrypt.hash(password, 10);
    await this.pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2)',
      [username, hashedPassword],
    );
  }

  async findUserByUsername(username: string): Promise<any> {
    const res = await this.pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username],
    );
    return res.rows[0];
  }
}
