import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

import { User } from '../../modules/users/entities/user.entity';
import { Product } from '../../modules/products/entities/product.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [User, Product],
        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
