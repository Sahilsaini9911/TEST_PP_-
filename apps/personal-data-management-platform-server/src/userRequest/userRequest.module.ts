import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserRequestModuleBase } from "./base/userRequest.module.base";
import { UserRequestService } from "./userRequest.service";
import { UserRequestController } from "./userRequest.controller";
import { UserRequestResolver } from "./userRequest.resolver";

@Module({
  imports: [UserRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserRequestController],
  providers: [UserRequestService, UserRequestResolver],
  exports: [UserRequestService],
})
export class UserRequestModule {}
