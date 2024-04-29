import { Injectable } from "@nestjs/common";
import { UsersRepository } from "auth/domain";

export class FindUserQuery {
  constructor(public readonly user, public readonly password) {}
}

@Injectable()
export class FindUserQueryHandler {
  constructor(private usersRepository: UsersRepository) {}
  async execute(query: FindUserQuery) {
    return await this.usersRepository.findUser(query.user, query.password);
  }
}
