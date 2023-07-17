import { axiosPublicQuery } from "service/axios";

export async function getActiveProduct(payload) {
  return await axiosPublicQuery.get(`/products/${payload.productId}`);
}
