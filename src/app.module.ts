import { Module } from "@nestjs/common";
import { UsersModule } from "./modules/users/users.module";
import { AuthModule } from "./modules/auth/auth.module";
import { OrdersModule } from "./modules/orders/orders.module";
import { ProductsModule } from "./modules/products/products.module";
import { databaseConfig } from "./config/database.config";
import { ProductsModule } from "./modules/products/products.module";

@Module({
  imports: [
    UsersModule,
    AuthModule,
    OrdersModule,
    ProductsModule,
    databaseConfig,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
