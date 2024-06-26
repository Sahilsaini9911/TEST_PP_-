import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserCommunicationResolverBase } from "./base/userCommunication.resolver.base";
import { UserCommunication } from "./base/UserCommunication";
import { UserCommunicationService } from "./userCommunication.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserCommunication)
export class UserCommunicationResolver extends UserCommunicationResolverBase {
  constructor(
    protected readonly service: UserCommunicationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
