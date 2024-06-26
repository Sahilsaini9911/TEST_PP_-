import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PrivacyAgreementService } from "./privacyAgreement.service";
import { PrivacyAgreementControllerBase } from "./base/privacyAgreement.controller.base";

@swagger.ApiTags("privacyAgreements")
@common.Controller("privacyAgreements")
export class PrivacyAgreementController extends PrivacyAgreementControllerBase {
  constructor(
    protected readonly service: PrivacyAgreementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
