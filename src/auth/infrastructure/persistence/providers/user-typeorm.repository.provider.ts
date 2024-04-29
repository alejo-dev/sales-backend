import { Provider } from "@nestjs/common";
import { UsersRepository } from "auth/domain";
import { UsersTypeformRepository } from "../repository/users-typeform.repository";

export const UserTypeormRepositoryProvider: Provider = {
  provide: UsersRepository,
  useClass: UsersTypeformRepository,
};
