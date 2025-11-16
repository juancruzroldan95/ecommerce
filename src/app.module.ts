import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './modules/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.local',
    }),
    DatabaseModule,
    UsersModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
