import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserCommunicationUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  message?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
