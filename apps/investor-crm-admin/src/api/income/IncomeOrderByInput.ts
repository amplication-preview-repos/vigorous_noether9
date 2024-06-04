import { SortOrder } from "../../util/SortOrder";

export type IncomeOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  source?: SortOrder;
  updatedAt?: SortOrder;
};
