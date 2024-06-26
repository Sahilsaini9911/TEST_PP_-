import { CompanyDataUpdateManyWithoutCompaniesInput } from "./CompanyDataUpdateManyWithoutCompaniesInput";
import { PrivacyAgreementUpdateManyWithoutCompaniesInput } from "./PrivacyAgreementUpdateManyWithoutCompaniesInput";
import { UserCommunicationUpdateManyWithoutCompaniesInput } from "./UserCommunicationUpdateManyWithoutCompaniesInput";
import { UserRequestUpdateManyWithoutCompaniesInput } from "./UserRequestUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  companyDataItems?: CompanyDataUpdateManyWithoutCompaniesInput;
  contactInfo?: string | null;
  name?: string | null;
  privacyAgreements?: PrivacyAgreementUpdateManyWithoutCompaniesInput;
  userCommunications?: UserCommunicationUpdateManyWithoutCompaniesInput;
  userRequests?: UserRequestUpdateManyWithoutCompaniesInput;
};
