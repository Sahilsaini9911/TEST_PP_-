import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PrivacyAgreementResolverBase } from "./base/privacyAgreement.resolver.base";
import { PrivacyAgreement } from "./base/PrivacyAgreement";
import { PrivacyAgreementService } from "./privacyAgreement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PrivacyAgreement)
export class PrivacyAgreementResolver extends PrivacyAgreementResolverBase {
  constructor(
    protected readonly service: PrivacyAgreementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
