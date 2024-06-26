import { Injectable } from "@nestjs/common";
import { CreatePrivacyAgreementInput } from "../privacyAgreementManagement/CreatePrivacyAgreementInput";

@Injectable()
export class PrivacyAgreementManagementService {
  constructor() {}
  async CreatePrivacyAgreement(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreatePrivacyAgreementAction(args: CreatePrivacyAgreementInput): Promise<CreatePrivacyAgreementInput> {
    throw new Error("Not implemented");
  }
}
