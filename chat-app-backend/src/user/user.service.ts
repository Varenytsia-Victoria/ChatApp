import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly dbService: DatabaseService) {}

  async getUserById(userId: number) {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await this.dbService.query(query, [userId]);
    return result[0];
  }
}
