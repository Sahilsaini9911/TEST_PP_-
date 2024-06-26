import { UserRequest as TUserRequest } from "../api/userRequest/UserRequest";

export const USERREQUEST_TITLE_FIELD = "id";

export const UserRequestTitle = (record: TUserRequest): string => {
  return record.id?.toString() || String(record.id);
};
