/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { InvestorService } from "../investor.service";
import { InvestorCreateInput } from "./InvestorCreateInput";
import { Investor } from "./Investor";
import { InvestorFindManyArgs } from "./InvestorFindManyArgs";
import { InvestorWhereUniqueInput } from "./InvestorWhereUniqueInput";
import { InvestorUpdateInput } from "./InvestorUpdateInput";

export class InvestorControllerBase {
  constructor(protected readonly service: InvestorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Investor })
  async createInvestor(
    @common.Body() data: InvestorCreateInput
  ): Promise<Investor> {
    return await this.service.createInvestor({
      data: data,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Investor] })
  @ApiNestedQuery(InvestorFindManyArgs)
  async investors(@common.Req() request: Request): Promise<Investor[]> {
    const args = plainToClass(InvestorFindManyArgs, request.query);
    return this.service.investors({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Investor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async investor(
    @common.Param() params: InvestorWhereUniqueInput
  ): Promise<Investor | null> {
    const result = await this.service.investor({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Investor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInvestor(
    @common.Param() params: InvestorWhereUniqueInput,
    @common.Body() data: InvestorUpdateInput
  ): Promise<Investor | null> {
    try {
      return await this.service.updateInvestor({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phoneNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Investor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInvestor(
    @common.Param() params: InvestorWhereUniqueInput
  ): Promise<Investor | null> {
    try {
      return await this.service.deleteInvestor({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phoneNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
