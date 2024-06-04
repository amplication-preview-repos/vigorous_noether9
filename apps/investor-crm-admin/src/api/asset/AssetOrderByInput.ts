import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  purchaseDate?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
