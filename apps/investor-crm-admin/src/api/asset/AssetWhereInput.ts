import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AssetWhereInput = {
  category?: "Option1";
  id?: StringFilter;
  name?: StringNullableFilter;
  purchaseDate?: DateTimeNullableFilter;
  value?: FloatNullableFilter;
};
