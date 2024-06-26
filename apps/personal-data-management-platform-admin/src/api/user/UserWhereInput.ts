import { CompanyDataListRelationFilter } from "../companyData/CompanyDataListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserCommunicationListRelationFilter } from "../userCommunication/UserCommunicationListRelationFilter";
import { UserRequestListRelationFilter } from "../userRequest/UserRequestListRelationFilter";

export type UserWhereInput = {
  companyDataItems?: CompanyDataListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  userCommunications?: UserCommunicationListRelationFilter;
  username?: StringFilter;
  userRequests?: UserRequestListRelationFilter;
};
