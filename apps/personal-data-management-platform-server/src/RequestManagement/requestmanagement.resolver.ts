import * as graphql from "@nestjs/graphql";
import { CreateRequestInput } from "../requestManagement/CreateRequestInput";
import { RequestManagementService } from "./requestmanagement.service";

export class RequestManagementResolver {
  constructor(protected readonly service: RequestManagementService) {}

  @graphql.Query(() => String)
  async CreateRequest(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateRequest(args);
  }

  @graphql.Mutation(() => CreateRequestInput)
  async CreateRequestAction(
    @graphql.Args()
    args: CreateRequestInput
  ): Promise<CreateRequestInput> {
    return this.service.CreateRequestAction(args);
  }
}
