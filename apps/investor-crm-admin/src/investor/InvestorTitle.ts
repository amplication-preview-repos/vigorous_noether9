import { Investor as TInvestor } from "../api/investor/Investor";

export const INVESTOR_TITLE_FIELD = "firstName";

export const InvestorTitle = (record: TInvestor): string => {
  return record.firstName?.toString() || String(record.id);
};
