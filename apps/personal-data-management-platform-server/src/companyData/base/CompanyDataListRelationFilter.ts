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
import { CompanyDataWhereInput } from "./CompanyDataWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CompanyDataListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CompanyDataWhereInput,
  })
  @ValidateNested()
  @Type(() => CompanyDataWhereInput)
  @IsOptional()
  @Field(() => CompanyDataWhereInput, {
    nullable: true,
  })
  every?: CompanyDataWhereInput;

  @ApiProperty({
    required: false,
    type: () => CompanyDataWhereInput,
  })
  @ValidateNested()
  @Type(() => CompanyDataWhereInput)
  @IsOptional()
  @Field(() => CompanyDataWhereInput, {
    nullable: true,
  })
  some?: CompanyDataWhereInput;

  @ApiProperty({
    required: false,
    type: () => CompanyDataWhereInput,
  })
  @ValidateNested()
  @Type(() => CompanyDataWhereInput)
  @IsOptional()
  @Field(() => CompanyDataWhereInput, {
    nullable: true,
  })
  none?: CompanyDataWhereInput;
}
export { CompanyDataListRelationFilter as CompanyDataListRelationFilter };
