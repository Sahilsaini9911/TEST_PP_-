import { CompanyDataCreateNestedManyWithoutUsersInput } from "./CompanyDataCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { UserCommunicationCreateNestedManyWithoutUsersInput } from "./UserCommunicationCreateNestedManyWithoutUsersInput";
import { UserRequestCreateNestedManyWithoutUsersInput } from "./UserRequestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  companyDataItems?: CompanyDataCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userCommunications?: UserCommunicationCreateNestedManyWithoutUsersInput;
  username: string;
  userRequests?: UserRequestCreateNestedManyWithoutUsersInput;
};
