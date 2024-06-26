import { PrivacyAgreement as TPrivacyAgreement } from "../api/privacyAgreement/PrivacyAgreement";

export const PRIVACYAGREEMENT_TITLE_FIELD = "version";

export const PrivacyAgreementTitle = (record: TPrivacyAgreement): string => {
  return record.version?.toString() || String(record.id);
};
