import { Injectable } from "@nestjs/common";
import { User, UsersRepository } from "auth/domain";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class UsersTypeformRepository extends UsersRepository {
  public async findUser(user: string, password: string): Promise<User> {
    const userEntity = await UserEntity.findOne({
      where: { user: user, password: password },
    });
    console.log(userEntity);
    if (userEntity) {
      return new User(userEntity.id, userEntity.user);
    }
    return null;
  }
}
