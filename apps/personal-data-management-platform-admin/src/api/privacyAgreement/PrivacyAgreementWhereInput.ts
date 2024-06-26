import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PrivacyAgreementWhereInput = {
  company?: CompanyWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  version?: StringNullableFilter;
};
