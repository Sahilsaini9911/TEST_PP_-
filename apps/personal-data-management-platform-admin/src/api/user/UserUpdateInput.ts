import { CompanyDataUpdateManyWithoutUsersInput } from "./CompanyDataUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserCommunicationUpdateManyWithoutUsersInput } from "./UserCommunicationUpdateManyWithoutUsersInput";
import { UserRequestUpdateManyWithoutUsersInput } from "./UserRequestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  companyDataItems?: CompanyDataUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userCommunications?: UserCommunicationUpdateManyWithoutUsersInput;
  username?: string;
  userRequests?: UserRequestUpdateManyWithoutUsersInput;
};
