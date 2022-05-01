import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type ProductWhereInput = {
  color?: "Blue" | "Red" | "Green";
  id?: StringFilter;
  price?: FloatFilter;
};
