import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserRequestService } from "./userRequest.service";
import { UserRequestControllerBase } from "./base/userRequest.controller.base";

@swagger.ApiTags("userRequests")
@common.Controller("userRequests")
export class UserRequestController extends UserRequestControllerBase {
  constructor(
    protected readonly service: UserRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
