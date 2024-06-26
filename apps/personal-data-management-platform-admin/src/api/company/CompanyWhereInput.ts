import { CompanyDataListRelationFilter } from "../companyData/CompanyDataListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PrivacyAgreementListRelationFilter } from "../privacyAgreement/PrivacyAgreementListRelationFilter";
import { UserCommunicationListRelationFilter } from "../userCommunication/UserCommunicationListRelationFilter";
import { UserRequestListRelationFilter } from "../userRequest/UserRequestListRelationFilter";

export type CompanyWhereInput = {
  companyDataItems?: CompanyDataListRelationFilter;
  contactInfo?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  privacyAgreements?: PrivacyAgreementListRelationFilter;
  userCommunications?: UserCommunicationListRelationFilter;
  userRequests?: UserRequestListRelationFilter;
};
