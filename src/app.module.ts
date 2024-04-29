import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsModule } from "products/products.module";
import { ProductEntity } from "products/infrastructure";
import { UserEntity } from "auth/infrastructure";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "sales-mysqldb",
      port: 3306,
      username: "root",
      password: "root",
      database: "sales_db",
      entities: [ProductEntity, UserEntity],
      synchronize: true,
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "/upload/"),
      serveRoot: "/upload/",
    }),
    ProductsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
