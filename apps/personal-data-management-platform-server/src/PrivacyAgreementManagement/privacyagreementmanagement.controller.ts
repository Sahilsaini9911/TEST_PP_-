import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PrivacyAgreementManagementService } from "./privacyagreementmanagement.service";
import { CreatePrivacyAgreementInput } from "../privacyAgreementManagement/CreatePrivacyAgreementInput";

@swagger.ApiTags("privacyAgreementManagements")
@common.Controller("privacyAgreementManagements")
export class PrivacyAgreementManagementController {
  constructor(protected readonly service: PrivacyAgreementManagementService) {}

  @common.Get("/:id/create-privacy-agreement")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePrivacyAgreement(
    @common.Body()
    body: CreatePrivacyAgreementInput
  ): Promise<string> {
        return this.service.CreatePrivacyAgreement(body);
      }

  @common.Post("/create-privacy-agreement")
  @swagger.ApiOkResponse({
    type: CreatePrivacyAgreementInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePrivacyAgreementAction(
    @common.Body()
    body: CreatePrivacyAgreementInput
  ): Promise<CreatePrivacyAgreementInput> {
        return this.service.CreatePrivacyAgreementAction(body);
      }
}
