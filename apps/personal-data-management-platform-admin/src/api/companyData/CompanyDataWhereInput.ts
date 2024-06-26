import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyDataWhereInput = {
  company?: CompanyWhereUniqueInput;
  dataType?: StringNullableFilter;
  dataValue?: JsonFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
