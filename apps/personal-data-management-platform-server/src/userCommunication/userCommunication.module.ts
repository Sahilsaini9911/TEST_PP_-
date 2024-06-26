import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserCommunicationModuleBase } from "./base/userCommunication.module.base";
import { UserCommunicationService } from "./userCommunication.service";
import { UserCommunicationController } from "./userCommunication.controller";
import { UserCommunicationResolver } from "./userCommunication.resolver";

@Module({
  imports: [UserCommunicationModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserCommunicationController],
  providers: [UserCommunicationService, UserCommunicationResolver],
  exports: [UserCommunicationService],
})
export class UserCommunicationModule {}
