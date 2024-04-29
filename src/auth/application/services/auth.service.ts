import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import {
  FindUserQuery,
  FindUserQueryHandler,
} from "../handlers/queries/find-user.query.handler";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private findUserQueryHandler: FindUserQueryHandler
  ) {}

  async signIn(username: string, password: string): Promise<any> {
    const query = new FindUserQuery(username, password);
    const user = await this.findUserQueryHandler.execute(query);
    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = { username };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: username
    };
  }
}
