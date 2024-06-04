/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Income as PrismaIncome } from "@prisma/client";

export class IncomeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.IncomeCountArgs, "select">): Promise<number> {
    return this.prisma.income.count(args);
  }

  async incomes<T extends Prisma.IncomeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncomeFindManyArgs>
  ): Promise<PrismaIncome[]> {
    return this.prisma.income.findMany<Prisma.IncomeFindManyArgs>(args);
  }
  async income<T extends Prisma.IncomeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncomeFindUniqueArgs>
  ): Promise<PrismaIncome | null> {
    return this.prisma.income.findUnique(args);
  }
  async createIncome<T extends Prisma.IncomeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncomeCreateArgs>
  ): Promise<PrismaIncome> {
    return this.prisma.income.create<T>(args);
  }
  async updateIncome<T extends Prisma.IncomeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncomeUpdateArgs>
  ): Promise<PrismaIncome> {
    return this.prisma.income.update<T>(args);
  }
  async deleteIncome<T extends Prisma.IncomeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncomeDeleteArgs>
  ): Promise<PrismaIncome> {
    return this.prisma.income.delete(args);
  }
}