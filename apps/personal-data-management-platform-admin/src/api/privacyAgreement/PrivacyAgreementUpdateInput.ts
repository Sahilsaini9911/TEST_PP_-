import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type PrivacyAgreementUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  content?: string | null;
  timestamp?: Date | null;
  version?: string | null;
};
