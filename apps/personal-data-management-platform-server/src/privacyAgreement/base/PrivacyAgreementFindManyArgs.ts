/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PrivacyAgreementWhereInput } from "./PrivacyAgreementWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PrivacyAgreementOrderByInput } from "./PrivacyAgreementOrderByInput";

@ArgsType()
class PrivacyAgreementFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PrivacyAgreementWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PrivacyAgreementWhereInput, { nullable: true })
  @Type(() => PrivacyAgreementWhereInput)
  where?: PrivacyAgreementWhereInput;

  @ApiProperty({
    required: false,
    type: [PrivacyAgreementOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PrivacyAgreementOrderByInput], { nullable: true })
  @Type(() => PrivacyAgreementOrderByInput)
  orderBy?: Array<PrivacyAgreementOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PrivacyAgreementFindManyArgs as PrivacyAgreementFindManyArgs };
