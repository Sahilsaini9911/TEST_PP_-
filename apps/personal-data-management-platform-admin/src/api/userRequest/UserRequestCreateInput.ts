import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRequestCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  requestType?: "Option1" | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
