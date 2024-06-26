import { CompanyData as TCompanyData } from "../api/companyData/CompanyData";

export const COMPANYDATA_TITLE_FIELD = "dataType";

export const CompanyDataTitle = (record: TCompanyData): string => {
  return record.dataType?.toString() || String(record.id);
};
