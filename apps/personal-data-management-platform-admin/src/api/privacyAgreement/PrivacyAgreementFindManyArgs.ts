import { PrivacyAgreementWhereInput } from "./PrivacyAgreementWhereInput";
import { PrivacyAgreementOrderByInput } from "./PrivacyAgreementOrderByInput";

export type PrivacyAgreementFindManyArgs = {
  where?: PrivacyAgreementWhereInput;
  orderBy?: Array<PrivacyAgreementOrderByInput>;
  skip?: number;
  take?: number;
};
