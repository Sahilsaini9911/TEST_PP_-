/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PrivacyAgreementWhereUniqueInput } from "../../privacyAgreement/base/PrivacyAgreementWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PrivacyAgreementUpdateManyWithoutCompaniesInput {
  @Field(() => [PrivacyAgreementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PrivacyAgreementWhereUniqueInput],
  })
  connect?: Array<PrivacyAgreementWhereUniqueInput>;

  @Field(() => [PrivacyAgreementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PrivacyAgreementWhereUniqueInput],
  })
  disconnect?: Array<PrivacyAgreementWhereUniqueInput>;

  @Field(() => [PrivacyAgreementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PrivacyAgreementWhereUniqueInput],
  })
  set?: Array<PrivacyAgreementWhereUniqueInput>;
}

export { PrivacyAgreementUpdateManyWithoutCompaniesInput as PrivacyAgreementUpdateManyWithoutCompaniesInput };
