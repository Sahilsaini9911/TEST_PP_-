import { CompanyDataCreateNestedManyWithoutCompaniesInput } from "./CompanyDataCreateNestedManyWithoutCompaniesInput";
import { PrivacyAgreementCreateNestedManyWithoutCompaniesInput } from "./PrivacyAgreementCreateNestedManyWithoutCompaniesInput";
import { UserCommunicationCreateNestedManyWithoutCompaniesInput } from "./UserCommunicationCreateNestedManyWithoutCompaniesInput";
import { UserRequestCreateNestedManyWithoutCompaniesInput } from "./UserRequestCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  companyDataItems?: CompanyDataCreateNestedManyWithoutCompaniesInput;
  contactInfo?: string | null;
  name?: string | null;
  privacyAgreements?: PrivacyAgreementCreateNestedManyWithoutCompaniesInput;
  userCommunications?: UserCommunicationCreateNestedManyWithoutCompaniesInput;
  userRequests?: UserRequestCreateNestedManyWithoutCompaniesInput;
};
