import { axiosPublicQuery } from "service/axios";

import { GetProductToEditArgsT } from "interface/DB/editor.types";

export async function getProductToEdit(payload: GetProductToEditArgsT) {
  return axiosPublicQuery.get(`/products/${payload.registeredProductId}/edit`);
}
