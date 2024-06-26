import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompanyDataServiceBase } from "./base/companyData.service.base";

@Injectable()
export class CompanyDataService extends CompanyDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
