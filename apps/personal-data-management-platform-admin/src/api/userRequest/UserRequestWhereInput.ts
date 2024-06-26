import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRequestWhereInput = {
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
  requestType?: "Option1";
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
