import { Company } from "../company/Company";

export type PrivacyAgreement = {
  company?: Company | null;
  content: string | null;
  createdAt: Date;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
  version: string | null;
};
