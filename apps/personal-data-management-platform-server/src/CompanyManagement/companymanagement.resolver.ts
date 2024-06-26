import * as graphql from "@nestjs/graphql";
import { CreateCompanyInput } from "../companyManagement/CreateCompanyInput";
import { CompanyManagementService } from "./companymanagement.service";

export class CompanyManagementResolver {
  constructor(protected readonly service: CompanyManagementService) {}

  @graphql.Query(() => String)
  async CreateCompany(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateCompany(args);
  }

  @graphql.Mutation(() => CreateCompanyInput)
  async CreateCompanyAction(
    @graphql.Args()
    args: CreateCompanyInput
  ): Promise<CreateCompanyInput> {
    return this.service.CreateCompanyAction(args);
  }
}
