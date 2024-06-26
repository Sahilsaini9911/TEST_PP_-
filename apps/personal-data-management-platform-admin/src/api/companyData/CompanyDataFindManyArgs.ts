import { CompanyDataWhereInput } from "./CompanyDataWhereInput";
import { CompanyDataOrderByInput } from "./CompanyDataOrderByInput";

export type CompanyDataFindManyArgs = {
  where?: CompanyDataWhereInput;
  orderBy?: Array<CompanyDataOrderByInput>;
  skip?: number;
  take?: number;
};
