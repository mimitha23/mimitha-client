import { axiosPublicQuery } from "service/axios";

export async function getAllProductsQuery(payload) {
  return await axiosPublicQuery.get(`/products/developed?${payload}`);
}

export async function searchProductsQuery(payload) {
  return await axiosPublicQuery.get(
    `/products/search?search=${payload.search}&locale=${payload.locale}`
  );
}
