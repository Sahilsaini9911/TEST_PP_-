import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type PrivacyAgreementCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  content?: string | null;
  timestamp?: Date | null;
  version?: string | null;
};
