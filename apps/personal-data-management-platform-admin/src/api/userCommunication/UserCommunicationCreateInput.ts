import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserCommunicationCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  message?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
