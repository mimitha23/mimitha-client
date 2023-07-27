import { axiosPublicQuery } from "service/axios";

export async function getActiveProductQuery(payload) {
  return await axiosPublicQuery.get(`/products/${payload.productId}`);
}

export async function getRelatedProductsQuery(payload) {
  return await axiosPublicQuery.get(`/products/${payload.productId}/related`);
}
