import { SortOrder } from "../../util/SortOrder";

export type UserCommunicationOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
