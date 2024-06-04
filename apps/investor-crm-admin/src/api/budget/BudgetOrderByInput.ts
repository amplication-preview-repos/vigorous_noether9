import { SortOrder } from "../../util/SortOrder";

export type BudgetOrderByInput = {
  amount?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
