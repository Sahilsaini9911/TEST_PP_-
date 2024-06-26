import { UserCommunication as TUserCommunication } from "../api/userCommunication/UserCommunication";

export const USERCOMMUNICATION_TITLE_FIELD = "id";

export const UserCommunicationTitle = (record: TUserCommunication): string => {
  return record.id?.toString() || String(record.id);
};
