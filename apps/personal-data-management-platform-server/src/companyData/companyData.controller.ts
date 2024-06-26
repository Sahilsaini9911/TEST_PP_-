import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CompanyDataService } from "./companyData.service";
import { CompanyDataControllerBase } from "./base/companyData.controller.base";

@swagger.ApiTags("companyData")
@common.Controller("companyData")
export class CompanyDataController extends CompanyDataControllerBase {
  constructor(
    protected readonly service: CompanyDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
