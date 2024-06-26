import { UserRequestWhereInput } from "./UserRequestWhereInput";
import { UserRequestOrderByInput } from "./UserRequestOrderByInput";

export type UserRequestFindManyArgs = {
  where?: UserRequestWhereInput;
  orderBy?: Array<UserRequestOrderByInput>;
  skip?: number;
  take?: number;
};
