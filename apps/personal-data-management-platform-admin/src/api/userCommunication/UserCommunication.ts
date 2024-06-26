import { Company } from "../company/Company";
import { User } from "../user/User";

export type UserCommunication = {
  company?: Company | null;
  createdAt: Date;
  id: string;
  message: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
