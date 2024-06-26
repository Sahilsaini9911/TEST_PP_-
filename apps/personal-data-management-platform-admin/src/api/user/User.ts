import { CompanyData } from "../companyData/CompanyData";
import { JsonValue } from "type-fest";
import { UserCommunication } from "../userCommunication/UserCommunication";
import { UserRequest } from "../userRequest/UserRequest";

export type User = {
  companyDataItems?: Array<CompanyData>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userCommunications?: Array<UserCommunication>;
  username: string;
  userRequests?: Array<UserRequest>;
};
