import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserCommunicationServiceBase } from "./base/userCommunication.service.base";

@Injectable()
export class UserCommunicationService extends UserCommunicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
