import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CompanyManagementService } from "./companymanagement.service";
import { CreateCompanyInput } from "../companyManagement/CreateCompanyInput";

@swagger.ApiTags("companyManagements")
@common.Controller("companyManagements")
export class CompanyManagementController {
  constructor(protected readonly service: CompanyManagementService) {}

  @common.Get("/:id/create-company")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateCompany(
    @common.Body()
    body: CreateCompanyInput
  ): Promise<string> {
        return this.service.CreateCompany(body);
      }

  @common.Post("/create-company")
  @swagger.ApiOkResponse({
    type: CreateCompanyInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateCompanyAction(
    @common.Body()
    body: CreateCompanyInput
  ): Promise<CreateCompanyInput> {
        return this.service.CreateCompanyAction(body);
      }
}
