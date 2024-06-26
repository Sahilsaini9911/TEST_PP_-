import { CompanyData } from "../companyData/CompanyData";
import { PrivacyAgreement } from "../privacyAgreement/PrivacyAgreement";
import { UserCommunication } from "../userCommunication/UserCommunication";
import { UserRequest } from "../userRequest/UserRequest";

export type Company = {
  companyDataItems?: Array<CompanyData>;
  contactInfo: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  privacyAgreements?: Array<PrivacyAgreement>;
  updatedAt: Date;
  userCommunications?: Array<UserCommunication>;
  userRequests?: Array<UserRequest>;
};
