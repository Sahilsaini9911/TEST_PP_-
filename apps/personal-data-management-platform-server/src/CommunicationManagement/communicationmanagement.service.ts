import { Injectable } from "@nestjs/common";
import { CreateCommunicationInput } from "../communicationManagement/CreateCommunicationInput";

@Injectable()
export class CommunicationManagementService {
  constructor() {}
  async CreateCommunication(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateCommunicationAction(args: CreateCommunicationInput): Promise<CreateCommunicationInput> {
    throw new Error("Not implemented");
  }
}
