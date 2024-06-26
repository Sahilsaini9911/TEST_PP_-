import { Injectable } from "@nestjs/common";
import { CreateCompanyInput } from "../companyManagement/CreateCompanyInput";

@Injectable()
export class CompanyManagementService {
  constructor() {}
  async CreateCompany(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateCompanyAction(args: CreateCompanyInput): Promise<CreateCompanyInput> {
    throw new Error("Not implemented");
  }
}
