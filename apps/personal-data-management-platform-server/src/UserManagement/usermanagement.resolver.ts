import * as graphql from "@nestjs/graphql";
import { CreateUserInput } from "../userManagement/CreateUserInput";
import { UserManagementService } from "./usermanagement.service";

export class UserManagementResolver {
  constructor(protected readonly service: UserManagementService) {}

  @graphql.Query(() => String)
  async CreateUser(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateUser(args);
  }

  @graphql.Mutation(() => CreateUserInput)
  async CreateUserAction(
    @graphql.Args()
    args: CreateUserInput
  ): Promise<CreateUserInput> {
    return this.service.CreateUserAction(args);
  }
}
