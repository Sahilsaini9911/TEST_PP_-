import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RequestManagementService } from "./requestmanagement.service";
import { CreateRequestInput } from "../requestManagement/CreateRequestInput";

@swagger.ApiTags("requestManagements")
@common.Controller("requestManagements")
export class RequestManagementController {
  constructor(protected readonly service: RequestManagementService) {}

  @common.Get("/:id/create-request")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateRequest(
    @common.Body()
    body: CreateRequestInput
  ): Promise<string> {
        return this.service.CreateRequest(body);
      }

  @common.Post("/create-request")
  @swagger.ApiOkResponse({
    type: CreateRequestInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateRequestAction(
    @common.Body()
    body: CreateRequestInput
  ): Promise<CreateRequestInput> {
        return this.service.CreateRequestAction(body);
      }
}
