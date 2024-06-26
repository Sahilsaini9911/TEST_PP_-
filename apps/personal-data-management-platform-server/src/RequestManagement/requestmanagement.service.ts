import { Injectable } from "@nestjs/common";
import { CreateRequestInput } from "../requestManagement/CreateRequestInput";

@Injectable()
export class RequestManagementService {
  constructor() {}
  async CreateRequest(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateRequestAction(args: CreateRequestInput): Promise<CreateRequestInput> {
    throw new Error("Not implemented");
  }
}
