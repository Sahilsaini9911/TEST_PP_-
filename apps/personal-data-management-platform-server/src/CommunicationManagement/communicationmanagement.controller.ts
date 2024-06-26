import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CommunicationManagementService } from "./communicationmanagement.service";
import { CreateCommunicationInput } from "../communicationManagement/CreateCommunicationInput";

@swagger.ApiTags("communicationManagements")
@common.Controller("communicationManagements")
export class CommunicationManagementController {
  constructor(protected readonly service: CommunicationManagementService) {}

  @common.Get("/:id/create-communication")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateCommunication(
    @common.Body()
    body: CreateCommunicationInput
  ): Promise<string> {
        return this.service.CreateCommunication(body);
      }

  @common.Post("/create-communication")
  @swagger.ApiOkResponse({
    type: CreateCommunicationInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateCommunicationAction(
    @common.Body()
    body: CreateCommunicationInput
  ): Promise<CreateCommunicationInput> {
        return this.service.CreateCommunicationAction(body);
      }
}
