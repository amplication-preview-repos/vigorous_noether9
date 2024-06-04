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
import { IncomeWhereInput } from "./IncomeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IncomeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IncomeWhereInput,
  })
  @ValidateNested()
  @Type(() => IncomeWhereInput)
  @IsOptional()
  @Field(() => IncomeWhereInput, {
    nullable: true,
  })
  every?: IncomeWhereInput;

  @ApiProperty({
    required: false,
    type: () => IncomeWhereInput,
  })
  @ValidateNested()
  @Type(() => IncomeWhereInput)
  @IsOptional()
  @Field(() => IncomeWhereInput, {
    nullable: true,
  })
  some?: IncomeWhereInput;

  @ApiProperty({
    required: false,
    type: () => IncomeWhereInput,
  })
  @ValidateNested()
  @Type(() => IncomeWhereInput)
  @IsOptional()
  @Field(() => IncomeWhereInput, {
    nullable: true,
  })
  none?: IncomeWhereInput;
}
export { IncomeListRelationFilter as IncomeListRelationFilter };
