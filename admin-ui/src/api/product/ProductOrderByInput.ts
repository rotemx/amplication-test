import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  color?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
