import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "auth/application";
import { userDto } from "../dto/user.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  signIn(@Body() user: userDto) {
    return this.authService.signIn(user.user, user.password);
  }
}
