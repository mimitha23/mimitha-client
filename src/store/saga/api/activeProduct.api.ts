import {
  GetActiveProductArgsT,
  GetRelatedProductsArgsT,
} from "interface/DB/product.types";
import { axiosPublicQuery } from "service/axios";

export async function getActiveProductQuery(payload: GetActiveProductArgsT) {
  return await axiosPublicQuery.get(`/products/${payload.productId}`);
}

export async function getRelatedProductsQuery(
  payload: GetRelatedProductsArgsT
) {
  return await axiosPublicQuery.get(`/products/${payload.productId}/related`);
}
