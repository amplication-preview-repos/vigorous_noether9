import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountWhereInput = {
  accountType?: "Option1";
  balance?: FloatNullableFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  institution?: StringNullableFilter;
};
