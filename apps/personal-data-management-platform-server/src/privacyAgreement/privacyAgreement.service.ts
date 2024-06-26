import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrivacyAgreementServiceBase } from "./base/privacyAgreement.service.base";

@Injectable()
export class PrivacyAgreementService extends PrivacyAgreementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
