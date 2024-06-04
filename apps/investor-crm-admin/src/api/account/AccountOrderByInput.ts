import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  accountType?: SortOrder;
  balance?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  institution?: SortOrder;
  updatedAt?: SortOrder;
};
