import { axiosPublicQuery } from "service/axios";

export async function getProductsFilterQuery(payload) {
  return await axiosPublicQuery(`/products/filter?${payload}`);
}
