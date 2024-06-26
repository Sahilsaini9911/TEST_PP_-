import * as graphql from "@nestjs/graphql";
import { CreatePrivacyAgreementInput } from "../privacyAgreementManagement/CreatePrivacyAgreementInput";
import { PrivacyAgreementManagementService } from "./privacyagreementmanagement.service";

export class PrivacyAgreementManagementResolver {
  constructor(protected readonly service: PrivacyAgreementManagementService) {}

  @graphql.Query(() => String)
  async CreatePrivacyAgreement(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreatePrivacyAgreement(args);
  }

  @graphql.Mutation(() => CreatePrivacyAgreementInput)
  async CreatePrivacyAgreementAction(
    @graphql.Args()
    args: CreatePrivacyAgreementInput
  ): Promise<CreatePrivacyAgreementInput> {
    return this.service.CreatePrivacyAgreementAction(args);
  }
}
