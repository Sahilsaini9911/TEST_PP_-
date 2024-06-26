import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserCommunicationService } from "./userCommunication.service";
import { UserCommunicationControllerBase } from "./base/userCommunication.controller.base";

@swagger.ApiTags("userCommunications")
@common.Controller("userCommunications")
export class UserCommunicationController extends UserCommunicationControllerBase {
  constructor(
    protected readonly service: UserCommunicationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
