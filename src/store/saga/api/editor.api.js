import { axiosPublicQuery } from "service/axios";

export async function getProductToEdit(payload) {
  return axiosPublicQuery.get(`/products/${payload.registeredProductId}/edit`);
}
