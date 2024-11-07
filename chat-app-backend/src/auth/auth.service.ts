// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AuthService {
  constructor(private readonly dbService: DatabaseService) {}

  async register(username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query =
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username';
    const result = await this.dbService.query(query, [
      username,
      hashedPassword,
    ]);
    return result[0];
  }

  async login(username: string, password: string) {
    const query = 'SELECT * FROM users WHERE username = $1';
    const user = await this.dbService.query(query, [username]);

    if (!user.length) {
      throw new Error('User not found');
    }

    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user[0].id }, 'secretKey', {
      expiresIn: '1h',
    });
    return { token };
  }
}
