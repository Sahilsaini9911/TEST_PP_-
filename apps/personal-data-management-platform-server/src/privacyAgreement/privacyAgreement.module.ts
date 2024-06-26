import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PrivacyAgreementModuleBase } from "./base/privacyAgreement.module.base";
import { PrivacyAgreementService } from "./privacyAgreement.service";
import { PrivacyAgreementController } from "./privacyAgreement.controller";
import { PrivacyAgreementResolver } from "./privacyAgreement.resolver";

@Module({
  imports: [PrivacyAgreementModuleBase, forwardRef(() => AuthModule)],
  controllers: [PrivacyAgreementController],
  providers: [PrivacyAgreementService, PrivacyAgreementResolver],
  exports: [PrivacyAgreementService],
})
export class PrivacyAgreementModule {}
