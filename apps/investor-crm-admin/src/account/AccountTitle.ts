import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "currency";

export const AccountTitle = (record: TAccount): string => {
  return record.currency?.toString() || String(record.id);
};
