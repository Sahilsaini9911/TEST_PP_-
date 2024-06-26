import { Company } from "../company/Company";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type CompanyData = {
  company?: Company | null;
  createdAt: Date;
  dataType: string | null;
  dataValue: JsonValue;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
