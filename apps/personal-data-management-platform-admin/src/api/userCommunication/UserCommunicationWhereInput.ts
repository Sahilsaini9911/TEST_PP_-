import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserCommunicationWhereInput = {
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
  message?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
