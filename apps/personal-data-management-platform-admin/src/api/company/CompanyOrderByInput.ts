import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  contactInfo?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
