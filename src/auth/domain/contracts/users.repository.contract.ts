import { User } from "../models/user.model";

export abstract class UsersRepository {
  abstract findUser(user: string, password: string): Promise<User>;
}
