import { SortOrder } from "../../util/SortOrder";

export type UserRequestOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  requestType?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
