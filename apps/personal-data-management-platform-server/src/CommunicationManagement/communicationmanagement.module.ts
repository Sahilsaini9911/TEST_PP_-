import { Module } from "@nestjs/common";
import { CommunicationManagementService } from "./communicationmanagement.service";
import { CommunicationManagementController } from "./communicationmanagement.controller";
import { CommunicationManagementResolver } from "./communicationmanagement.resolver";

@Module({
  controllers: [CommunicationManagementController],
  providers: [CommunicationManagementService, CommunicationManagementResolver],
  exports: [CommunicationManagementService],
})
export class CommunicationManagementModule {}
