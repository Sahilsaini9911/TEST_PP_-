import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CompanyDataModuleBase } from "./base/companyData.module.base";
import { CompanyDataService } from "./companyData.service";
import { CompanyDataController } from "./companyData.controller";
import { CompanyDataResolver } from "./companyData.resolver";

@Module({
  imports: [CompanyDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [CompanyDataController],
  providers: [CompanyDataService, CompanyDataResolver],
  exports: [CompanyDataService],
})
export class CompanyDataModule {}
