import { Module } from "@nestjs/common";
import { RequestManagementService } from "./requestmanagement.service";
import { RequestManagementController } from "./requestmanagement.controller";
import { RequestManagementResolver } from "./requestmanagement.resolver";

@Module({
  controllers: [RequestManagementController],
  providers: [RequestManagementService, RequestManagementResolver],
  exports: [RequestManagementService],
})
export class RequestManagementModule {}
