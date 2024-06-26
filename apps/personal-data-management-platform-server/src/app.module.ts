import { Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-ioredis-yet";
import { UserCommunicationModule } from "./userCommunication/userCommunication.module";
import { UserRequestModule } from "./userRequest/userRequest.module";
import { PrivacyAgreementModule } from "./privacyAgreement/privacyAgreement.module";
import { CompanyModule } from "./company/company.module";
import { CompanyDataModule } from "./companyData/companyData.module";
import { UserModule } from "./user/user.module";
import { CommunicationManagementModule } from "./CommunicationManagement/communicationmanagement.module";
import { CompanyManagementModule } from "./CompanyManagement/companymanagement.module";
import { PrivacyAgreementManagementModule } from "./PrivacyAgreementManagement/privacyagreementmanagement.module";
import { RequestManagementModule } from "./RequestManagement/requestmanagement.module";
import { UserManagementModule } from "./UserManagement/usermanagement.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserCommunicationModule,
    UserRequestModule,
    PrivacyAgreementModule,
    CompanyModule,
    CompanyDataModule,
    UserModule,
    CommunicationManagementModule,
    CompanyManagementModule,
    PrivacyAgreementManagementModule,
    RequestManagementModule,
    UserManagementModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],

      useFactory: async (configService: ConfigService) => {
        const host = configService.get("REDIS_HOST");
        const port = configService.get("REDIS_PORT");
        const username = configService.get("REDIS_USERNAME");
        const password = configService.get("REDIS_PASSWORD");
        const ttl = configService.get("REDIS_TTL", 5000);

        return {
          store: await redisStore({
            host: host,
            port: port,
            username: username,
            password: password,
            ttl: ttl,
          }),
        };
      },

      inject: [ConfigService],
    }),
  ],
  providers: [],
})
export class AppModule {}
