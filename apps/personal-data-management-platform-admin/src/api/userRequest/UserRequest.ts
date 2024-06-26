import { Company } from "../company/Company";
import { User } from "../user/User";

export type UserRequest = {
  company?: Company | null;
  createdAt: Date;
  id: string;
  requestType?: "Option1" | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
