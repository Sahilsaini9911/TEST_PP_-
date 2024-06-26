import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "../userManagement/CreateUserInput";

@Injectable()
export class UserManagementService {
  constructor() {}
  async CreateUser(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateUserAction(args: CreateUserInput): Promise<CreateUserInput> {
    throw new Error("Not implemented");
  }
}
