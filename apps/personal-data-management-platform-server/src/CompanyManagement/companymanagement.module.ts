import { Module } from "@nestjs/common";
import { CompanyManagementService } from "./companymanagement.service";
import { CompanyManagementController } from "./companymanagement.controller";
import { CompanyManagementResolver } from "./companymanagement.resolver";

@Module({
  controllers: [CompanyManagementController],
  providers: [CompanyManagementService, CompanyManagementResolver],
  exports: [CompanyManagementService],
})
export class CompanyManagementModule {}
