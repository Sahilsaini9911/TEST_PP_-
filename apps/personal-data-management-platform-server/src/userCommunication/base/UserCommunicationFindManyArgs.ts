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
import { UserCommunicationWhereInput } from "./UserCommunicationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserCommunicationOrderByInput } from "./UserCommunicationOrderByInput";

@ArgsType()
class UserCommunicationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserCommunicationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserCommunicationWhereInput, { nullable: true })
  @Type(() => UserCommunicationWhereInput)
  where?: UserCommunicationWhereInput;

  @ApiProperty({
    required: false,
    type: [UserCommunicationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserCommunicationOrderByInput], { nullable: true })
  @Type(() => UserCommunicationOrderByInput)
  orderBy?: Array<UserCommunicationOrderByInput>;

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

export { UserCommunicationFindManyArgs as UserCommunicationFindManyArgs };
