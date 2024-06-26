import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserRequestServiceBase } from "./base/userRequest.service.base";

@Injectable()
export class UserRequestService extends UserRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
