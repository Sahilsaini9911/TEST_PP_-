import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserManagementService } from "./usermanagement.service";
import { CreateUserInput } from "../userManagement/CreateUserInput";

@swagger.ApiTags("userManagements")
@common.Controller("userManagements")
export class UserManagementController {
  constructor(protected readonly service: UserManagementService) {}

  @common.Get("/:id/create-user")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateUser(
    @common.Body()
    body: CreateUserInput
  ): Promise<string> {
        return this.service.CreateUser(body);
      }

  @common.Post("/create-user")
  @swagger.ApiOkResponse({
    type: CreateUserInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateUserAction(
    @common.Body()
    body: CreateUserInput
  ): Promise<CreateUserInput> {
        return this.service.CreateUserAction(body);
      }
}
