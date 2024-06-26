/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PrivacyAgreementService } from "../privacyAgreement.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PrivacyAgreementCreateInput } from "./PrivacyAgreementCreateInput";
import { PrivacyAgreement } from "./PrivacyAgreement";
import { PrivacyAgreementFindManyArgs } from "./PrivacyAgreementFindManyArgs";
import { PrivacyAgreementWhereUniqueInput } from "./PrivacyAgreementWhereUniqueInput";
import { PrivacyAgreementUpdateInput } from "./PrivacyAgreementUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PrivacyAgreementControllerBase {
  constructor(
    protected readonly service: PrivacyAgreementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PrivacyAgreement })
  @nestAccessControl.UseRoles({
    resource: "PrivacyAgreement",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PrivacyAgreementCreateInput,
  })
  async createPrivacyAgreement(
    @common.Body() data: PrivacyAgreementCreateInput
  ): Promise<PrivacyAgreement> {
    return await this.service.createPrivacyAgreement({
      data: {
        ...data,

        company: data.company
          ? {
              connect: data.company,
            }
          : undefined,
      },
      select: {
        company: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        timestamp: true,
        updatedAt: true,
        version: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PrivacyAgreement] })
  @ApiNestedQuery(PrivacyAgreementFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PrivacyAgreement",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async privacyAgreements(
    @common.Req() request: Request
  ): Promise<PrivacyAgreement[]> {
    const args = plainToClass(PrivacyAgreementFindManyArgs, request.query);
    return this.service.privacyAgreements({
      ...args,
      select: {
        company: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        timestamp: true,
        updatedAt: true,
        version: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PrivacyAgreement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PrivacyAgreement",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async privacyAgreement(
    @common.Param() params: PrivacyAgreementWhereUniqueInput
  ): Promise<PrivacyAgreement | null> {
    const result = await this.service.privacyAgreement({
      where: params,
      select: {
        company: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,
        id: true,
        timestamp: true,
        updatedAt: true,
        version: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PrivacyAgreement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PrivacyAgreement",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PrivacyAgreementUpdateInput,
  })
  async updatePrivacyAgreement(
    @common.Param() params: PrivacyAgreementWhereUniqueInput,
    @common.Body() data: PrivacyAgreementUpdateInput
  ): Promise<PrivacyAgreement | null> {
    try {
      return await this.service.updatePrivacyAgreement({
        where: params,
        data: {
          ...data,

          company: data.company
            ? {
                connect: data.company,
              }
            : undefined,
        },
        select: {
          company: {
            select: {
              id: true,
            },
          },

          content: true,
          createdAt: true,
          id: true,
          timestamp: true,
          updatedAt: true,
          version: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PrivacyAgreement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PrivacyAgreement",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePrivacyAgreement(
    @common.Param() params: PrivacyAgreementWhereUniqueInput
  ): Promise<PrivacyAgreement | null> {
    try {
      return await this.service.deletePrivacyAgreement({
        where: params,
        select: {
          company: {
            select: {
              id: true,
            },
          },

          content: true,
          createdAt: true,
          id: true,
          timestamp: true,
          updatedAt: true,
          version: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
