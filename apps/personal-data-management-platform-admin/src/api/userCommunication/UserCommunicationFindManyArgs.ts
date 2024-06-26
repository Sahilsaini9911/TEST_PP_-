import { UserCommunicationWhereInput } from "./UserCommunicationWhereInput";
import { UserCommunicationOrderByInput } from "./UserCommunicationOrderByInput";

export type UserCommunicationFindManyArgs = {
  where?: UserCommunicationWhereInput;
  orderBy?: Array<UserCommunicationOrderByInput>;
  skip?: number;
  take?: number;
};
