import { SortOrder } from "../../util/SortOrder";

export type CompanyDataOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  dataType?: SortOrder;
  dataValue?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
