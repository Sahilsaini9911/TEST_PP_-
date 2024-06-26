import { Module } from "@nestjs/common";
import { PrivacyAgreementManagementService } from "./privacyagreementmanagement.service";
import { PrivacyAgreementManagementController } from "./privacyagreementmanagement.controller";
import { PrivacyAgreementManagementResolver } from "./privacyagreementmanagement.resolver";

@Module({
  controllers: [PrivacyAgreementManagementController],
  providers: [PrivacyAgreementManagementService, PrivacyAgreementManagementResolver],
  exports: [PrivacyAgreementManagementService],
})
export class PrivacyAgreementManagementModule {}
