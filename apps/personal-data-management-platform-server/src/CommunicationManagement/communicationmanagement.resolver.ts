import * as graphql from "@nestjs/graphql";
import { CreateCommunicationInput } from "../communicationManagement/CreateCommunicationInput";
import { CommunicationManagementService } from "./communicationmanagement.service";

export class CommunicationManagementResolver {
  constructor(protected readonly service: CommunicationManagementService) {}

  @graphql.Query(() => String)
  async CreateCommunication(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateCommunication(args);
  }

  @graphql.Mutation(() => CreateCommunicationInput)
  async CreateCommunicationAction(
    @graphql.Args()
    args: CreateCommunicationInput
  ): Promise<CreateCommunicationInput> {
    return this.service.CreateCommunicationAction(args);
  }
}
