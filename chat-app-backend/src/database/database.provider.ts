import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'DATABASE_POOL',
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      return new Pool({
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        user: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
      });
    },
  },
];
