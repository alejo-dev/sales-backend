import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService, FindUserQueryHandler } from "./application";
import {
  AuthController,
  AuthGuard,
  UserTypeormRepositoryProvider,
  jwtConstants,
} from "./infrastructure";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "10d" },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthGuard,
    FindUserQueryHandler,
    UserTypeormRepositoryProvider,
  ],
  exports: [AuthGuard],
})
export class AuthModule {}
