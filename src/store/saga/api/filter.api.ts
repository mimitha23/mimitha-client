import { axiosPublicQuery } from "service/axios";
import { GetProductFilterArgsT } from "interface/DB/productsFilter.types";

export async function getProductsFilterQuery(payload: GetProductFilterArgsT) {
  return await axiosPublicQuery(`/products/filter?${payload}`);
}
