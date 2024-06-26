/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CompanyDataCreateNestedManyWithoutCompaniesInput } from "./CompanyDataCreateNestedManyWithoutCompaniesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { PrivacyAgreementCreateNestedManyWithoutCompaniesInput } from "./PrivacyAgreementCreateNestedManyWithoutCompaniesInput";
import { UserCommunicationCreateNestedManyWithoutCompaniesInput } from "./UserCommunicationCreateNestedManyWithoutCompaniesInput";
import { UserRequestCreateNestedManyWithoutCompaniesInput } from "./UserRequestCreateNestedManyWithoutCompaniesInput";

@InputType()
class CompanyCreateInput {
  @ApiProperty({
    required: false,
    type: () => CompanyDataCreateNestedManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => CompanyDataCreateNestedManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => CompanyDataCreateNestedManyWithoutCompaniesInput, {
    nullable: true,
  })
  companyDataItems?: CompanyDataCreateNestedManyWithoutCompaniesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contactInfo?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PrivacyAgreementCreateNestedManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => PrivacyAgreementCreateNestedManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => PrivacyAgreementCreateNestedManyWithoutCompaniesInput, {
    nullable: true,
  })
  privacyAgreements?: PrivacyAgreementCreateNestedManyWithoutCompaniesInput;

  @ApiProperty({
    required: false,
    type: () => UserCommunicationCreateNestedManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => UserCommunicationCreateNestedManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => UserCommunicationCreateNestedManyWithoutCompaniesInput, {
    nullable: true,
  })
  userCommunications?: UserCommunicationCreateNestedManyWithoutCompaniesInput;

  @ApiProperty({
    required: false,
    type: () => UserRequestCreateNestedManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => UserRequestCreateNestedManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => UserRequestCreateNestedManyWithoutCompaniesInput, {
    nullable: true,
  })
  userRequests?: UserRequestCreateNestedManyWithoutCompaniesInput;
}

export { CompanyCreateInput as CompanyCreateInput };
