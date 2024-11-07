import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService {

  constructor(@Inject('DATABASE_POOL') private readonly pool: Pool) {}

  async query(queryText: string, params?: any[]) {
    const res = await this.pool.query(queryText, params);
    return res.rows;
  }
}
