import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompanyDataCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  dataType?: string | null;
  dataValue?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
